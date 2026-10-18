import Reveal from './Reveal'
import TiltCard from './TiltCard'
import SectionHeading from './SectionHeading'
import { steps } from '../data/steps'

export default function HowItWorks() {
  return (
    <section className="bg-ivory-100 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Simple Process" title="How It Works" />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08} className="h-full">
              <TiltCard>
              <div className="card h-full p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-saffron-400 to-saffron-600 font-serif text-xl text-white shadow-md shadow-saffron-500/30">
                  {i + 1}
                </span>
                <h3 className="mt-6 font-serif text-2xl text-deep-900">{step.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-deep-700">{step.description}</p>
              </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
