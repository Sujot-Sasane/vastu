import Reveal from './Reveal'
import {
  IconVastu,
  IconAstrology,
  IconAura,
  IconNumerology,
  IconBusinessGrowth,
} from './icons'

const iconMap = {
  vastu: IconVastu,
  astrology: IconAstrology,
  'aura-healing': IconAura,
  numerology: IconNumerology,
  'business-growth': IconBusinessGrowth,
}

export default function ServiceCard({ service, delay = 0 }) {
  const Icon = iconMap[service.id] ?? IconVastu

  return (
    <Reveal delay={delay} className="h-full">
      <div className="group flex h-full flex-col gap-5 rounded-sm border border-beige-300/70 bg-ivory-50 p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-400 hover:shadow-[0_20px_40px_-24px_rgba(60,40,15,0.35)]">
        <Icon className="h-9 w-9 text-gold-600 transition-transform duration-500 group-hover:scale-110" />
        <h3 className="font-serif text-xl text-brown-900">{service.name}</h3>
        <p className="text-sm leading-relaxed text-brown-700/90">{service.description}</p>
      </div>
    </Reveal>
  )
}
