import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { faqs } from '../data/faq'

export default function FAQ() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading eyebrow="Questions" title="Frequently Asked Questions" />
        <Reveal className="mt-14 space-y-3">
          {faqs.map((item) => (
            <details key={item.q} className="card group p-5 transition-shadow open:shadow-lg sm:p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-deep-900">
                {item.q}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-saffron-200/60 text-xl text-saffron-700 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-3 pr-10 text-base leading-relaxed text-deep-700">{item.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
