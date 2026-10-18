const items = [
  { href: '#fees', label: 'Consultation Fees' },
  { href: '#packages', label: 'Combo Packages' },
  { href: '#training', label: 'Certification' },
]

export default function ServiceJumpNav() {
  return (
    <nav
      aria-label="On this page"
      className="sticky top-[68px] z-30 border-b border-beige-300 bg-ivory-50/95 backdrop-blur sm:top-[76px]"
    >
      <ul className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-5 py-3 sm:px-8">
        {items.map((it) => (
          <li key={it.href} className="shrink-0">
            <a
              href={it.href}
              className="block rounded-full border border-gold-500 px-5 py-2 text-sm font-medium text-brown-900 hover:bg-brown-900 hover:text-ivory-50"
            >
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
