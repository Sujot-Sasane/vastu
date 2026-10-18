import Reveal from './Reveal'

// One plain, scannable fee table: name on the left, price on the right.
export default function PricingTable({ section, id }) {
  return (
    <Reveal className="h-full">
      <section id={id} className="card h-full scroll-mt-40 overflow-hidden">
        <h3 className="border-b border-beige-300 bg-ivory-100 px-6 py-5 font-serif text-xl sm:px-7 text-deep-900 sm:text-2xl">
          {section.title}
        </h3>
        <ul className="divide-y divide-beige-300/60">
          {section.tiers.map((tier) => (
            <li key={tier.name} className="px-6 py-4 transition-colors duration-300 hover:bg-saffron-200/25 sm:px-7">
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-base font-medium text-deep-800 sm:text-lg">{tier.name}</span>
                <span className="shrink-0 font-serif text-xl font-semibold text-deep-900 sm:text-2xl">
                  {tier.price}
                </span>
              </div>
              {tier.options && (
                <ul className="mt-2 flex flex-wrap gap-2">
                  {tier.options.map((o) => (
                    <li key={o} className="rounded-full bg-ivory-100 px-3 py-1 text-sm text-deep-700 ring-1 ring-beige-300">
                      {o}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        {section.note && (
          <p className="border-t border-beige-300 bg-ivory-50 px-6 py-4 text-sm text-deep-700 sm:px-7">
            <strong>Note:</strong> {section.note}
          </p>
        )}
      </section>
    </Reveal>
  )
}
