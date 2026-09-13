// Structured directly from the SUKH VASTU services & consultation fees list.
// Prices are stored as display-ready strings — do not reformat/recalculate.

export const residentialVastu = {
  title: 'Residential Vastu',
  tiers: [
    {
      name: '1 BHK',
      price: '₹20,000',
      options: ['Basic Vastu', 'Advanced Vastu', 'Devta Vastu'],
    },
    {
      name: '2 BHK',
      price: '₹35,000',
      options: ['Basic Vastu', 'Advanced Vastu', 'Devta Vastu'],
    },
    {
      name: '3 BHK',
      price: '₹40,000',
      options: ['Basic Vastu', 'Advanced Vastu', 'Devta Vastu'],
    },
    {
      name: 'Bungalow / Duplex — Up to 1500 Sq Ft',
      price: '₹50,000',
    },
    {
      name: 'Bungalow / Multi-floor — Above 1500 Sq Ft',
      price: '₹65,000',
    },
  ],
}

export const commercialVastu = {
  title: 'Commercial Vastu',
  tiers: [
    { name: 'Up to 1000 Sq Ft', price: '₹55,000' },
    { name: '1000–3000 Sq Ft', price: '₹65,000' },
    { name: 'Factory / Industrial', price: 'Custom' },
  ],
}

export const propertyPurchase = {
  title: 'Property Purchase',
  tiers: [
    {
      name: 'Property Selection (up to 3 visits)',
      price: '₹25,000',
    },
  ],
  note: '₹10,000 adjustment if full Vastu is booked.',
}

export const auraEnergyServices = {
  title: 'Aura & Energy Services',
  tiers: [
    { name: 'Aura Scanning', price: '₹5,100' },
    { name: 'Chakra Balancing', price: '₹5,100' },
  ],
}

export const astrologyServices = {
  title: 'Astrology Services',
  tiers: [
    { name: 'Complete Kundli Analysis', price: '₹5,000' },
    { name: 'Numerology – Report + Q&A + Remedies', price: '₹11,000' },
    { name: 'Numerology – Contact Number Lucky', price: '₹1,100' },
    { name: 'Gemstone Guidance', price: '₹5,000' },
  ],
}

export const designBranding = {
  title: 'Design & Branding',
  tiers: [{ name: 'Logo Design as per Numerology', price: '₹5,100' }],
}

export const counselingCoaching = {
  title: 'Counseling & Coaching',
  tiers: [
    {
      name: 'Family Counseling & Personal Coaching (per session)',
      price: '₹5,000',
    },
  ],
}

export const pricingSections = [
  residentialVastu,
  commercialVastu,
  propertyPurchase,
  auraEnergyServices,
  astrologyServices,
  designBranding,
  counselingCoaching,
]
