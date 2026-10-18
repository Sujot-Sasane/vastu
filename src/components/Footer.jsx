import { Link } from 'react-router-dom'
import { contact, disclaimer, brandLine } from '../data/contact'
import { services } from '../data/services'

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory-100">
      <div className="mx-auto max-w-7xl px-5 pb-32 pt-16 sm:px-8 sm:pb-40 sm:pt-20 lg:px-12">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block overflow-hidden rounded-2xl bg-[#fbf3e4] p-3 shadow-lg shadow-black/30">
              <img
                src="/images/logo-full.jpg"
                alt="SUKH VASTU – Vastu & Astro Consultation by Prashant Mane"
                width="472"
                height="560"
                loading="lazy"
                className="h-auto w-36 sm:w-44"
              />
            </Link>
          </div>

          <div>
            <p className="text-sm font-semibold text-ivory-50">Practice Areas</p>
            <ul className="mt-5 space-y-3 text-base text-ivory-100/70">
              {services.map((s) => (
                <li key={s.id}>{s.name}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-ivory-50">Navigate</p>
            <ul className="mt-5 space-y-3 text-base text-ivory-100/70">
              <li>
                <Link to="/" className="transition-colors hover:text-saffron-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition-colors hover:text-saffron-300">
                  Services &amp; Fees
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors hover:text-saffron-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <p className="text-sm font-semibold text-ivory-50">Contact</p>
            <ul className="mt-5 space-y-3 text-base text-ivory-100/70">
              <li>
                <a href={`tel:${contact.phoneTel}`} className="transition-colors hover:text-saffron-300">
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${contact.whatsappNumber}`} className="transition-colors hover:text-saffron-300">
                  WhatsApp us
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="break-all transition-colors hover:text-saffron-300">
                  {contact.email}
                </a>
              </li>
              <li>{contact.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 h-px bg-ivory-100/10" />

        <div className="mt-8 flex flex-col gap-4 text-sm text-ivory-100/60 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl">{disclaimer}</p>
          <p className="font-display text-sm italic text-saffron-300">{brandLine}</p>
        </div>
      </div>
    </footer>
  )
}
