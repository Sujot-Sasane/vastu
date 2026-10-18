// Single source of truth for SEO. Used at runtime (Seo.jsx) and at build time
// (scripts/postbuild-seo.mjs) so static HTML and the live app never disagree.
import { faqs } from './faq.js'
import { contact } from './contact.js'

// Set VITE_SITE_URL (e.g. https://www.yourdomain.com) in your host's env settings.
export const siteUrl = (
  globalThis.process?.env?.VITE_SITE_URL ||
  import.meta.env?.VITE_SITE_URL ||
  'https://www.sukhvastu.com'
).replace(/\/$/, '')

export const pages = {
  '/': {
    title: 'Vastu Consultant in Pune | SUKH VASTU – Vastu, Astrology & Aura Healing',
    description:
      'SUKH VASTU – Vastu consultant in Pune for homes, offices & factories. Vastu Shastra, Kundli astrology, numerology, aura scanning & chakra balancing. Call 84212 64777.',
  },
  '/services': {
    title: 'Vastu, Astrology & Numerology Fees in Pune | SUKH VASTU',
    description:
      'Transparent fees: residential Vastu from Rs. 20,000, commercial Vastu, Kundli analysis Rs. 5,000, aura scanning Rs. 5,100, combo packages & Vastu certification courses in Pune.',
  },
  '/contact': {
    title: 'Book a Vastu Consultation in Pune | Call or WhatsApp 84212 64777',
    description:
      'Book your Vastu, astrology or aura healing consultation with SUKH VASTU, Pune. Call or WhatsApp 84212 64777 and get practical guidance for your home or business.',
  },
}

export const notFound = {
  title: 'Page not found | SUKH VASTU',
  description: 'The page you are looking for does not exist.',
}

const business = {
  '@type': ['LocalBusiness', 'ProfessionalService'],
  '@id': `${siteUrl}/#business`,
  name: contact.brand,
  description: pages['/'].description,
  url: siteUrl,
  telephone: contact.phoneTel,
  image: `${siteUrl}/og-image.png`,
  priceRange: 'Rs. 1,100 - Rs. 1,85,000',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Pune',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  areaServed: { '@type': 'City', name: 'Pune' },
  knowsAbout: ['Vastu Shastra', 'Astrology', 'Aura Healing', 'Numerology', 'Chakra Balancing'],
  sameAs: [`https://wa.me/${contact.whatsappNumber}`],
}

const faqPage = {
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export const jsonLd = {
  '/': [business, faqPage],
  '/services': [business],
  '/contact': [business],
}
