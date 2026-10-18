import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services & Fees' },
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
          ? 'bg-ivory-50/85 backdrop-blur-xl shadow-[0_1px_0_0_rgba(21,25,53,0.08)]'
          : 'bg-gradient-to-b from-ink/85 via-ink/55 to-transparent backdrop-blur-[2px]'
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-8 lg:px-12"
      >
        <Link to="/" className="group flex min-w-0 items-center gap-2.5 sm:gap-3" onClick={() => setOpen(false)}>
          <img
            src="/images/logo-mark.png"
            alt=""
            width="48"
            height="48"
            className="h-10 w-10 shrink-0 transition-transform duration-700 group-hover:rotate-[30deg] sm:h-12 sm:w-12"
          />
          <span className="flex min-w-0 flex-col leading-tight">
            <span
              className={`whitespace-nowrap font-serif text-lg font-semibold tracking-[0.04em] min-[360px]:text-xl transition-colors duration-500 sm:text-2xl ${
                scrolled ? 'text-deep-900' : 'text-ivory-50'
              }`}
            >
              SUKH VASTU
            </span>
            <span
              className={`mt-0.5 whitespace-nowrap text-[10px] font-medium tracking-[0.04em] min-[360px]:text-[11px] transition-colors duration-500 sm:text-xs ${
                scrolled ? 'text-saffron-700' : 'text-saffron-300'
              }`}
            >
              Vastu &bull; Astrology &bull; Aura Healing
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `text-[15px] font-medium transition-colors duration-500 ${
                  scrolled
                    ? isActive
                      ? 'text-saffron-700'
                      : 'text-deep-800 hover:text-saffron-700'
                    : isActive
                      ? 'text-saffron-300'
                      : 'text-ivory-100/85 hover:text-saffron-300'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="rounded-full bg-saffron-500 px-6 py-2.5 text-sm font-semibold text-deep-900 shadow-md shadow-saffron-500/25 transition-all hover:-translate-y-0.5 hover:bg-saffron-400"
          >
            Book a Consultation
          </Link>
        </div>

        <button
          type="button"
          className="-mr-2 flex shrink-0 flex-col gap-1.5 p-2 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-[1.5px] w-6 transition-transform duration-300 ${
              scrolled ? 'bg-deep-900' : 'bg-ivory-50'
            } ${open ? 'translate-y-[6.5px] rotate-45' : ''}`}
          />
          <span
            className={`block h-[1.5px] w-6 transition-opacity duration-300 ${
              scrolled ? 'bg-deep-900' : 'bg-ivory-50'
            } ${open ? 'opacity-0' : 'opacity-100'}`}
          />
          <span
            className={`block h-[1.5px] w-6 transition-transform duration-300 ${
              scrolled ? 'bg-deep-900' : 'bg-ivory-50'
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
                  `border-b border-beige-300/70 py-3.5 text-base font-medium ${
                    isActive ? 'text-saffron-700' : 'text-deep-800'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-saffron-500 px-6 py-3.5 text-center text-base font-semibold text-deep-900"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
