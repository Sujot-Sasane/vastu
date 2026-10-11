import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { faqs } from '../data/faq'

export default function FAQ() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading eyebrow="Questions" title="Frequently Asked Questions" />
        <Reveal className="mt-12 divide-y divide-beige-300 rounded-md border border-beige-300 bg-white/70">
          {faqs.map((item) => (
            <details key={item.q} className="group p-5 sm:p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium text-brown-900">
                {item.q}
                <span className="shrink-0 text-2xl text-gold-700 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-3 text-base leading-relaxed text-brown-800">{item.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
