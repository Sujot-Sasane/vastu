import { services } from '../data/services'

// Slow-scrolling strip of the five disciplines. Pure CSS; stops for reduced motion.
export default function Marquee() {
  const row = [...services, ...services]
  return (
    <div className="overflow-hidden border-y border-gold-500/40 bg-brown-900 py-4" aria-hidden="true">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {[...row, ...row].map((s, i) => (
          <span key={i} className="flex items-center gap-12 font-serif text-lg text-gold-300">
            {s.name}
            <span className="text-gold-500">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
