import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ServicesShowcase from '../components/ServicesShowcase'
import PricingSection from '../components/PricingSection'
import PackageCard from '../components/PackageCard'
import CertificationCard from '../components/CertificationCard'
import CTASection from '../components/CTASection'
import { CompassMark } from '../components/VastuMotif'
import { pricingSections } from '../data/pricing'
import { packages, certifications, certificationNote } from '../data/packages'

export default function Services() {
  return (
    <>
      <section className="relative overflow-hidden bg-brown-900 pb-20 pt-36 text-ivory-50 sm:pb-28 sm:pt-44">
        <CompassMark className="pointer-events-none absolute -right-20 -top-10 h-72 w-72 text-gold-300/25 sm:h-96 sm:w-96" />
        <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-8">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-gold-300">
              Transparent &amp; Detailed
            </span>
            <h1 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Services &amp; Consultation Fees
            </h1>
            <div className="gold-rule mx-auto mt-6 w-16" />
            <p className="mx-auto mt-6 max-w-xl text-balance text-ivory-100/85">
              Every consultation is tailored to your space and situation. Fees below reflect our
              standard consultancy pricing.
            </p>
          </Reveal>
        </div>
      </section>

      <ServicesShowcase />

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl space-y-20 px-6 sm:px-8">
          {pricingSections.map((section, i) => (
            <PricingSection key={section.title} section={section} index={i} />
          ))}
        </div>
      </section>

      <section className="bg-ivory-100 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <SectionHeading
            eyebrow="Curated for You"
            title="Premium Combo Packages"
            subtitle="Multiple services, thoughtfully combined at a single consultancy fee."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {packages.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} dark={i % 2 === 1} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <SectionHeading
            eyebrow="Learn With Us"
            title="Certification Programs"
            subtitle="Build your own practice under the guidance of Sukh Vastu."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((program, i) => (
              <CertificationCard key={program.id} program={program} delay={i * 0.08} />
            ))}
          </div>
          <Reveal className="mt-8 text-center">
            <p className="text-sm italic text-brown-700/80">{certificationNote}</p>
          </Reveal>
        </div>
      </section>

      <CTASection
        lines={['Every Space Holds Energy.', 'Let Us Help You Balance It.']}
        cta="Book a Consultation"
      />
    </>
  )
}
