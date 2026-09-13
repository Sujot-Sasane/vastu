import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { CompassMark, VastuGrid } from './VastuMotif'

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
      className="relative flex h-[100svh] min-h-[640px] w-full items-center overflow-hidden bg-brown-900"
    >
      <motion.div style={{ y: backdropY }} className="absolute inset-0 h-full w-full">
        <HeroBackdrop />
      </motion.div>

      <div
        className="absolute inset-0 bg-gradient-to-b from-brown-900/80 via-brown-900/55 to-brown-900/90"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
        aria-hidden="true"
      />

      <CompassMark className="pointer-events-none absolute -right-16 top-1/4 h-64 w-64 text-gold-300/40 sm:h-80 sm:w-80" />
      <VastuGrid className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 text-gold-300/25 sm:h-96 sm:w-96" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto w-full max-w-5xl px-6 pt-24 text-center sm:px-8"
      >
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 inline-block text-xs uppercase tracking-[0.35em] text-gold-300"
        >
          Vastu &bull; Astrology &bull; Aura Healing
        </motion.span>

        <h1 className="font-serif text-4xl leading-[1.12] text-ivory-50 sm:text-6xl lg:text-7xl">
          {['Transform Your Space,', 'Energy & Destiny'].map((line, i) => (
            <motion.span
              key={line}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25 + i * 0.14, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-7 max-w-xl text-balance text-base text-ivory-100/85 sm:text-lg"
        >
          Creating Harmony, Prosperity &amp; Positive Energy Through Ancient Wisdom
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.78, ease: [0.22, 1, 0.36, 1] }}
          className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            to="/services"
            className="w-full rounded-full border border-ivory-100/70 px-9 py-3.5 text-sm uppercase tracking-[0.16em] text-ivory-50 transition-colors hover:border-gold-300 hover:text-gold-300 sm:w-auto"
          >
            Explore Services
          </Link>
          <Link
            to="/contact"
            className="w-full rounded-full border border-gold-400 bg-gold-500 px-9 py-3.5 text-sm uppercase tracking-[0.16em] text-brown-900 transition-colors hover:bg-transparent hover:text-gold-300 sm:w-auto"
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
          className="h-9 w-[1px] bg-gradient-to-b from-gold-300 to-transparent"
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
    <div className="relative h-full w-full bg-[radial-gradient(ellipse_at_top,_var(--color-brown-700),_var(--color-brown-900)_70%)]">
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
