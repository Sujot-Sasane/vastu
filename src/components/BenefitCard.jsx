import Reveal from './Reveal'
import TiltCard from './TiltCard'

export default function BenefitCard({ group, delay = 0 }) {
  return (
    <Reveal delay={delay} className="h-full">
      <TiltCard>
      <div className="card h-full p-8 sm:p-10">
        <h3 className="font-serif text-2xl text-deep-900">{group.title}</h3>
        <div className="accent-rule my-6 w-10" />
        <ul className="space-y-3.5">
          {group.items.map((item) => (
            <li key={item} className="flex gap-3 text-base leading-relaxed text-deep-700">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-500" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      </TiltCard>
    </Reveal>
  )
}
