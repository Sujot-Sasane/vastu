import Reveal from './Reveal'

export default function BenefitCard({ group, delay = 0 }) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="h-full rounded-sm border border-beige-300/60 bg-white/60 p-8 sm:p-10">
        <h3 className="font-serif text-2xl text-brown-900">{group.title}</h3>
        <div className="gold-rule my-5 w-12" />
        <ul className="space-y-3">
          {group.items.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-brown-700/90 sm:text-[15px]">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-500" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  )
}
