import { useState } from 'react'

function StarIcon({ filled, className }: { filled: boolean; className?: string }) {
  return (
    <svg
      className={className}
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

const allReviews = [
  {
    author: 'Michael R.',
    rating: 5,
    text: 'Absolutely incredible work! My Tesla Model 3 looks better than the day I bought it. The ceramic coating is flawless and the attention to detail is unmatched.',
    vehicle: 'Tesla Model 3',
    service: 'Ceramic Coating',
    date: 'November 2024',
  },
  {
    author: 'Sarah K.',
    rating: 5,
    text: 'Best detailing service in Las Vegas! They came to my home in Summerlin and did a full interior detail on my Range Rover. Every surface was spotless.',
    vehicle: 'Range Rover Sport',
    service: 'Interior Detail',
    date: 'November 2024',
  },
  {
    author: 'David L.',
    rating: 5,
    text: 'Had a 2-step paint correction done on my BMW M4. The swirl marks are completely gone and the paint looks like glass. These guys know what they\'re doing!',
    vehicle: 'BMW M4',
    service: 'Paint Correction',
    date: 'October 2024',
  },
  {
    author: 'Jennifer M.',
    rating: 5,
    text: 'Family-owned and it shows — they treat your car like their own. Got the full detail package for my Mercedes and it\'s never looked this good.',
    vehicle: 'Mercedes GLE',
    service: 'Full Detail',
    date: 'October 2024',
  },
  {
    author: 'Robert T.',
    rating: 5,
    text: 'They detailed our 38ft RV before a cross-country trip. Outstanding work on such a large vehicle. The exterior was gleaming!',
    vehicle: '38ft Class A RV',
    service: 'RV Detailing',
    date: 'September 2024',
  },
  {
    author: 'Amanda W.',
    rating: 5,
    text: "I've tried several detailing services in Henderson and LV Mobile is by far the best. Quick response, arrived on time, and my Audi Q7 looks showroom-ready.",
    vehicle: 'Audi Q7',
    service: 'Exterior Detail',
    date: 'September 2024',
  },
  {
    author: 'Chris P.',
    rating: 5,
    text: 'Got the ceramic coating package for my Porsche 911. The hydrophobic effect is insane — water just beads right off. Worth every penny.',
    vehicle: 'Porsche 911',
    service: 'Ceramic Coating',
    date: 'August 2024',
  },
  {
    author: 'Lisa H.',
    rating: 5,
    text: 'My kids absolutely destroyed the interior of our Suburban. LV Mobile worked magic and made it look brand new. I\'m a customer for life!',
    vehicle: 'Chevy Suburban',
    service: 'Interior Detail',
    date: 'August 2024',
  },
  {
    author: 'Mark S.',
    rating: 4,
    text: 'Great service overall. The exterior detail was thorough and my truck looks fantastic. Only minor note — they arrived about 15 minutes late, but communicated ahead of time.',
    vehicle: 'Ford F-150',
    service: 'Exterior Detail',
    date: 'July 2024',
  },
]

const filterOptions = ['All Services', 'Exterior Detail', 'Interior Detail', 'Full Detail', 'Paint Correction', 'Ceramic Coating', 'RV Detailing']

export default function Reviews() {
  const [filter, setFilter] = useState('All Services')

  const filtered = filter === 'All Services'
    ? allReviews
    : allReviews.filter((r) => r.service === filter)

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-dark text-white py-20">
        <div className="container-main px-4 md:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="gold-line" />
            <span className="text-accent text-xs font-bold uppercase tracking-[0.3em]">
              Testimonials
            </span>
            <div className="gold-line" />
          </div>
          <h1 className="heading-xl mb-4">
            Customer <span className="text-accent">Reviews</span>
          </h1>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[1, 2, 3, 4, 5].map((s) => (
              <span key={s} className="text-accent">
                <StarIcon filled className="w-5 h-5" />
              </span>
            ))}
            <span className="ml-2 text-white/60 font-semibold">4.9 / 5 — 80+ reviews</span>
          </div>
        </div>
      </section>

      {/* Filter + Reviews */}
      <section className="section-padding bg-white">
        <div className="container-main px-4 md:px-8">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {filterOptions.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all border ${
                  filter === f
                    ? 'bg-accent text-dark border-accent'
                    : 'border-gray-200 text-gray-500 hover:border-accent hover:text-accent'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((review, i) => (
              <div
                key={review.author + i}
                className="bg-white border border-gray-200 p-6 card-hover"
              >
                <div className="flex items-center gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="text-accent">
                      <StarIcon filled={s <= review.rating} />
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  "{review.text}"
                </p>

                <div className="border-t border-gray-100 pt-4">
                  <p className="font-bold text-sm text-dark">{review.author}</p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {review.vehicle} — {review.service}
                  </p>
                  <p className="text-xs text-gray-300 mt-1">{review.date}</p>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400">No reviews found for this service yet.</p>
            </div>
          )}

          {/* Leave Review CTA */}
          <div className="text-center mt-12">
            <a
              href="https://g.page/review"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Leave a Review on Google
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}