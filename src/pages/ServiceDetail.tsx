import { useParams, Link } from 'react-router-dom'

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
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

function ArrowLeftIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function DollarSignIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}

interface ServiceData {
  title: string
  slug: string
  description: string
  longDescription: string
  price: string
  duration: string
  features: string[]
  process: string[]
}

const servicesData: ServiceData[] = [
  {
    title: 'Mobile Exterior Detail',
    slug: 'mobile-exterior-detail',
    description: 'Complete exterior cleaning and protection for your vehicle.',
    longDescription: 'Our Mobile Exterior Detail brings a full-service hand wash and protection treatment directly to your location. We meticulously clean every exterior surface, from paint to wheels, ensuring your vehicle shines like new.',
    price: 'From $89',
    duration: '1-2 hours',
    features: [
      'Pre-rinse and foam bath',
      'Hand wash with pH-neutral shampoo',
      'Wheel and tire deep cleaning',
      'Tire dressing application',
      'Exterior window cleaning',
      'Quick spray wax protection',
      'Door jamb cleaning',
      'Trim and plastic restoration',
    ],
    process: [
      'Pre-rinse to remove loose debris',
      'Apply foam cannon for initial cleaning',
      'Two-bucket hand wash method',
      'Clean wheels, tires, and wheel wells',
      'Rinse and dry with microfiber towels',
      'Apply spray wax/sealant',
      'Dress tires and clean windows',
      'Final inspection and touch-ups',
    ],
  },
  {
    title: 'Interior Detail',
    slug: 'interior-detail',
    description: 'Deep clean every surface inside your vehicle.',
    longDescription: 'Our Interior Detail service provides a thorough deep cleaning of every interior surface. From carpets and seats to dashboard and vents, we restore your cabin to a fresh, showroom condition.',
    price: 'From $119',
    duration: '1.5-2.5 hours',
    features: [
      'Full vacuum and compressed air blowout',
      'Dashboard and console deep cleaning',
      'Leather cleaning and conditioning',
      'Vinyl and plastic treatment',
      'Interior window cleaning',
      'Carpet and floor mat shampooing',
      'Air vent detailing',
      'Air freshener application',
    ],
    process: [
      'Remove and clean floor mats',
      'Thorough vacuum of all surfaces',
      'Compressed air blowout of crevices',
      'Clean dashboard, console, and trim',
      'Condition leather or clean fabric seats',
      'Shampoo carpets and mats',
      'Clean interior glass',
      'Apply protectant and air freshener',
    ],
  },
  {
    title: 'Full Detail',
    slug: 'full-detail',
    description: 'Complete interior and exterior transformation.',
    longDescription: 'Our most popular service combines our Exterior and Interior Detail with enhanced treatments. The Full Detail gives your vehicle a comprehensive top-to-bottom restoration, inside and out.',
    price: 'From $199',
    duration: '3-4 hours',
    features: [
      'Complete exterior hand wash',
      'Full interior deep clean',
      'Clay bar paint decontamination',
      'Sealant or wax application',
      'Leather conditioning',
      'Carpet shampooing',
      'Tire dressing and window cleaning',
      'Engine bay cleaning (on request)',
    ],
    process: [
      'Full exterior pre-wash and foam',
      'Two-bucket hand wash',
      'Clay bar treatment for paint',
      'Complete interior deep clean',
      'Condition leather, treat fabric',
      'Apply paint sealant or wax',
      'Clean all glass inside and out',
      'Final inspection and quality check',
    ],
  },
  {
    title: 'Paint Correction',
    slug: 'paint-correction',
    description: 'Remove swirls, scratches, and restore paint clarity.',
    longDescription: 'Paint Correction is a multi-step process that removes imperfections from your vehicle\'s paint. Using professional machine polishers and compounds, we eliminate swirl marks, light scratches, water spots, and oxidation to restore a flawless finish.',
    price: 'From $299',
    duration: '4-8 hours',
    features: [
      'Thorough paint inspection',
      'Paint decontamination wash',
      'Clay bar treatment',
      'Swirl mark removal',
      'Light scratch reduction',
      'Machine compounding (1 or 2-step)',
      'Machine polishing for clarity',
      'Paint sealant or wax protection',
    ],
    process: [
      'Wash and decontaminate paint',
      'Clay bar entire vehicle',
      'Inspect paint with LED lighting',
      'Select appropriate compounds',
      'Machine compound to remove defects',
      'Machine polish for high gloss',
      'Wipe with IPA to check results',
      'Apply sealant/wax protection',
    ],
  },
  {
    title: 'Ceramic Coating',
    slug: 'ceramic-coating',
    description: 'Long-lasting paint protection with ceramic technology.',
    longDescription: 'Our Ceramic Coating service provides the ultimate paint protection. After thorough preparation and paint correction, we apply a professional-grade ceramic or graphene coating that bonds with your paint, providing 2-5 years of protection with a stunning hydrophobic finish.',
    price: 'From $499',
    duration: '6-10 hours',
    features: [
      'Full paint decontamination',
      '1-step paint correction included',
      'Professional ceramic/graphene coating',
      '2-5 year protection warranty',
      'Extreme hydrophobic finish',
      'UV protection',
      'Chemical resistance',
      'Aftercare kit included',
    ],
    process: [
      'Thorough wash and decontamination',
      'Clay bar treatment',
      '1-step machine polish',
      'IPA wipe to remove all oils',
      'Apply ceramic coating panel by panel',
      'Allow proper curing time',
      'Inspect under LED lighting',
      'Provide aftercare instructions and kit',
    ],
  },
  {
    title: 'RV Detailing',
    slug: 'rv-detailing',
    description: 'Professional detailing for RVs, motorhomes, and trailers.',
    longDescription: 'Our RV Detailing service handles vehicles of all sizes. Whether you have a Class A motorhome, a travel trailer, or a fifth wheel, we have the equipment and expertise to make it shine.',
    price: 'From $349',
    duration: '4-8+ hours',
    features: [
      'Full exterior wash and decontamination',
      'Oxidation removal',
      'Wax or sealant application',
      'Awning cleaning',
      'Wheel and tire cleaning',
      'Interior deep cleaning',
      'Custom pricing by size',
      'Roof cleaning available',
    ],
    process: [
      'Assess vehicle size and condition',
      'Pre-rinse and apply foam',
      'Hand wash all exterior surfaces',
      'Remove oxidation if present',
      'Apply wax/sealant protection',
      'Clean interior thoroughly',
      'Detail wheels and tires',
      'Final walkthrough with owner',
    ],
  },
  {
    title: 'Marine Detailing',
    slug: 'marine-detailing',
    description: 'Professional detailing for boats and marine vessels.',
    longDescription: 'Keep your boat looking its best with our Marine Detailing service. We understand the unique challenges of marine environments and use specialized products to clean, protect, and restore your vessel.',
    price: 'From $399',
    duration: '4-8+ hours',
    features: [
      'Hull cleaning and polishing',
      'Gel coat restoration',
      'Non-skid deck cleaning',
      'Metal polishing',
      'Interior cabin cleaning',
      'Canvas and upholstery cleaning',
      'Wax/sealant protection',
      'Custom pricing by vessel size',
    ],
    process: [
      'Assess vessel size and condition',
      'Wash and rinse hull and deck',
      'Clean and restore gel coat',
      'Polish all metal fittings',
      'Deep clean interior cabin',
      'Clean upholstery and canvas',
      'Apply marine-grade wax/sealant',
      'Final inspection',
    ],
  },
]

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = servicesData.find((s) => s.slug === slug)

  if (!service) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="heading-lg text-dark mb-4">Service Not Found</h1>
          <p className="text-gray-500 mb-6">The service you're looking for doesn't exist.</p>
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-dark text-white py-20">
        <div className="container-main px-4 md:px-8">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-wider mb-6 hover:text-accent-light transition-colors"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            All Services
          </Link>
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-4">{service.title}</h1>
            <p className="text-white/60 text-lg leading-relaxed">{service.longDescription}</p>
            <div className="flex flex-wrap items-center gap-6 mt-8">
              <div className="flex items-center gap-2">
                <DollarSignIcon className="w-5 h-5 text-accent" />
                <span className="font-bold">{service.price}</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="w-5 h-5 text-accent" />
                <span className="font-bold">{service.duration}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features + Process */}
      <section className="section-padding bg-white">
        <div className="container-main px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* What's Included */}
            <div>
              <h2 className="heading-md text-dark mb-6">What's Included</h2>
              <ul className="space-y-3">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircleIcon className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Process */}
            <div>
              <h2 className="heading-md text-dark mb-6">Our Process</h2>
              <ol className="space-y-4">
                {service.process.map((step, i) => (
                  <li key={step} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-accent text-dark text-xs font-black flex items-center justify-center shrink-0">
                      {i + 1}
                    </div>
                    <span className="text-sm text-gray-600 pt-1.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark text-white py-16">
        <div className="container-main px-4 md:px-8 text-center">
          <h2 className="heading-lg mb-4">
            Ready to Book Your <span className="text-accent">{service.title}</span>?
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8">
            Contact us today for a free quote. We'll come to you anywhere in the Las Vegas valley.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+17028880867" className="btn-primary flex items-center gap-2">
              <PhoneIcon className="w-4 h-4" />
              Call (702) 888-0867
            </a>
            <a href="sms:+17028880867" className="btn-secondary flex items-center gap-2">
              <MessageSquareIcon className="w-4 h-4" />
              Text Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}