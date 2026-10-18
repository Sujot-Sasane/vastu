import Reveal from './Reveal'
import TiltCard from './TiltCard'

export default function CertificationCard({ program, delay = 0 }) {
  return (
    <Reveal delay={delay} className="h-full">
      <TiltCard>
      <div className="card flex h-full flex-col gap-4 p-8 transition-all duration-500 hover:border-saffron-400">
        <h3 className="font-serif text-xl text-deep-900 sm:text-2xl">{program.name}</h3>
        <p className="font-serif text-3xl text-saffron-700">{program.price}</p>
        <div className="accent-rule w-10" />
        <ul className="space-y-2 text-base text-deep-700">
          {program.duration && <li>{program.duration}</li>}
          {program.details.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </div>
      </TiltCard>
    </Reveal>
  )
}
