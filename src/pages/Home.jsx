import Hero from '../components/Hero'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import BenefitCard from '../components/BenefitCard'
import CTASection from '../components/CTASection'
import ServiceCard from '../components/ServiceCard'
import Marquee from '../components/Marquee'
import HowItWorks from '../components/HowItWorks'
import FAQ from '../components/FAQ'
import { Link } from 'react-router-dom'
import { services } from '../data/services'
import { VastuGrid } from '../components/VastuMotif'
import { benefitGroups } from '../data/benefits'
import { whyChooseUs } from '../data/whyChooseUs'

export default function Home() {
  return (
    <>
      <Seo path="/" />
      <Hero />
      <Marquee />

      {/* Editorial introduction */}
      <section className="relative overflow-hidden py-24 sm:py-36">
        <VastuGrid className="pointer-events-none absolute -right-32 top-1/2 h-[560px] w-[560px] -translate-y-1/2 text-saffron-500/15" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <h2 className="font-serif text-4xl leading-[1.08] text-deep-900 sm:text-5xl lg:text-6xl">
              Ancient Wisdom.
              <br />
              <span className="italic text-saffron-600">Modern Living.</span>
            </h2>
            <div className="accent-rule mt-8 w-12" />
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-balance text-lg leading-[1.8] text-deep-700 sm:text-xl lg:pt-3">
              At SUKH VASTU in Pune, Maharashtra, we combine the ancient sciences of Vastu Shastra, Astrology, Aura
              Analysis, Numerology, and Energy Balancing to help individuals, families, and
              businesses create harmony, clarity, and positive growth.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="bg-ivory-100 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="What We Offer"
            title="Our Services"
            subtitle="Five connected disciplines under one roof. Select any to see fees."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} delay={i * 0.06} />
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link
              to="/services"
              className="inline-block rounded-full bg-deep-900 px-8 py-4 text-base font-semibold text-ivory-50 shadow-lg shadow-deep-900/20 transition-all hover:-translate-y-0.5 hover:bg-deep-800"
            >
              View All Services &amp; Fees
            </Link>
          </div>
        </div>
      </section>

      {/* What You Will Gain */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <SectionHeading
            eyebrow="Outcomes"
            title="What You Will Gain"
            subtitle="Transformative Benefits Across Every Domain"
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {benefitGroups.map((group, i) => (
              <BenefitCard key={group.id} group={group} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-deep-900 py-28 text-ivory-50 sm:py-36">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <SectionHeading
            eyebrow="Why Sukh Vastu"
            title="Why Choose Us"
            dark
            className="[&_h2]:text-ivory-50 [&_p]:text-ivory-100/80"
          />
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="group rounded-[1.25rem] border border-ivory-100/10 bg-ivory-50/[0.04] p-8 transition-colors duration-500 hover:border-saffron-400/40 hover:bg-ivory-50/[0.07]"
              >
                <h3 className="font-serif text-xl text-saffron-300 transition-transform duration-500 group-hover:-translate-y-0.5">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ivory-100/75">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />
      <FAQ />
      <CTASection />
    </>
  )
}
