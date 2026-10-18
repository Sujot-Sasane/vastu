import Reveal from './Reveal'
import TiltCard from './TiltCard'

export default function CertificationCard({ program, delay = 0 }) {
  return (
    <Reveal delay={delay} className="h-full">
      <TiltCard>
      <div className="flex h-full flex-col gap-4 rounded-sm border border-beige-300/70 bg-white/60 p-8 transition-all duration-500 hover:border-gold-400">
        <h3 className="font-serif text-xl text-brown-900 sm:text-2xl">{program.name}</h3>
        <p className="font-serif text-2xl text-gold-600">{program.price}</p>
        <div className="gold-rule w-12" />
        <ul className="space-y-1.5 text-base text-brown-800">
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
