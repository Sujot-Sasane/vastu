import Reveal from './Reveal'

// One plain, scannable fee table: name on the left, price on the right.
export default function PricingTable({ section, id }) {
  return (
    <Reveal className="h-full">
      <section id={id} className="h-full scroll-mt-32 rounded-md border border-beige-300 bg-white/80">
        <h3 className="border-b border-beige-300 bg-cream-200/60 px-6 py-4 font-serif text-xl text-brown-900 sm:text-2xl">
          {section.title}
        </h3>
        <ul className="divide-y divide-beige-300/80">
          {section.tiers.map((tier) => (
            <li key={tier.name} className="px-6 py-4 transition-all duration-300 hover:bg-gold-200/40 hover:pl-8">
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-base font-medium text-brown-900 sm:text-lg">{tier.name}</span>
                <span className="shrink-0 font-serif text-xl font-semibold text-gold-700 sm:text-2xl">
                  {tier.price}
                </span>
              </div>
              {tier.options && (
                <ul className="mt-2 flex flex-wrap gap-2">
                  {tier.options.map((o) => (
                    <li key={o} className="rounded-full bg-cream-200 px-3 py-1 text-sm text-brown-800">
                      {o}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        {section.note && (
          <p className="border-t border-beige-300 px-6 py-3 text-sm text-brown-800">
            <strong>Note:</strong> {section.note}
          </p>
        )}
      </section>
    </Reveal>
  )
}
