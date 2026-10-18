import Reveal from './Reveal'
import TiltCard from './TiltCard'

export default function PackageCard({ pkg, dark = false, delay = 0 }) {
  return (
    <Reveal delay={delay} className="h-full">
      <TiltCard>
      <div
        className={`group flex h-full flex-col justify-between gap-6 rounded-[1.25rem] border p-9 transition-all duration-500 sm:p-10 ${
          dark
            ? 'border-deep-700 bg-gradient-to-br from-deep-800 to-deep-900 text-ivory-50 shadow-xl shadow-deep-900/20'
            : 'border-beige-300/80 bg-white text-deep-900 shadow-[0_8px_24px_-12px_rgba(21,25,53,0.12)] hover:border-saffron-400'
        }`}
      >
        <div>
          <span
            className={`eyebrow ${
              dark ? 'eyebrow-dark' : ''
            }`}
          >
            Combo Package
          </span>
          <h3 className="mt-5 font-serif text-2xl sm:text-3xl">{pkg.name}</h3>
          <p
            className={`mt-4 text-base leading-relaxed ${
              dark ? 'text-ivory-100/80' : 'text-deep-700'
            }`}
          >
            {pkg.description}
          </p>
        </div>
        <div>
          <div className={`mb-5 h-px w-full ${dark ? 'bg-ivory-100/15' : 'bg-beige-300'}`} />
          <p className={`font-serif text-4xl ${dark ? 'text-saffron-300' : 'text-saffron-700'}`}>
            {pkg.price}
          </p>
        </div>
      </div>
      </TiltCard>
    </Reveal>
  )
}
