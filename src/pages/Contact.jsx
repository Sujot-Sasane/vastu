import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import ContactForm from '../components/ContactForm'
import { CompassMark } from '../components/VastuMotif'
import { IconWhatsapp } from '../components/icons'
import { contact } from '../data/contact'

export default function Contact() {
  return (
    <>
      <Seo path="/contact" />
      <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--color-deep-700),_var(--color-deep-900)_60%,_var(--color-ink))] pb-24 pt-40 text-ivory-50 sm:pb-28 sm:pt-48">
        <CompassMark className="pointer-events-none absolute -left-16 -top-16 h-72 w-72 text-saffron-300/25 sm:h-96 sm:w-96" />
        <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-8">
          <Reveal>
            <span className="eyebrow eyebrow-dark">Get In Touch</span>
            <h1 className="mt-6 font-serif text-4xl leading-[1.08] sm:text-6xl lg:text-7xl">
              Begin Your Journey Towards Harmony
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <div className="space-y-4">
              <ContactBlock label="Call Us">
                <a
                  href={`tel:${contact.phoneTel}`}
                  className="font-serif text-2xl text-deep-900 transition-colors hover:text-saffron-700"
                >
                  {contact.phoneDisplay}
                </a>
              </ContactBlock>

              <ContactBlock label="WhatsApp">
                <a
                  href={`https://wa.me/${contact.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-serif text-2xl text-deep-900 transition-colors hover:text-saffron-700"
                >
                  <IconWhatsapp className="h-5 w-5 text-saffron-600" />
                  {contact.phoneDisplay}
                </a>
              </ContactBlock>

              <ContactBlock label="Email">
                <a
                  href={`mailto:${contact.email}`}
                  className="break-all font-serif text-xl text-deep-900 transition-colors hover:text-saffron-700 sm:text-2xl"
                >
                  {contact.email}
                </a>
              </ContactBlock>

              <ContactBlock label="Location">
                <p className="font-serif text-2xl text-deep-900">{contact.location}</p>
              </ContactBlock>

              <div className="pt-4">
                <a
                  href={`https://wa.me/${contact.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-saffron-500 px-8 py-4 text-base font-semibold text-deep-900 shadow-lg shadow-saffron-500/25 transition-all hover:-translate-y-0.5 hover:bg-saffron-400"
                >
                  Book a Consultation
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card p-7 sm:p-10">
              <h2 className="font-serif text-3xl text-deep-900">Send Us a Message</h2>
              <p className="mt-2 text-base text-deep-700">
                Fill in your details and your message opens in WhatsApp, ready to send.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

function ContactBlock({ label, children }) {
  return (
    <div className="card px-6 py-5">
      <p className="text-sm font-semibold text-saffron-700">{label}</p>
      <div className="mt-1">{children}</div>
    </div>
  )
}
