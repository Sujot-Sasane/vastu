import { services } from '../data/services'

// Slow-scrolling strip of the five disciplines. Pure CSS; stops for reduced motion.
export default function Marquee() {
  const row = [...services, ...services]
  return (
    <div className="overflow-hidden border-y border-ivory-100/10 bg-ink py-5" aria-hidden="true">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {[...row, ...row].map((s, i) => (
          <span key={i} className="flex items-center gap-12 font-serif text-xl italic text-ivory-100/80">
            {s.name}
            <span className="text-saffron-500">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
