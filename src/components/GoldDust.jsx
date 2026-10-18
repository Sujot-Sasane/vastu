import { useReducedMotion } from 'framer-motion'

// Deterministic drifting gold specks for the hero (no Math.random -> stable renders).
const specks = Array.from({ length: 18 }, (_, i) => ({
  left: (i * 37) % 100,
  size: 2 + (i % 3) * 1.5,
  delay: (i * 1.3) % 9,
  dur: 9 + (i % 5) * 2.5,
}))

export default function GoldDust() {
  const reduce = useReducedMotion()
  if (reduce) return null
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {specks.map((s, i) => (
        <span
          key={i}
          className="absolute bottom-[-10px] rounded-full bg-gold-300 animate-rise"
          style={{
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.dur}s`,
          }}
        />
      ))}
    </div>
  )
}
