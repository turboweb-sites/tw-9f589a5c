import { Link } from 'react-router-dom'

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  )
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
  )
}

function CarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  )
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  )
}

function DropletsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
      <path d="M12.56 14.69c1.47 0 2.66-1.22 2.66-2.7 0-.77-.38-1.5-1.14-2.12-.76-.62-1.24-1.36-1.52-2.37-.28.97-.76 1.71-1.52 2.33-.76.62-1.14 1.35-1.14 2.16 0 1.48 1.19 2.7 2.66 2.7z" />
      <path d="M17 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S17.29 6.75 17 5.3c-.29 1.45-1.14 2.84-2.29 3.76S13 11.1 13 12.25c0 2.22 1.8 4.05 4 4.05z" />
    </svg>
  )
}

function WavesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    </svg>
  )
}

function TruckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 13.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  )
}

const services = [
  {
    slug: 'mobile-exterior-detail',
    title: 'Mobile Exterior Detail',
    description:
      'Complete hand wash, clay bar treatment, polish, and sealant. Your paint will glow like new.',
    icon: CarIcon,
    price: '89',
    features: [
      'Hand wash & dry',
      'Clay bar treatment',
      'Wheel & tire cleaning',
      'Paint sealant',
      'Trim dressing',
    ],
  },
  {
    slug: 'interior-detail',
    title: 'Interior Detail',
    description:
      'Deep cleaning of every interior surface. Vacuuming, shampooing, conditioning, and sanitizing.',
    icon: SparklesIcon,
    price: '149',
    features: [
      'Full vacuum & blowout',
      'Upholstery shampoo',
      'Leather conditioning',
      'Dashboard detailing',
      'Odor elimination',
    ],
  },
  {
    slug: 'full-detail',
    title: 'Full Detail',
    description:
      'The complete package — exterior and interior detailed to perfection for a total transformation.',
    icon: ShieldIcon,
    price: '249',
    features: [
      'Complete exterior',
      'Complete interior',
      'Engine bay rinse',
      'Paint sealant',
      'Air freshener',
    ],
  },
  {
    slug: 'paint-correction',
    title: 'Paint Correction',
    description:
      'Remove swirls, scratches, and oxidation with professional-grade machine polishing.',
    icon: SunIcon,
    price: '349',
    features: [
      '1-step or 2-step',
      'Swirl removal',
      'Scratch removal',
      'Paint decontamination',
      'Sealant protection',
    ],
  },
  {
    slug: 'ceramic-coating',
    title: 'Ceramic / Graphene Coating',
    description:
      'Long-lasting paint protection with industry-leading ceramic or graphene coatings.',
    icon: DropletsIcon,
    price: '499',
    features: [
      'Paint correction included',
      '2-5 year protection',
      'Hydrophobic finish',
      'UV resistance',
      'Aftercare kit',
    ],
  },
  {
    slug: 'rv-detailing',
    title: 'RV Detailing',
    description:
      'Specialized detailing for recreational vehicles of all sizes. Oxidation removal and protection.',
    icon: TruckIcon,
    price: '399',
    features: [
      'Full exterior wash',
      'Oxidation removal',
      'Roof cleaning',
      'Wax / sealant',
      'Interior available',
    ],
  },
  {
    slug: 'marine-detailing',
    title: 'Marine Detailing',
    description:
      'Professional boat and watercraft detailing. Gel coat restoration and marine-grade protection.',
    icon: WavesIcon,
    price: '399',
    features: [
      'Hull cleaning',
      'Gel coat restoration',
      'Metal polishing',
      'UV protection',
      'Interior cleaning',
    ],
  },
]

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-dark">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-50 to-dark" />
        <div className="relative container-main px-4 md:px-8">
          <div className="gold-line mb-4" />
          <h1 className="heading-xl text-white mb-4">
            Our <span className="text-accent">Services</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Professional mobile detailing services for every vehicle type. We bring the shop to you.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="space-y-8">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="block group border border-gray-200 hover:border-accent/50 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="flex-1 p-6 md:p-10">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                          <Icon className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h2 className="heading-sm mb-1 group-hover:text-accent transition-colors">
                            {service.title}
                          </h2>
                          <div className="text-sm text-gray-400">
                            from{' '}
                            <span className="text-dark font-bold text-lg">${service.price}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-body mb-6">{service.description}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.features.map((f) => (
                          <span
                            key={f}
                            className="px-3 py-1 bg-surface-50 text-xs font-medium text-gray-600 uppercase tracking-wider"
                          >
                            {f}
                          </span>
                        ))}
                      </div>

                      <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-accent group-hover:gap-2 transition-all">
                        Learn More <ArrowRightIcon className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-dark text-center">
        <div className="container-main">
          <div className="gold-line mx-auto mb-6" />
          <h2 className="heading-lg text-white mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Text or call us with photos of your vehicle and we'll recommend the best package.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+17028880867" className="btn-primary">
              <PhoneIcon className="w-4 h-4" />
              Call (702) 888-0867
            </a>
            <Link to="/pricing" className="btn-secondary">
              View All Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}