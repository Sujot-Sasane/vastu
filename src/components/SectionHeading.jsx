import Reveal from './Reveal'

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  dark = false,
  className = '',
}) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center'

  return (
    <Reveal className={`flex flex-col gap-5 ${alignment} ${className}`}>
      {eyebrow && (
        <span className={`eyebrow ${dark ? 'eyebrow-dark' : ''}`}>{eyebrow}</span>
      )}
      <h2 className="text-balance font-serif text-4xl leading-[1.1] text-deep-900 sm:text-5xl lg:text-[3.5rem]">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-balance text-lg leading-relaxed text-deep-700 sm:text-xl">
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}
