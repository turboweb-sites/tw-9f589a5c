import { useState } from 'react'

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function MessageSquareIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

function SendIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="m22 2-11 11" />
    </svg>
  )
}

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

const contactInfo = [
  {
    icon: PhoneIcon,
    label: 'Phone',
    value: '(702) 888-0867',
    href: 'tel:+17028880867',
    description: 'Call or text us anytime',
  },
  {
    icon: MailIcon,
    label: 'Email',
    value: 'info@lvmobiledetailing.com',
    href: 'mailto:info@lvmobiledetailing.com',
    description: 'We reply within 1 hour',
  },
  {
    icon: MapPinIcon,
    label: 'Location',
    value: '521 Bernini St, Las Vegas, NV 89144',
    href: 'https://maps.google.com/?q=521+Bernini+St+Las+Vegas+NV+89144',
    description: 'Mobile — we come to you!',
  },
  {
    icon: ClockIcon,
    label: 'Hours',
    value: 'Mon–Fri 7AM–7PM',
    description: 'Sat 8AM–6PM • Sun 8AM–5PM',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-dark text-white py-20">
        <div className="container-main px-4 md:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="gold-line" />
            <span className="text-accent text-xs font-bold uppercase tracking-[0.3em]">
              Contact Us
            </span>
            <div className="gold-line" />
          </div>
          <h1 className="heading-xl mb-4">
            Get In <span className="text-accent">Touch</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Ready for a spotless vehicle? Reach out for a free quote or to schedule your mobile detail.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-accent py-12">
        <div className="container-main px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((item) => {
              const Icon = item.icon
              const Wrapper = item.href ? 'a' : 'div'
              const wrapperProps = item.href
                ? { href: item.href, target: item.href.startsWith('http') ? '_blank' : undefined, rel: item.href.startsWith('http') ? 'noopener noreferrer' : undefined }
                : {}

              return (
                <Wrapper
                  key={item.label}
                  {...(wrapperProps as any)}
                  className="bg-dark/90 p-6 text-center hover:bg-dark transition-colors group"
                >
                  <Icon className="w-6 h-6 text-accent mx-auto mb-3" />
                  <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-1">
                    {item.label}
                  </h3>
                  <p className="text-white/80 text-sm font-semibold group-hover:text-accent transition-colors">
                    {item.value}
                  </p>
                  <p className="text-white/40 text-xs mt-1">{item.description}</p>
                </Wrapper>
              )
            })}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="section-padding bg-white">
        <div className="container-main px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <MessageSquareIcon className="w-6 h-6 text-accent" />
                <h2 className="heading-md text-dark">Send Us a Message</h2>
              </div>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 p-8 text-center">
                  <CheckCircleIcon className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="heading-sm text-dark mb-2">Message Sent!</h3>
                  <p className="text-gray-600 text-sm">
                    Thank you for reaching out. We'll get back to you within 1 hour during business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 text-sm focus:border-accent focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 text-sm focus:border-accent focus:outline-none transition-colors"
                        placeholder="(702) 000-0000"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 text-sm focus:border-accent focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                      Service Interested In
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 text-sm focus:border-accent focus:outline-none transition-colors bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="exterior">Exterior Detail</option>
                      <option value="interior">Interior Detail</option>
                      <option value="full">Full Detail</option>
                      <option value="paint-correction">Paint Correction</option>
                      <option value="ceramic">Ceramic Coating</option>
                      <option value="rv">RV Detailing</option>
                      <option value="marine">Marine Detailing</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 text-sm focus:border-accent focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your vehicle and what you need..."
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                    <SendIcon className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Map */}
            <div>
              <h2 className="heading-md text-dark mb-6">Service Area</h2>
              <div className="aspect-square bg-gray-100 border border-gray-200 flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206253.45049358925!2d-115.36346909609375!3d36.11462750000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80beb782a4f57dd1%3A0x3accd5e6d5b379a3!2sLas%20Vegas%2C%20NV!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="LV Mobile Detailing Service Area"
                />
              </div>
              <p className="text-xs text-gray-400 mt-4 text-center">
                We serve all of Las Vegas, Henderson, Summerlin, North Las Vegas, and surrounding areas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}