import { useState } from 'react'
import Reveal from './Reveal'
import { serviceOptions } from '../data/formOptions'
import { contact } from '../data/contact'

const initialState = { name: '', phone: '', service: '', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState(initialState)
  const [status, setStatus] = useState('idle')

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const text = `Hello SUKH VASTU, I would like to book a consultation.

Name: ${form.name}
Phone: ${form.phone}
Service: ${form.service || 'General enquiry'}
${form.message ? `
Message: ${form.message}` : ''}`
    window.open(`https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
    setStatus('sent')
  }

  return (
    <Reveal>
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Full Name" htmlFor="name">
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              autoComplete="name"
              className={inputClasses}
            />
          </Field>
          <Field label="Phone Number" htmlFor="phone">
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={form.phone}
              onChange={handleChange}
              autoComplete="tel"
              className={inputClasses}
            />
          </Field>
        </div>

        <Field label="Service Interested In" htmlFor="service">
          <select
            id="service"
            name="service"
            required
            value={form.service}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Message" htmlFor="message">
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            className={inputClasses}
          />
        </Field>

        <button
          type="submit"
          className="w-full rounded-full bg-deep-900 px-8 py-4 text-base font-semibold text-ivory-50 shadow-lg shadow-deep-900/20 transition-all hover:-translate-y-0.5 hover:bg-deep-800 sm:w-auto"
        >
          Send on WhatsApp
        </button>

        <p role="status" className="text-base text-deep-800">
          {status === 'sent'
            ? `WhatsApp should now open with your details. You can also call us directly on ${contact.phoneDisplay}.`
            : ''}
        </p>
      </form>
    </Reveal>
  )
}

const inputClasses =
  'w-full rounded-xl border border-beige-300 bg-ivory-50 px-4 py-3.5 text-deep-900 placeholder:text-deep-700/40 transition focus:border-saffron-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-saffron-200/60'

function Field({ label, htmlFor, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-sm font-semibold text-deep-900">
        {label}
      </label>
      {children}
    </div>
  )
}
