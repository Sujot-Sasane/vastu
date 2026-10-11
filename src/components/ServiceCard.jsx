import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import TiltCard from './TiltCard'
import { IconVastu, IconAstrology, IconAura, IconNumerology, IconBusinessGrowth } from './icons'

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
      <TiltCard>
      <Link
        to="/services#fees"
        className="group flex h-full flex-col gap-4 rounded-md border border-beige-300 bg-ivory-50 p-7 transition-all hover:-translate-y-1 hover:border-gold-500 hover:shadow-lg"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brown-900 text-gold-300">
          <Icon className="h-8 w-8" />
        </span>
        <h3 className="font-serif text-2xl text-brown-900">{service.name}</h3>
        <p className="text-base leading-relaxed text-brown-800">{service.description}</p>
        <span className="mt-auto text-base font-medium text-gold-700 group-hover:underline">
          See fees &rarr;
        </span>
      </Link>
      </TiltCard>
    </Reveal>
  )
}
