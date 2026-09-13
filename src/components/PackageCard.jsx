import Reveal from './Reveal'

export default function PackageCard({ pkg, dark = false, delay = 0 }) {
  return (
    <Reveal delay={delay} className="h-full">
      <div
        className={`group flex h-full flex-col justify-between gap-6 rounded-sm border p-9 transition-all duration-500 hover:-translate-y-1.5 ${
          dark
            ? 'border-gold-500/40 bg-brown-900 text-ivory-50 hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.5)]'
            : 'border-beige-300/70 bg-ivory-50 text-brown-900 hover:border-gold-400 hover:shadow-[0_24px_48px_-24px_rgba(60,40,15,0.35)]'
        }`}
      >
        <div>
          <span
            className={`text-xs uppercase tracking-[0.25em] ${
              dark ? 'text-gold-300' : 'text-gold-700'
            }`}
          >
            Combo Package
          </span>
          <h3 className="mt-3 font-serif text-2xl sm:text-[26px]">{pkg.name}</h3>
          <p
            className={`mt-4 text-sm leading-relaxed ${
              dark ? 'text-ivory-100/85' : 'text-brown-700/90'
            }`}
          >
            {pkg.description}
          </p>
        </div>
        <div>
          <div className={`gold-rule mb-5 w-full ${dark ? 'opacity-50' : 'opacity-70'}`} />
          <p className={`font-serif text-3xl ${dark ? 'text-gold-300' : 'text-gold-600'}`}>
            {pkg.price}
          </p>
        </div>
      </div>
    </Reveal>
  )
}
