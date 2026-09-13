import { useNavigate } from 'react-router-dom'
import Reveal from './Reveal'
import HoverStack from './ui/hover-stack'

const PALETTE = [
  'var(--color-ivory-100)',
  'var(--color-cream-200)',
  'var(--color-gold-200)',
  'var(--color-beige-300)',
  'var(--color-gold-300)',
]

export default function PricingSection({ section, index }) {
  const navigate = useNavigate()

  const cards = section.tiers.map((tier, i) => {
    const isCustom = tier.price === 'Custom'
    return {
      id: tier.name,
      tag: tier.name,
      quote: tier.price,
      meta: tier.options?.join(' • '),
      bg: isCustom ? 'var(--color-brown-900)' : PALETTE[i % PALETTE.length],
      accent: isCustom ? 'text-ivory-50' : 'text-brown-900',
    }
  })

  return (
    <div>
      <Reveal className="flex items-baseline gap-4 px-6 sm:px-8">
        <span className="font-serif text-2xl text-gold-500">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className="font-serif text-2xl text-brown-900 sm:text-3xl">{section.title}</h3>
      </Reveal>
      <Reveal delay={0.1} className="relative left-1/2 right-1/2 mt-10 w-screen -mx-[50vw]">
        <HoverStack
          cards={cards}
          cardHeight={300}
          accentColor="var(--color-gold-400)"
          footerLabel="Book Consultation"
          onCardClick={() => navigate('/contact')}
        />
      </Reveal>
      {section.note && (
        <Reveal className="mt-4 px-6 sm:px-8">
          <p className="text-sm italic text-brown-700/80">Note: {section.note}</p>
        </Reveal>
      )}
    </div>
  )
}
