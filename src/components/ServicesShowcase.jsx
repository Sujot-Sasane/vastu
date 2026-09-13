import { ThreeDPhotoCarousel } from './ui/3d-carousel'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { services } from '../data/services'

export default function ServicesShowcase() {
  const items = services.map((service) => ({
    image: service.image,
    label: service.name,
  }))

  return (
    <section className="overflow-hidden bg-ivory-100 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Five Integrated Disciplines"
          title="Our Practice Areas"
          subtitle="Drag to rotate, or select a discipline to view it up close."
        />
      </div>
      <Reveal delay={0.1} className="mt-4">
        <ThreeDPhotoCarousel items={items} />
      </Reveal>
    </section>
  )
}
