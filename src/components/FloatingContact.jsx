import { useEffect, useState } from 'react'
import { contact } from '../data/contact'
import { IconWhatsapp } from './icons'

// Call + WhatsApp buttons — the two ways most visitors book. They appear once
// the visitor scrolls, so they never sit on top of the hero's own buttons.
export default function FloatingContact() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-4 right-4 z-40 flex flex-col gap-3 transition-all duration-500 sm:bottom-6 sm:right-6 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
      }`}
    >
      <a
        href={`https://wa.me/${contact.whatsappNumber}`}
        target="_blank"
        rel="noreferrer"
        className="relative flex h-12 items-center gap-2 rounded-full bg-[#1f8f4a] px-3.5 sm:h-14 sm:px-5 text-base font-semibold text-white shadow-lg transition-transform hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inset-0 -z-10 rounded-full bg-[#1f8f4a] [animation:ring_2s_ease-out_infinite] motion-reduce:hidden" />
        <IconWhatsapp className="h-6 w-6" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
      <a
        href={`tel:${contact.phoneTel}`}
        className="flex h-12 items-center justify-center gap-2 rounded-full bg-deep-900 px-3.5 sm:h-14 sm:px-5 text-base font-semibold text-ivory-50 shadow-lg ring-1 ring-saffron-400/60 transition-transform hover:scale-105"
        aria-label={`Call ${contact.phoneDisplay}`}
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" strokeLinejoin="round" />
        </svg>
        <span className="hidden sm:inline">Call</span>
      </a>
    </div>
  )
}
