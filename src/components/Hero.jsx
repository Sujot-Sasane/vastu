import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { CompassMark, VastuGrid } from './VastuMotif'
import GoldDust from './GoldDust'

export default function Hero() {
  const sectionRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const backdropY = useTransform(scrollYProgress, [0, 1], ['0%', prefersReducedMotion ? '0%' : '16%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', prefersReducedMotion ? '0%' : '22%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, prefersReducedMotion ? 1 : 0])

  return (
    <section
      ref={sectionRef}
      className="relative flex h-[100svh] min-h-[640px] w-full items-center overflow-hidden bg-deep-900"
    >
      <motion.div style={{ y: backdropY }} className="absolute inset-0 h-full w-full">
        <HeroBackdrop />
      </motion.div>

      <div
        className="absolute inset-0 bg-gradient-to-b from-ink/85 via-deep-900/55 to-ink/95"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
        aria-hidden="true"
      />

      <GoldDust />
      <CompassMark className="pointer-events-none absolute -right-16 top-1/4 h-64 w-64 text-saffron-300/40 sm:h-80 sm:w-80" />
      <VastuGrid className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 text-saffron-300/25 sm:h-96 sm:w-96" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto w-full max-w-5xl px-5 pt-20 text-center sm:px-8 sm:pt-24"
      >
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow eyebrow-dark mb-7 max-w-full justify-center rounded-2xl text-center text-xs leading-snug backdrop-blur-sm before:hidden sm:rounded-full sm:text-[0.8125rem] sm:before:block"
        >
          Vastu Consultant in Pune &bull; Astrology &bull; Aura Healing
        </motion.span>

        <h1 className="font-serif text-[2.6rem] leading-[1.05] text-ivory-50 min-[400px]:text-5xl sm:text-7xl lg:text-8xl">
          {['Transform Your Space,', 'Energy & Destiny'].map((line, i) => (
            <motion.span
              key={line}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25 + i * 0.14, ease: [0.22, 1, 0.36, 1] }}
              className={`block ${i === 1 ? 'text-shimmer' : ''}`}
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-8 max-w-xl text-balance text-lg text-ivory-100/85 sm:text-xl"
        >
          Creating Harmony, Prosperity &amp; Positive Energy Through Ancient Wisdom
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.78, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            to="/services"
            className="w-full rounded-full border border-ivory-100/30 bg-ivory-50/10 px-8 py-4 text-base font-semibold text-ivory-50 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-ivory-50/20 sm:w-auto"
          >
            Explore Services
          </Link>
          <Link
            to="/contact"
            className="btn-shine w-full rounded-full bg-saffron-500 px-8 py-4 text-base font-semibold text-deep-900 shadow-lg shadow-saffron-500/25 transition-all hover:-translate-y-0.5 hover:bg-saffron-400 sm:w-auto"
          >
            Book a Consultation
          </Link>
        </motion.div>
      </motion.div>

      <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="h-9 w-[1px] bg-gradient-to-b from-saffron-300 to-transparent"
          aria-hidden="true"
        />
      </div>
    </section>
  )
}

// Cinematic hero backdrop: drop a Google-Flow-generated video into
// public/videos/hero-bg.mp4 (+ public/images/hero-poster.jpg) and it will
// play automatically. Until those assets exist, or when the visitor prefers
// reduced motion, a still gradient + geometric backdrop is shown instead —
// the layout never depends on the video loading.
function HeroBackdrop() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className="relative h-full w-full bg-[radial-gradient(ellipse_at_top,_var(--color-deep-700),_var(--color-deep-900)_70%)]">
      {prefersReducedMotion ? (
        <img
          src="/images/hero-poster.jpg"
          alt=""
          className="h-full w-full object-cover opacity-70"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
      ) : (
        <video
          className="h-full w-full object-cover opacity-70"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/images/hero-poster.jpg"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
      )}
    </div>
  )
}
