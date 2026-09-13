import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services & Pricing' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ivory-50/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(150,115,60,0.25)]'
          : 'bg-gradient-to-b from-ink/85 via-ink/55 to-transparent backdrop-blur-[2px]'
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12"
      >
        <Link to="/" className="group flex flex-col leading-tight" onClick={() => setOpen(false)}>
          <span
            className={`font-serif text-xl tracking-[0.08em] transition-colors duration-500 sm:text-2xl ${
              scrolled ? 'text-brown-900' : 'text-ivory-50'
            }`}
          >
            SUKH VASTU
          </span>
          <span
            className={`mt-0.5 text-[10px] uppercase tracking-[0.22em] transition-colors duration-500 sm:text-xs ${
              scrolled ? 'text-gold-700' : 'text-gold-300'
            }`}
          >
            Vastu &bull; Astrology &bull; Aura Healing
          </span>
        </Link>

        <div className="hidden items-center gap-10 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `text-sm uppercase tracking-[0.14em] transition-colors duration-500 ${
                  scrolled
                    ? isActive
                      ? 'text-gold-700'
                      : 'text-brown-800 hover:text-gold-700'
                    : isActive
                      ? 'text-gold-300'
                      : 'text-ivory-100/85 hover:text-gold-300'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="rounded-full border border-gold-500 bg-brown-900 px-6 py-2.5 text-sm uppercase tracking-[0.14em] text-ivory-50 transition-colors hover:bg-gold-500 hover:text-brown-900"
          >
            Book a Consultation
          </Link>
        </div>

        <button
          type="button"
          className="flex flex-col gap-1.5 p-2 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-[1.5px] w-6 transition-transform duration-300 ${
              scrolled ? 'bg-brown-900' : 'bg-ivory-50'
            } ${open ? 'translate-y-[6.5px] rotate-45' : ''}`}
          />
          <span
            className={`block h-[1.5px] w-6 transition-opacity duration-300 ${
              scrolled ? 'bg-brown-900' : 'bg-ivory-50'
            } ${open ? 'opacity-0' : 'opacity-100'}`}
          />
          <span
            className={`block h-[1.5px] w-6 transition-transform duration-300 ${
              scrolled ? 'bg-brown-900' : 'bg-ivory-50'
            } ${open ? '-translate-y-[6.5px] -rotate-45' : ''}`}
          />
        </button>
      </nav>

      <div
        className={`grid overflow-hidden bg-ivory-50/98 backdrop-blur-md transition-[grid-template-rows] duration-300 lg:hidden ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-1 px-5 pb-6 pt-2 sm:px-8">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `border-b border-beige-300/70 py-3 text-base tracking-[0.04em] ${
                    isActive ? 'text-gold-700' : 'text-brown-800'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full border border-gold-500 bg-brown-900 px-6 py-3 text-center text-sm uppercase tracking-[0.14em] text-ivory-50"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
