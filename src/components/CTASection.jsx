import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import { MandalaRings } from './VastuMotif'

export default function CTASection({
  lines = ['Align Your Space.', 'Balance Your Energy.', 'Empower Your Life.'],
  cta = 'Book a Consultation',
  to = '/contact',
}) {
  return (
    <section className="relative overflow-hidden bg-deep-900 py-28 sm:py-36">
      <MandalaRings className="pointer-events-none absolute left-1/2 top-1/2 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 text-saffron-400/40" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <h2 className="font-serif text-4xl leading-[1.1] text-ivory-50 sm:text-6xl">
            {lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </Reveal>
        <Reveal delay={0.15} className="mt-12">
          <Link
            to={to}
            className="btn-shine inline-block rounded-full bg-saffron-500 px-8 py-4 text-base font-semibold text-deep-900 shadow-lg shadow-saffron-500/25 transition-all hover:-translate-y-0.5 hover:bg-saffron-400"
          >
            {cta}
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
