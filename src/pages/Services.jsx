import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import PricingTable from '../components/PricingTable'
import ServiceJumpNav from '../components/ServiceJumpNav'
import { disclaimer } from '../data/contact'
import PackageCard from '../components/PackageCard'
import CertificationCard from '../components/CertificationCard'
import CTASection from '../components/CTASection'
import { CompassMark } from '../components/VastuMotif'
import { pricingSections } from '../data/pricing'
import { packages, certifications, certificationNote } from '../data/packages'

export default function Services() {
  return (
    <>
      <Seo path="/services" />
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
            <p className="mx-auto mt-6 max-w-xl text-balance text-lg text-ivory-100">
              Clear, upfront fees for Vastu, astrology, numerology and aura healing in Pune. Each consultation is tailored to your space and situation.
            </p>
          </Reveal>
        </div>
      </section>

      <ServiceJumpNav />

      <section id="fees" className="scroll-mt-32 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading eyebrow="Fees" title="Consultation Services & Fees" subtitle={disclaimer} />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {pricingSections.map((section, i) => (
              <div key={section.title} className={i === 0 ? 'lg:col-span-2' : ''}>
                <PricingTable section={section} id={section.title.toLowerCase().replace(/[^a-z]+/g, '-')} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="scroll-mt-32 bg-ivory-100 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
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

      <section className="py-20 sm:py-28">
        <div id="training" className="mx-auto max-w-6xl scroll-mt-32 px-5 sm:px-8">
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
            <p className="text-base italic text-brown-800">{certificationNote}</p>
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
