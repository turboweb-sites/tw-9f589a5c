import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useInView } from './useInView'

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

function QuoteIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" opacity="0.1">
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
    </svg>
  )
}

const reviews = [
  {
    author: 'Michael R.',
    rating: 5,
    text: 'Absolutely incredible work! My Tesla Model 3 looks better than the day I bought it. The ceramic coating is flawless and the attention to detail is unmatched.',
    vehicle: 'Tesla Model 3',
    service: 'Ceramic Coating',
  },
  {
    author: 'Sarah K.',
    rating: 5,
    text: 'Best detailing service in Las Vegas! They came to my home in Summerlin and did a full interior detail on my Range Rover. Every surface was spotless.',
    vehicle: 'Range Rover Sport',
    service: 'Interior Detail',
  },
  {
    author: 'David L.',
    rating: 5,
    text: 'Had a 2-step paint correction done on my BMW M4. The swirl marks are completely gone and the paint looks like glass. These guys know what they\'re doing!',
    vehicle: 'BMW M4',
    service: 'Paint Correction',
  },
  {
    author: 'Jennifer M.',
    rating: 5,
    text: 'Family-owned and it shows — they treat your car like their own. Got the full detail package for my Mercedes and it\'s never looked this good.',
    vehicle: 'Mercedes GLE',
    service: 'Full Detail',
  },
  {
    author: 'Robert T.',
    rating: 5,
    text: 'They detailed our 38ft RV before a cross-country trip. Outstanding work on such a large vehicle. The exterior was gleaming!',
    vehicle: '38ft Class A RV',
    service: 'RV Detailing',
  },
  {
    author: 'Amanda W.',
    rating: 5,
    text: "I've tried several detailing services in Henderson and LV Mobile is by far the best. Quick response, arrived on time, and my Audi Q7 looks showroom-ready.",
    vehicle: 'Audi Q7',
    service: 'Exterior Detail',
  },
]

export default function ReviewsCarousel() {
  const [currentPage, setCurrentPage] = useState(0)
  const { ref, isInView } = useInView(0.05)
  const perPage = 3
  const totalPages = Math.ceil(reviews.length / perPage)
  const visible = reviews.slice(currentPage * perPage, currentPage * perPage + perPage)

  return (
    <section className="section-padding bg-surface-50">
      <div className="container-main" ref={ref}>
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="gold-line" />
            <span className="text-accent text-xs font-bold uppercase tracking-[0.3em]">
              Testimonials
            </span>
            <div className="gold-line" />
          </div>
          <h2 className="heading-lg text-dark">
            What Our <span className="text-accent">Clients</span> Say
          </h2>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[1, 2, 3, 4, 5].map((s) => (
              <span key={s} className="text-accent">
                <StarIcon filled />
              </span>
            ))}
            <span className="ml-2 text-sm text-gray-500 font-semibold">4.9 / 5 — 80+ reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visible.map((review, i) => (
            <div
              key={review.author + currentPage}
              className={`bg-white border border-gray-200 p-6 card-hover transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isInView ? `${i * 100}ms` : '0ms' }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="text-accent">
                      <StarIcon filled={s <= review.rating} />
                    </span>
                  ))}
                </div>
                <QuoteIcon />
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4">
                "{review.text}"
              </p>

              <div className="border-t border-gray-100 pt-4">
                <p className="font-bold text-sm">{review.author}</p>
                <p className="text-xs text-gray-400 mt-0.5">
                  {review.vehicle} — {review.service}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentPage === i ? 'bg-accent w-8' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>
        )}

        <div className="text-center mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/reviews" className="btn-dark">
            Read More Reviews
          </Link>
          <a
            href="https://g.page/review"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold uppercase tracking-wider text-accent hover:text-accent-light transition-colors"
          >
            Leave a Review →
          </a>
        </div>
      </div>
    </section>
  )
}