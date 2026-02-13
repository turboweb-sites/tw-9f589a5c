import { useInView } from './useInView'
import { trackPhoneClick, trackSmsClick } from '../lib/supabase'

export default function FinalCTA() {
  const { ref, isInView } = useInView(0.1)

  return (
    <section className="relative bg-dark text-white py-20 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px]" />
      </div>

      <div className="container-main relative z-10 px-4 md:px-8" ref={ref}>
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="gold-line mx-auto mb-6" />
          <h2 className="heading-lg mb-6">
            Ready for a <span className="text-accent">Showroom Shine</span>?
          </h2>
          <p className="text-white/60 text-lg mb-4 max-w-xl mx-auto">
            Text us your car, location, and photos for an instant quote. We'll get back to you in minutes.
          </p>
          <p className="text-white/40 text-sm mb-10">
            Or call for immediate scheduling — we're available 7 days a week.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="sms:+17028880867?body=Hi! I'd like a detailing quote. Car: , Location: "
              onClick={trackSmsClick}
              className="btn-primary text-center w-full sm:w-auto"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Text Us Now
            </a>
            <a
              href="tel:+17028880867"
              onClick={trackPhoneClick}
              className="btn-secondary text-center w-full sm:w-auto"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call (702) 888-0867
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}