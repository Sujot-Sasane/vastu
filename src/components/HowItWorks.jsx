import Reveal from './Reveal'
import TiltCard from './TiltCard'
import SectionHeading from './SectionHeading'
import { steps } from '../data/steps'

export default function HowItWorks() {
  return (
    <section className="bg-ivory-100 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Simple Process" title="How It Works" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08} className="h-full">
              <TiltCard>
              <div className="h-full rounded-md border border-beige-300 bg-ivory-50 p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brown-900 font-serif text-xl text-gold-300">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-serif text-2xl text-brown-900">{step.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-brown-800">{step.description}</p>
              </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
