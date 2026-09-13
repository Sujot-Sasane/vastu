import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import { MandalaRings } from './VastuMotif'

export default function CTASection({
  lines = ['Align Your Space.', 'Balance Your Energy.', 'Empower Your Life.'],
  cta = 'Book a Consultation',
  to = '/contact',
}) {
  return (
    <section className="relative overflow-hidden bg-brown-900 py-24 sm:py-32">
      <MandalaRings className="pointer-events-none absolute left-1/2 top-1/2 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 text-gold-400/70" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <h2 className="font-serif text-3xl leading-tight text-ivory-50 sm:text-5xl">
            {lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </Reveal>
        <Reveal delay={0.15} className="mt-10">
          <Link
            to={to}
            className="inline-block rounded-full border border-gold-400 bg-gold-500 px-10 py-4 text-sm uppercase tracking-[0.16em] text-brown-900 transition-colors hover:bg-transparent hover:text-gold-300"
          >
            {cta}
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
