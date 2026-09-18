import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { Link } from 'react-router-dom'
import {
  IconVastu,
  IconAstrology,
  IconAura,
  IconNumerology,
  IconBusinessGrowth,
} from './icons'
import { services } from '../data/services'

const iconMap = {
  vastu: IconVastu,
  astrology: IconAstrology,
  'aura-healing': IconAura,
  numerology: IconNumerology,
  'business-growth': IconBusinessGrowth,
}

// Editorial metadata layered on top of the shared services data — purely
// presentational, keeps `data/services.js` free of orbit-specific concerns.
const meta = {
  vastu: { tag: 'Space & Home', resonance: 95, related: ['aura-healing', 'business-growth'] },
  astrology: { tag: 'Life & Career', resonance: 90, related: ['numerology', 'business-growth'] },
  'aura-healing': { tag: 'Mind & Spirit', resonance: 88, related: ['vastu', 'astrology'] },
  numerology: { tag: 'Names & Numbers', resonance: 84, related: ['astrology', 'business-growth'] },
  'business-growth': { tag: 'Commercial Growth', resonance: 92, related: ['vastu', 'astrology'] },
}

const orbit = services.map((service) => ({ ...service, ...meta[service.id] }))

function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches,
  )

  useEffect(() => {
    const mql = window.matchMedia(query)
    const handleChange = () => setMatches(mql.matches)
    handleChange()
    mql.addEventListener('change', handleChange)
    return () => mql.removeEventListener('change', handleChange)
  }, [query])

  return matches
}

