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
          className="w-full rounded-full border border-gold-500 bg-brown-900 px-8 py-4 text-sm uppercase tracking-[0.16em] text-ivory-50 transition-colors hover:bg-gold-500 hover:text-brown-900 sm:w-auto"
        >
          Send on WhatsApp
        </button>

        <p role="status" className="text-base text-brown-800">
          {status === 'sent'
            ? `WhatsApp should now open with your details. You can also call us directly on ${contact.phoneDisplay}.`
            : ''}
        </p>
      </form>
    </Reveal>
  )
}

const inputClasses =
  'w-full rounded-sm border border-beige-300 bg-white/70 px-4 py-3 text-brown-900 placeholder:text-brown-700/40 focus:border-gold-500 focus:outline-none'

function Field({ label, htmlFor, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-sm font-medium text-brown-900">
        {label}
      </label>
      {children}
    </div>
  )
}
