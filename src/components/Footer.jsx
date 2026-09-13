import { Link } from 'react-router-dom'
import { contact, disclaimer, brandLine } from '../data/contact'
import { services } from '../data/services'

export default function Footer() {
  return (
    <footer className="bg-brown-900 text-ivory-100">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-serif text-2xl tracking-[0.06em] text-ivory-50">SUKH VASTU</p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-gold-300">
              {contact.tagline}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold-300">Practice Areas</p>
            <ul className="mt-4 space-y-2 text-sm text-ivory-100/85">
              {services.map((s) => (
                <li key={s.id}>{s.name.toUpperCase()}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold-300">Navigate</p>
            <ul className="mt-4 space-y-2 text-sm text-ivory-100/85">
              <li>
                <Link to="/" className="hover:text-gold-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold-300">
                  Services &amp; Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold-300">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-ivory-100/85">
              <li>
                <a href={`tel:${contact.phoneTel}`} className="hover:text-gold-300">
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>{contact.location}</li>
            </ul>
          </div>
        </div>

        <div className="gold-rule mt-12 opacity-40" />

        <div className="mt-8 flex flex-col gap-4 text-xs text-ivory-100/70 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl">{disclaimer}</p>
          <p className="font-display text-sm italic text-gold-300">{brandLine}</p>
        </div>
      </div>
    </footer>
  )
}
