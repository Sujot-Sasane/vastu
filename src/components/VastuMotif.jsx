import { motion } from 'framer-motion'

// Subtle sacred-geometry line art — a nine-square Vastu grid inscribed in a
// compass circle. Pure decoration: aria-hidden, never load-bearing content.

export function VastuGrid({ className = '', animate = true }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <g stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.5">
        <rect x="40" y="40" width="320" height="320" />
        {[1, 2].map((i) => (
          <line key={`v${i}`} x1={40 + (320 / 3) * i} y1="40" x2={40 + (320 / 3) * i} y2="360" />
        ))}
        {[1, 2].map((i) => (
          <line key={`h${i}`} x1="40" y1={40 + (320 / 3) * i} x2="360" y2={40 + (320 / 3) * i} />
        ))}
      </g>
      <motion.g
        stroke="currentColor"
        strokeWidth="0.5"
        fill="none"
        opacity="0.35"
        style={{ originX: '200px', originY: '200px' }}
        animate={animate ? { rotate: 360 } : undefined}
        transition={animate ? { duration: 140, repeat: Infinity, ease: 'linear' } : undefined}
      >
        <circle cx="200" cy="200" r="185" />
        <circle cx="200" cy="200" r="150" />
        <line x1="200" y1="15" x2="200" y2="385" />
        <line x1="15" y1="200" x2="385" y2="200" />
      </motion.g>
    </svg>
  )
}

export function CompassMark({ className = '', animate = true }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <motion.g
        stroke="currentColor"
        strokeWidth="0.7"
        fill="none"
        opacity="0.55"
        style={{ originX: '100px', originY: '100px' }}
        animate={animate ? { rotate: -360 } : undefined}
        transition={animate ? { duration: 100, repeat: Infinity, ease: 'linear' } : undefined}
      >
        <circle cx="100" cy="100" r="90" />
        <circle cx="100" cy="100" r="70" />
        <path d="M100 10 L106 40 L100 34 L94 40 Z" fill="currentColor" stroke="none" />
        <line x1="100" y1="10" x2="100" y2="190" />
        <line x1="10" y1="100" x2="190" y2="100" />
        <line x1="30" y1="30" x2="170" y2="170" opacity="0.4" />
        <line x1="170" y1="30" x2="30" y2="170" opacity="0.4" />
      </motion.g>
    </svg>
  )
}

export function MandalaRings({ className = '', animate = true }) {
  const rings = [40, 65, 90, 115]
  return (
    <svg viewBox="0 0 260 260" className={className} aria-hidden="true" focusable="false">
      <motion.g
        stroke="currentColor"
        fill="none"
        strokeWidth="0.5"
        opacity="0.4"
        style={{ originX: '130px', originY: '130px' }}
        animate={animate ? { rotate: 360 } : undefined}
        transition={animate ? { duration: 160, repeat: Infinity, ease: 'linear' } : undefined}
      >
        {rings.map((r) => (
          <circle key={r} cx="130" cy="130" r={r} />
        ))}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * Math.PI * 2) / 12
          const x1 = 130 + 40 * Math.cos(angle)
          const y1 = 130 + 40 * Math.sin(angle)
          const x2 = 130 + 115 * Math.cos(angle)
          const y2 = 130 + 115 * Math.sin(angle)
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} opacity="0.3" />
        })}
      </motion.g>
    </svg>
  )
}
