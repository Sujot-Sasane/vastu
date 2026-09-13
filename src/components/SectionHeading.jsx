import Reveal from './Reveal'

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center'

  return (
    <Reveal className={`flex flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow && (
        <span className="text-xs uppercase tracking-[0.3em] text-gold-700">{eyebrow}</span>
      )}
      <h2 className="text-balance font-serif text-3xl leading-tight text-brown-900 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <div className="gold-rule w-16" />
      {subtitle && (
        <p className="max-w-2xl text-balance text-base text-brown-700/90 sm:text-lg">
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}
