const items = [
  { href: '#fees', label: 'Consultation Fees' },
  { href: '#packages', label: 'Combo Packages' },
  { href: '#training', label: 'Certification' },
]

export default function ServiceJumpNav() {
  return (
    <nav
      aria-label="On this page"
      className="sticky top-[72px] z-30 border-b border-beige-300/70 bg-ivory-50/85 backdrop-blur-xl sm:top-20"
    >
      <ul className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-3 [scrollbar-width:none] sm:justify-center sm:px-8">
        {items.map((it) => (
          <li key={it.href} className="shrink-0">
            <a
              href={it.href}
              className="block rounded-full border border-beige-300 bg-white px-5 py-2 text-sm font-semibold text-deep-800 transition-colors hover:border-deep-900 hover:bg-deep-900 hover:text-ivory-50"
            >
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
