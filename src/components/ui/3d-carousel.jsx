import { memo, useEffect, useLayoutEffect, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from 'framer-motion'

const IS_SERVER = typeof window === 'undefined'
const useIsomorphicLayoutEffect = IS_SERVER ? useEffect : useLayoutEffect

function useMediaQuery(query) {
  const getMatches = () => (IS_SERVER ? false : window.matchMedia(query).matches)
  const [matches, setMatches] = useState(getMatches)

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query)
    const handleChange = () => setMatches(getMatches())
    handleChange()
    matchMedia.addEventListener('change', handleChange)
    return () => matchMedia.removeEventListener('change', handleChange)
  }, [query])

  return matches
}

const transition = { duration: 0.15, ease: [0.32, 0.72, 0, 1] }
const transitionOverlay = { duration: 0.5, ease: [0.32, 0.72, 0, 1] }

const Carousel = memo(function Carousel({ handleClick, controls, cards, isCarouselActive }) {
  const isScreenSizeSm = useMediaQuery('(max-width: 640px)')
  const cylinderWidth = isScreenSizeSm ? 1100 : 1800
  const faceCount = cards.length
  const faceWidth = cylinderWidth / faceCount
  const radius = cylinderWidth / (2 * Math.PI)
  const rotation = useMotionValue(0)
  const transform = useTransform(rotation, (value) => `rotate3d(0, 1, 0, ${value}deg)`)

  return (
    <div
      className="flex h-full items-center justify-center"
      style={{ perspective: '1200px', transformStyle: 'preserve-3d', willChange: 'transform' }}
    >
      <motion.div
        drag={isCarouselActive ? 'x' : false}
        className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
        style={{
          transform,
          rotateY: rotation,
          width: cylinderWidth,
          transformStyle: 'preserve-3d',
        }}
        onDrag={(_, info) =>
          isCarouselActive && rotation.set(rotation.get() + info.offset.x * 0.05)
        }
        onDragEnd={(_, info) =>
          isCarouselActive &&
          controls.start({
            rotateY: rotation.get() + info.velocity.x * 0.05,
            transition: { type: 'spring', stiffness: 100, damping: 30, mass: 0.1 },
          })
        }
        animate={controls}
      >
        {cards.map((card, i) => (
          <motion.div
            key={`${card.image}-${i}`}
            role="button"
            tabIndex={0}
            aria-label={card.label ? `View ${card.label}` : 'View image'}
            className="absolute flex h-full origin-center flex-col items-center justify-center gap-3 p-2 focus-visible:outline-none"
            style={{
              width: `${faceWidth}px`,
              transform: `rotateY(${i * (360 / faceCount)}deg) translateZ(${radius}px)`,
              backfaceVisibility: 'hidden',
            }}
            onClick={() => handleClick(card)}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleClick(card)}
          >
            <motion.img
              src={card.image}
              alt={card.label ?? ''}
              layoutId={`img-${card.image}`}
              className="pointer-events-none aspect-square w-full rounded-sm border border-gold-300/30 object-cover shadow-[0_20px_45px_-25px_rgba(36,22,9,0.55)]"
              initial={{ filter: 'blur(4px)' }}
              layout="position"
              animate={{ filter: 'blur(0px)' }}
              transition={transition}
            />
            {card.label && (
              <span className="pointer-events-none rounded-full border border-gold-400/60 bg-brown-900/85 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-gold-200">
                {card.label}
              </span>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
})

export function ThreeDPhotoCarousel({ items = [] }) {
  const [activeCard, setActiveCard] = useState(null)
  const [isCarouselActive, setIsCarouselActive] = useState(true)
  const controls = useAnimation()

  const handleClick = (card) => {
    setActiveCard(card)
    setIsCarouselActive(false)
    controls.stop()
  }

  const handleClose = () => {
    setActiveCard(null)
    setIsCarouselActive(true)
  }

  useEffect(() => {
    if (!activeCard) return
    const onKeyDown = (e) => e.key === 'Escape' && handleClose()
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeCard])

  if (items.length === 0) return null

  return (
    <motion.div layout className="relative">
      <AnimatePresence mode="sync">
        {activeCard && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            layoutId={`img-container-${activeCard.image}`}
            layout="position"
            onClick={handleClose}
            className="fixed inset-0 z-50 m-5 flex items-center justify-center rounded-3xl bg-brown-900/75 backdrop-blur-sm md:m-24 lg:mx-[19rem]"
            style={{ willChange: 'opacity' }}
            transition={transitionOverlay}
          >
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close"
              className="absolute right-6 top-6 text-2xl leading-none text-ivory-50/80 transition-colors hover:text-gold-300"
            >
              &times;
            </button>
            <motion.div
              layoutId={`img-${activeCard.image}`}
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ willChange: 'transform' }}
              className="flex max-h-full max-w-full flex-col items-center gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeCard.image}
                alt={activeCard.label ?? ''}
                className="max-h-[65vh] max-w-full rounded-sm object-cover shadow-2xl"
              />
              {activeCard.label && (
                <span className="font-serif text-xl text-ivory-50">{activeCard.label}</span>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative h-[420px] w-full overflow-hidden sm:h-[480px]">
        <Carousel
          handleClick={handleClick}
          controls={controls}
          cards={items}
          isCarouselActive={isCarouselActive}
        />
      </div>
    </motion.div>
  )
}
