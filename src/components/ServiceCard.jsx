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
        className="card group flex h-full flex-col gap-4 p-8 transition-all hover:border-saffron-400 hover:shadow-xl"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-deep-900 text-saffron-300 transition-colors group-hover:bg-saffron-500 group-hover:text-deep-900">
          <Icon className="h-8 w-8" />
        </span>
        <h3 className="mt-2 font-serif text-2xl text-deep-900">{service.name}</h3>
        <p className="text-base leading-relaxed text-deep-700">{service.description}</p>
        <span className="mt-auto pt-2 text-base font-semibold text-saffron-700 transition-transform group-hover:translate-x-1">
          See fees &rarr;
        </span>
      </Link>
      </TiltCard>
    </Reveal>
  )
}