export default function PracticeAreasOrbit() {
  const isLg = useMediaQuery('(min-width: 1024px)')
  const isSm = useMediaQuery('(min-width: 640px)')
  const prefersReducedMotion = useReducedMotion()

  const radius = isLg ? 190 : isSm ? 150 : 95
  const stageSize = isLg ? 560 : isSm ? 480 : 340

  const [rotation, setRotation] = useState(0)
  const [activeId, setActiveId] = useState(null)
  const [paused, setPaused] = useState(false)

  const active = orbit.find((item) => item.id === activeId) ?? null

  useEffect(() => {
    if (prefersReducedMotion || paused || activeId) return undefined

    const timer = setInterval(() => {
      setRotation((prev) => (prev + 0.12) % 360)
    }, 40)

    return () => clearInterval(timer)
  }, [prefersReducedMotion, paused, activeId])

  const selectItem = (id) => {
    if (id === activeId) {
      setActiveId(null)
      return
    }

    const index = orbit.findIndex((item) => item.id === id)
    const targetAngle = (index / orbit.length) * 360
    setRotation(270 - targetAngle)
    setActiveId(id)
  }

  return (
    <section className="overflow-hidden bg-ivory-100 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="What We Offer"
          title="Our Practice Areas"
          subtitle="Five integrated disciplines, brought together under one consultancy — select one to explore."
        />

        <Reveal delay={0.1} className="mt-16">
          <div className="grid items-center gap-12 lg:grid-cols-[auto_1fr] lg:gap-16">
            <div
              className="relative mx-auto shrink-0"
              style={{ width: stageSize, height: stageSize }}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {/* decorative outer ring */}
              <div
                className="absolute rounded-full border border-dashed border-gold-400/25 animate-slow-spin"
                style={{
                  width: radius * 2 + 60,
                  height: radius * 2 + 60,
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
              {/* orbit ring */}
              <div
                className="absolute rounded-full border border-gold-400/40"
                style={{
                  width: radius * 2,
                  height: radius * 2,
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />

              {/* center hub */}
              <div
                className="absolute flex items-center justify-center rounded-full bg-gradient-to-br from-gold-300 via-gold-500 to-brown-700 text-ivory-50 shadow-[0_10px_30px_-8px_rgba(60,40,15,0.5)]"
                style={{
                  width: isLg ? 84 : 64,
                  height: isLg ? 84 : 64,
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <span className="absolute inset-0 rounded-full border border-ivory-50/40 animate-ping opacity-60" />
                <IconAstrology className="relative h-7 w-7 sm:h-8 sm:w-8" />
              </div>

              {orbit.map((item, index) => {
                const angle = ((index / orbit.length) * 360 + rotation) % 360
                const radian = (angle * Math.PI) / 180
                const x = radius * Math.cos(radian)
                const y = radius * Math.sin(radian)
                const isActive = item.id === activeId
                const isRelated = active?.related.includes(item.id)
                const Icon = iconMap[item.id]

                return (
                  <div
                    key={item.id}
                    className="absolute flex flex-col items-center transition-transform duration-700 ease-out"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                      zIndex: isActive ? 30 : 10,
                    }}
                  >
                    <button
                      type="button"
                      aria-pressed={isActive}
                      aria-label={`View ${item.name} practice area`}
                      onClick={() => selectItem(item.id)}
                      className={`group relative flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
                        isActive
                          ? 'scale-[1.15] border-gold-500 bg-brown-900 text-ivory-50 shadow-[0_12px_28px_-10px_rgba(60,40,15,0.55)]'
                          : isRelated
                            ? 'border-gold-500 bg-gold-200/70 text-brown-900 animate-pulse'
                            : 'border-gold-400/60 bg-ivory-50 text-brown-800 hover:-translate-y-0.5 hover:border-gold-500 hover:shadow-md'
                      }`}
                      style={{ width: isLg ? 60 : 46, height: isLg ? 60 : 46 }}
                    >
                      <Icon className={isLg ? 'h-6 w-6' : 'h-5 w-5'} />
                    </button>
                    <span
                      className={`mt-2 whitespace-nowrap text-[11px] font-medium uppercase tracking-wider transition-colors sm:text-xs ${
                        isActive ? 'text-brown-900' : 'text-brown-700/70'
                      }`}
                    >
                      {item.name}
                    </span>
                  </div>
                )
              })}
            </div>

            <div
              className="min-h-[280px] rounded-sm border border-beige-300/70 bg-ivory-50 p-8 shadow-[0_20px_40px_-28px_rgba(60,40,15,0.35)] sm:p-10"
              aria-live="polite"
            >
              <AnimatePresence mode="wait">
                {active ? (
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span className="inline-block rounded-full bg-gold-200/60 px-3 py-1 text-xs uppercase tracking-[0.2em] text-gold-700">
                      {active.tag}
                    </span>
                    <h3 className="mt-4 font-serif text-2xl text-brown-900 sm:text-3xl">
                      {active.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-brown-700/90 sm:text-base">
                      {active.description}
                    </p>

                    <div className="mt-6">
                      <div className="mb-1.5 flex items-center justify-between text-xs uppercase tracking-wider text-brown-700/70">
                        <span>Energy Alignment</span>
                        <span className="font-mono text-gold-700">{active.resonance}%</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-beige-300/60">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-gold-400 to-brown-600"
                          initial={{ width: 0 }}
                          animate={{ width: `${active.resonance}%` }}
                          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </div>
                    </div>

                    {active.related.length > 0 && (
                      <div className="mt-6 border-t border-beige-300/70 pt-5">
                        <h4 className="text-xs uppercase tracking-wider text-brown-700/70">
                          Pairs Well With
                        </h4>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {active.related.map((relatedId) => {
                            const relatedItem = orbit.find((item) => item.id === relatedId)
                            return (
                              <button
                                key={relatedId}
                                type="button"
                                onClick={() => selectItem(relatedId)}
                                className="rounded-full border border-gold-400/50 bg-ivory-100 px-3 py-1 text-xs text-brown-800 transition-colors hover:border-gold-500 hover:bg-gold-200/50"
                              >
                                {relatedItem?.name}
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    )}

                    <Link
                      to="/contact"
                      className="mt-7 inline-block rounded-full border border-gold-500 px-6 py-2.5 text-xs uppercase tracking-[0.16em] text-brown-900 transition-colors hover:bg-brown-900 hover:text-ivory-50"
                    >
                      Book This Consultation
                    </Link>
                  </motion.div>
                ) : (
                  <motion.div
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="flex h-full min-h-[220px] flex-col items-center justify-center gap-3 text-center lg:items-start lg:text-left"
                  >
                    <span className="text-xs uppercase tracking-[0.2em] text-gold-700">
                      Explore a Discipline
                    </span>
                    <p className="max-w-sm text-balance font-serif text-xl text-brown-900 sm:text-2xl">
                      Tap any node in the orbit to see how it can bring balance to your space and
                      life.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-14 flex justify-center">
            <Link
              to="/services"
              className="rounded-full border border-gold-500 px-8 py-3 text-sm uppercase tracking-[0.16em] text-brown-900 transition-colors hover:bg-brown-900 hover:text-ivory-50"
            >
              View All Services
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
