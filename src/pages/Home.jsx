import Hero from '../components/Hero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import BenefitCard from '../components/BenefitCard'
import CTASection from '../components/CTASection'
import PracticeAreasOrbit from '../components/PracticeAreasOrbit'
import { VastuGrid } from '../components/VastuMotif'
import { benefitGroups } from '../data/benefits'
import { whyChooseUs } from '../data/whyChooseUs'

export default function Home() {
  return (
    <>
      <Hero />

      {/* Editorial introduction */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <VastuGrid className="pointer-events-none absolute -right-32 top-1/2 h-[560px] w-[560px] -translate-y-1/2 text-gold-500/10" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <h2 className="font-serif text-3xl leading-tight text-brown-900 sm:text-4xl lg:text-5xl">
              Ancient Wisdom.
              <br />
              Modern Living.
            </h2>
            <div className="gold-rule mt-6 w-16" />
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-balance text-lg leading-relaxed text-brown-700/90 sm:text-xl">
              At SUKH VASTU, we combine the ancient sciences of Vastu Shastra, Astrology, Aura
              Analysis, Numerology, and Energy Balancing to help individuals, families, and
              businesses create harmony, clarity, and positive growth.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <PracticeAreasOrbit />

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
      <section className="bg-brown-900 py-24 text-ivory-50 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <SectionHeading
            eyebrow="Why Sukh Vastu"
            title="Why Choose Us"
            className="[&_h2]:text-ivory-50 [&_p]:text-ivory-100/80"
          />
          <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-gold-500/25 bg-gold-500/10 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="group bg-brown-900 p-8 transition-colors duration-500 hover:bg-brown-800"
              >
                <h3 className="font-serif text-xl text-gold-300 transition-transform duration-500 group-hover:-translate-y-0.5">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-ivory-100/75">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
