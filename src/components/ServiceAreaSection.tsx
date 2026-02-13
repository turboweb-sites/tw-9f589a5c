import { useInView } from './useInView'

const areas = [
  { name: 'Las Vegas', zips: '89101-89199' },
  { name: 'Summerlin', zips: '89134, 89135, 89138, 89144, 89145' },
  { name: 'Henderson', zips: '89002, 89011-89015, 89044, 89052, 89074' },
  { name: 'North Las Vegas', zips: '89030-89032, 89081, 89084, 89085, 89086' },
  { name: 'Green Valley', zips: '89012, 89014, 89052, 89074' },
  { name: 'Spring Valley', zips: '89102, 89103, 89113, 89117, 89147' },
  { name: 'Enterprise', zips: '89113, 89139, 89141, 89148, 89178, 89179' },
  { name: 'Centennial Hills', zips: '89084, 89085, 89131, 89143, 89149' },
  { name: 'Mountains Edge', zips: '89141, 89148, 89178' },
  { name: 'Aliante', zips: '89084' },
  { name: 'Rhodes Ranch', zips: '89148' },
  { name: 'Inspirada', zips: '89044' },
]

function MapPinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

export default function ServiceAreaSection() {
  const { ref, isInView } = useInView(0.05)

  return (
    <section className="section-padding bg-surface-50">
      <div className="container-main" ref={ref}>
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="gold-line" />
            <span className="text-accent text-xs font-bold uppercase tracking-[0.3em]">
              Service Area
            </span>
            <div className="gold-line" />
          </div>
          <h2 className="heading-lg text-dark">
            We Serve All of <span className="text-accent">Las Vegas</span>
          </h2>
          <p className="text-body mt-4 max-w-2xl mx-auto">
            Our mobile detailing unit covers the entire Las Vegas metropolitan area. No matter where you are — we come to you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <div
            className={`h-80 lg:h-full min-h-[320px] bg-dark-50 overflow-hidden transition-all duration-700 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206253.45424773866!2d-115.36386!3d36.1147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80beb782a4f57dd1%3A0x3accd5e6d5b379a3!2sLas%20Vegas%2C%20NV!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="LV Mobile Detailing Service Area"
            />
          </div>

          {/* Areas list */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {areas.map((area) => (
                <div
                  key={area.name}
                  className="flex items-start gap-3 p-3 border border-gray-200 bg-white hover:border-accent/50 transition-colors"
                >
                  <span className="text-accent mt-0.5 shrink-0">
                    <MapPinIcon />
                  </span>
                  <div>
                    <p className="font-bold text-sm">{area.name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{area.zips}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-dark text-white">
              <p className="text-sm">
                <span className="text-accent font-bold">Don't see your area?</span>{' '}
                Call us at{' '}
                <a href="tel:+17028880867" className="text-accent font-bold hover:text-accent-light">
                  (702) 888-0867
                </a>{' '}
                — we likely cover it!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}