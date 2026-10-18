import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'

// 3D tilt-on-hover with a moving light glare. Falls back to a plain wrapper
// for reduced-motion users and touch devices (no hover = no tilt).
export default function TiltCard({ children, className = '', max = 5 }) {
  const reduce = useReducedMotion()
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const sx = useSpring(px, { stiffness: 220, damping: 20 })
  const sy = useSpring(py, { stiffness: 220, damping: 20 })
  const rotateX = useTransform(sy, [0, 1], [max, -max])
  const rotateY = useTransform(sx, [0, 1], [-max, max])
  const glare = useTransform(
    [sx, sy],
    ([x, y]) =>
      `radial-gradient(260px circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,0.45), transparent 60%)`,
  )

  if (reduce) return <div className={`h-full ${className}`}>{children}</div>

  function onMove(e) {
    const r = e.currentTarget.getBoundingClientRect()
    px.set((e.clientX - r.left) / r.width)
    py.set((e.clientY - r.top) / r.height)
  }
  function onLeave() {
    px.set(0.5)
    py.set(0.5)
  }

  return (
    <div className={`h-full [perspective:900px] ${className}`}>
      <motion.div
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        whileHover={{ scale: 1.02 }}
        className="relative h-full rounded-[1.25rem]"
      >
        {children}
        <motion.span
          aria-hidden="true"
          style={{ background: glare }}
          className="pointer-events-none absolute inset-0 rounded-[1.25rem] opacity-0 mix-blend-soft-light transition-opacity duration-300 [div:hover>&]:opacity-100"
        />
      </motion.div>
    </div>
  )
}
