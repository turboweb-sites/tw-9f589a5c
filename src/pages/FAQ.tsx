import { useState } from 'react'
import { Link } from 'react-router-dom'

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function MessageSquareIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

const faqs = [
  {
    question: 'What is mobile detailing?',
    answer: 'Mobile detailing means we come to you! We bring all equipment, products, and water supply to your home, office, or any location in the Las Vegas valley. No need to drop off your car anywhere.',
  },
  {
    question: 'How long does a detail take?',
    answer: 'It depends on the service: Exterior Detail takes 1–2 hours, Interior Detail 1.5–2.5 hours, Full Detail 3–4 hours, and Paint Correction/Ceramic Coating 4–8 hours depending on vehicle size and condition.',
  },
  {
    question: 'Do I need to provide water or electricity?',
    answer: 'No! We are fully self-contained. We bring our own water supply, generator, and all equipment. All we need is access to your vehicle and a reasonable working space.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We serve the entire Las Vegas valley including Las Vegas, Henderson, Summerlin, North Las Vegas, Green Valley, Spring Valley, Enterprise, Centennial Hills, Mountains Edge, and surrounding areas.',
  },
  {
    question: 'What products do you use?',
    answer: 'We use only premium, professional-grade products from trusted brands. All our products are pH-balanced and safe for all vehicle surfaces including paint, leather, vinyl, and glass.',
  },
  {
    question: 'How do I book an appointment?',
    answer: 'You can call or text us at (702) 888-0867, email us at info@lvmobiledetailing.com, or use the quote form on our website. We typically respond within 30 minutes during business hours.',
  },
  {
    question: 'What is ceramic coating?',
    answer: 'Ceramic coating is a liquid polymer applied to the exterior of your vehicle that creates a permanent or semi-permanent bond with the paint, providing long-lasting protection against UV rays, chemical stains, and minor scratches with a hydrophobic (water-repelling) finish.',
  },
  {
    question: 'Do you detail RVs and boats?',
    answer: 'Yes! We specialize in large vehicle detailing including RVs, motorhomes, trailers, and marine vessels. Pricing varies by size — contact us for a custom quote.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'We understand plans change. We ask for at least 24 hours notice for cancellations or rescheduling. Same-day cancellations may be subject to a small fee.',
  },
  {
    question: 'Do you offer any guarantees?',
    answer: 'Absolutely! We stand behind our work 100%. If you\'re not satisfied with any aspect of our service, we\'ll make it right. Ceramic coatings come with a warranty of 2–5 years depending on the package.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-dark text-white py-20">
        <div className="container-main px-4 md:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="gold-line" />
            <span className="text-accent text-xs font-bold uppercase tracking-[0.3em]">
              FAQ
            </span>
            <div className="gold-line" />
          </div>
          <h1 className="heading-xl mb-4">
            Frequently Asked <span className="text-accent">Questions</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Everything you need to know about our mobile detailing services.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section-padding bg-white">
        <div className="container-main px-4 md:px-8 max-w-3xl mx-auto">
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`border transition-colors ${
                  openIndex === i ? 'border-accent' : 'border-gray-200'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-bold text-sm text-dark pr-4">{faq.question}</span>
                  <ChevronDownIcon
                    className={`w-5 h-5 text-accent shrink-0 transition-transform ${
                      openIndex === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === i && (
                  <div className="px-5 pb-5">
                    <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark text-white py-16">
        <div className="container-main px-4 md:px-8 text-center">
          <h2 className="heading-lg mb-4">
            Still Have <span className="text-accent">Questions</span>?
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8">
            Don't hesitate to reach out. We're happy to help!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+17028880867" className="btn-primary flex items-center gap-2">
              <PhoneIcon className="w-4 h-4" />
              Call (702) 888-0867
            </a>
            <Link to="/contact" className="btn-secondary flex items-center gap-2">
              <MessageSquareIcon className="w-4 h-4" />
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}