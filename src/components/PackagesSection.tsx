import { Link } from 'react-router-dom'
import { useInView } from './useInView'

interface PackagesSectionProps {
  onGetQuote?: () => void
}

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

const packages = [
  {
    name: 'Exterior Detail',
    slug: 'mobile-exterior-detail',
    price: '89',
    popular: false,
    features: [
      'Hand wash & dry',
      'Wheel & tire cleaning',
      'Tire dressing',
      'Window cleaning (exterior)',
      'Quick spray wax',
    ],
  },
  {
    name: 'Interior Detail',
    slug: 'interior-detail',
    price: '119',
    popular: false,
    features: [
      'Full vacuum & blowout',
      'Dashboard & console wipe',
      'Leather/vinyl conditioning',
      'Window cleaning (interior)',
      'Air freshener',
    ],
  },
  {
    name: 'Full Detail',
    slug: 'full-detail',
    price: '199',
    popular: true,
    features: [
      'Complete exterior wash',
      'Full interior deep clean',
      'Clay bar treatment',
      'Sealant/wax application',
      'Tire dressing + windows',
      'Leather conditioning',
    ],
  },
  {
    name: 'Paint Correction',
    slug: 'paint-correction',
    price: '299',
    popular: false,
    features: [
      'Swirl mark removal',
      'Scratch reduction',
      '1-step or 2-step available',
      'Machine polish',
      'Paint sealant finish',
    ],
  },
  {
    name: 'Ceramic Coating',
    slug: 'ceramic-coating',
    price: '499',
    popular: false,
    features: [
      'Paint decontamination',
      '1-step paint correction',
      'Ceramic/graphene application',
      '2-5 year protection',
      'Hydrophobic finish',
      'Aftercare kit included',
    ],
  },
  {
    name: 'RV / Marine',
    slug: 'rv-detailing',
    price: '349',
    popular: false,
    features: [
      'Full exterior wash',
      'Oxidation removal',
      'Wax/sealant application',
      'Interior cleaning',
      'Custom pricing by size',
    ],
  },
]

export default function PackagesSection({ onGetQuote }: PackagesSectionProps) {
  const { ref, isInView } = useInView(0.05)

  return (
    <section className="section-padding bg-white" id="packages">
      <div className="container-main" ref={ref}>
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="gold-line" />
            <span className="text-accent text-xs font-bold uppercase tracking-[0.3em]">
              Our Packages
            </span>
            <div className="gold-line" />
          </div>
          <h2 className="heading-lg text-dark">
            Detailing <span className="text-accent">Packages</span>
          </h2>
          <p className="text-body mt-4 max-w-2xl mx-auto">
            Professional-grade products and techniques. Prices start from — final quote after vehicle inspection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <div
              key={pkg.slug}
              className={`relative border transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${
                pkg.popular
                  ? 'border-accent shadow-lg shadow-accent/10'
                  : 'border-gray-200 hover:border-accent/50'
              } card-hover`}
              style={{ transitionDelay: isInView ? `${i * 100}ms` : '0ms' }}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-dark text-[10px] font-bold uppercase tracking-widest px-4 py-1">
                  Most Popular
                </div>
              )}

              <div className="p-6">
                <h3 className="heading-sm text-dark mb-2">{pkg.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-xs text-gray-400 uppercase">from</span>
                  <span className="text-3xl font-black text-dark">${pkg.price}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="text-accent mt-0.5 shrink-0">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="space-y-2">
                  <button
                    onClick={onGetQuote}
                    className={`w-full text-center ${pkg.popular ? 'btn-primary' : 'btn-dark'} !py-3 !text-xs`}
                  >
                    Get Quote
                  </button>
                  <Link
                    to={`/services/${pkg.slug}`}
                    className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-accent transition-colors py-2"
                  >
                    Learn More <ArrowRightIcon />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}