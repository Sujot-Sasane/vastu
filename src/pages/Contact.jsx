import Reveal from '../components/Reveal'
import ContactForm from '../components/ContactForm'
import { CompassMark } from '../components/VastuMotif'
import { IconWhatsapp } from '../components/icons'
import { contact } from '../data/contact'

export default function Contact() {
  return (
    <>
      <section className="relative overflow-hidden bg-brown-900 pb-20 pt-36 text-ivory-50 sm:pb-24 sm:pt-44">
        <CompassMark className="pointer-events-none absolute -left-16 -top-16 h-72 w-72 text-gold-300/25 sm:h-96 sm:w-96" />
        <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-8">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-gold-300">Get In Touch</span>
            <h1 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Begin Your Journey Towards Harmony
            </h1>
            <div className="gold-rule mx-auto mt-6 w-16" />
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <div className="space-y-10">
              <ContactBlock label="Call Us">
                <a
                  href={`tel:${contact.phoneTel}`}
                  className="font-serif text-2xl text-brown-900 transition-colors hover:text-gold-600"
                >
                  {contact.phoneDisplay}
                </a>
              </ContactBlock>

              <ContactBlock label="WhatsApp">
                <a
                  href={`https://wa.me/${contact.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-serif text-2xl text-brown-900 transition-colors hover:text-gold-600"
                >
                  <IconWhatsapp className="h-5 w-5 text-gold-600" />
                  {contact.phoneDisplay}
                </a>
              </ContactBlock>

              <ContactBlock label="Location">
                <p className="font-serif text-2xl text-brown-900">{contact.location}</p>
              </ContactBlock>

              <div className="pt-4">
                <a
                  href={`https://wa.me/${contact.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-gold-500 bg-brown-900 px-8 py-3.5 text-sm uppercase tracking-[0.16em] text-ivory-50 transition-colors hover:bg-gold-500 hover:text-brown-900"
                >
                  Book a Consultation
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-sm border border-beige-300/70 bg-white/50 p-7 sm:p-10">
              <h2 className="font-serif text-2xl text-brown-900">Send Us a Message</h2>
              <p className="mt-2 text-sm text-brown-700/85">
                Share a few details and we will reach out to schedule your consultation.
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
    <div>
      <p className="text-xs uppercase tracking-[0.2em] text-gold-700">{label}</p>
      <div className="mt-2">{children}</div>
    </div>
  )
}
