import { motion, useReducedMotion } from 'framer-motion'

// Shared fade-up scroll reveal. Wrap any block of content; stagger children
// individually by passing `delay`.
export default function Reveal({
  as: Component = motion.div,
  children,
  className = '',
  delay = 0,
  y = 24,
  once = true,
}) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  )
}
