import { useInView } from './useInView'
import { trackPhoneClick, trackQuoteClick } from '../lib/supabase'

interface HeroSectionProps {
  onGetQuote?: () => void
}

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function TruckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11" />
      <path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2" />
      <circle cx="7" cy="18" r="2" />
      <path d="M15 18H9" />
      <circle cx="17" cy="18" r="2" />
    </svg>
  )
}

function UsersIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

const trustBadges = [
  { icon: <StarIcon />, label: '4.9★ Rating' },
  { icon: <ShieldIcon />, label: '80+ Reviews' },
  { icon: <UsersIcon />, label: 'Family-Owned' },
  { icon: <TruckIcon />, label: 'We Come to You' },
]

export default function HeroSection({ onGetQuote }: HeroSectionProps) {
  const { ref, isInView } = useInView(0.1)

  return (
    <section className="relative min-h-screen flex items-center bg-dark overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-50 to-dark" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
      </div>

      {/* Gold accent line */}
      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-accent to-transparent opacity-30" />

      <div ref={ref} className="container-main relative z-10 px-4 md:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Micro label */}
          <div
            className={`flex items-center gap-3 mb-6 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="gold-line" />
            <span className="text-accent text-xs font-bold uppercase tracking-[0.3em]">
              Las Vegas, NV
            </span>
          </div>

          {/* Main heading */}
          <h1
            className={`heading-xl text-white mb-6 transition-all duration-700 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Mobile Auto
            <br />
            Detailing in
            <br />
            <span className="text-accent">Las Vegas</span>
          </h1>

          {/* Subheading */}
          <p
            className={`text-white/50 text-lg md:text-xl font-light mb-10 max-w-xl transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Clean — Protect — Preserve
            <br />
            <span className="text-white/70">
              Premium detailing delivered to your doorstep.
            </span>
          </p>

          {/* CTA buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-700 delay-300 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <a
              href="tel:+17028880867"
              onClick={trackPhoneClick}
              className="btn-primary text-center"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call Now
            </a>
            <button
              onClick={() => {
                trackQuoteClick()
                onGetQuote?.()
              }}
              className="btn-secondary text-center"
            >
              Get a Quote
            </button>
          </div>

          {/* Trust badges */}
          <div
            className={`flex flex-wrap gap-6 transition-all duration-700 delay-[400ms] ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-2 text-white/50">
                <span className="text-accent">{badge.icon}</span>
                <span className="text-xs font-semibold uppercase tracking-wider">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}