import { useState } from 'react'
import { submitLead, trackFormSubmit } from '../lib/supabase'

interface QuoteFormModalProps {
  isOpen: boolean
  onClose: () => void
}

function XIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}

const serviceOptions = [
  'Mobile Exterior Detail',
  'Interior Detail',
  'Full Detail',
  'Paint Correction (1-Step)',
  'Paint Correction (2-Step)',
  'Ceramic / Graphene Coating',
  'RV Detailing',
  'Marine Detailing',
  'Other',
]

export default function QuoteFormModal({ isOpen, onClose }: QuoteFormModalProps) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    zip: '',
    vehicle_type: '',
    service: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name.trim() || !form.phone.trim()) {
      setErrorMsg('Please fill in your name and phone number.')
      setStatus('error')
      return
    }

    setStatus('loading')
    setErrorMsg('')

    try {
      const { error } = await submitLead(form)
      if (error) {
        setErrorMsg('Something went wrong. Please try calling us instead.')
        setStatus('error')
      } else {
        setStatus('success')
        trackFormSubmit(form.service)
        setForm({ name: '', phone: '', email: '', address: '', zip: '', vehicle_type: '', service: '', message: '' })
      }
    } catch {
      setErrorMsg('Connection error. Please try calling (702) 888-0867.')
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (status === 'error') setStatus('idle')
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in">
        <div className="sticky top-0 bg-dark text-white px-6 py-4 flex items-center justify-between z-10">
          <div>
            <h2 className="text-lg font-bold uppercase tracking-wider">Get a Free Quote</h2>
            <p className="text-white/50 text-xs mt-1">We'll respond within 30 minutes</p>
          </div>
          <button onClick={onClose} className="text-white/60 hover:text-white transition-colors p-1" aria-label="Close">
            <XIcon />
          </button>
        </div>

        {status === 'success' ? (
          <div className="p-8 text-center">
            <div className="text-green-500 flex justify-center mb-4">
              <CheckIcon />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-wider mb-2">Thank You!</h3>
            <p className="text-gray-500 mb-6">
              We've received your request and will contact you within 30 minutes during business hours.
            </p>
            <button onClick={onClose} className="btn-dark">
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-accent transition-colors"
                  placeholder="John Smith"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-accent transition-colors"
                  placeholder="(702) 555-1234"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                Email (optional)
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-accent transition-colors"
                placeholder="john@email.com"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                  Address / Location
                </label>
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-accent transition-colors"
                  placeholder="123 Main St"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                  ZIP Code
                </label>
                <input
                  type="text"
                  name="zip"
                  value={form.zip}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-accent transition-colors"
                  placeholder="89144"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                Vehicle Type
              </label>
              <input
                type="text"
                name="vehicle_type"
                value={form.vehicle_type}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-accent transition-colors"
                placeholder="2023 Tesla Model 3"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                Service
              </label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-accent transition-colors bg-white"
              >
                <option value="">Select a service...</option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                Additional Notes
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="Tell us about your vehicle's condition, specific concerns, etc."
              />
            </div>

            {status === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3">
                {errorMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Sending...
                </span>
              ) : (
                'Submit Request'
              )}
            </button>

            <p className="text-xs text-gray-400 text-center">
              Or call us directly:{' '}
              <a href="tel:+17028880867" className="text-accent font-bold">
                (702) 888-0867
              </a>
            </p>
          </form>
        )}
      </div>
    </div>
  )
}