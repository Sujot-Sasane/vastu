import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-5 pt-32 text-center">
      <Seo path="/404" missing />
      <div>
        <h1 className="font-serif text-4xl text-deep-900 sm:text-5xl">Page not found</h1>
        <p className="mt-4 text-lg text-deep-700">The page you are looking for does not exist.</p>
        <Link
          to="/"
          className="mt-8 inline-block rounded-full bg-deep-900 px-8 py-4 text-base font-semibold text-ivory-50 shadow-lg shadow-deep-900/20 transition-all hover:-translate-y-0.5 hover:bg-deep-800"
        >
          Back to Home
        </Link>
      </div>
    </section>
  )
}
