import { useState } from 'react'

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

type VehicleSize = 'sedan' | 'suv' | 'truck' | 'xl'

const vehicleSizes: { key: VehicleSize; label: string; multiplier: number }[] = [
  { key: 'sedan', label: 'Sedan / Coupe', multiplier: 1 },
  { key: 'suv', label: 'SUV / Crossover', multiplier: 1.2 },
  { key: 'truck', label: 'Truck / Van', multiplier: 1.35 },
  { key: 'xl', label: 'XL / 3-Row SUV', multiplier: 1.5 },
]

const pricingPackages = [
  {
    name: 'Exterior Detail',
    basePrice: 89,
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
    basePrice: 119,
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
    basePrice: 199,
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
    basePrice: 299,
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
    basePrice: 499,
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
]

export default function Pricing() {
  const [selectedSize, setSelectedSize] = useState<VehicleSize>('sedan')

  const currentMultiplier = vehicleSizes.find((v) => v.key === selectedSize)?.multiplier || 1

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-dark text-white py-20">
        <div className="container-main px-4 md:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="gold-line" />
            <span className="text-accent text-xs font-bold uppercase tracking-[0.3em]">
              Pricing
            </span>
            <div className="gold-line" />
          </div>
          <h1 className="heading-xl mb-4">
            Transparent <span className="text-accent">Pricing</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Honest pricing with no hidden fees. Select your vehicle size for accurate estimates.
          </p>
        </div>
      </section>

      {/* Vehicle Size Selector */}
      <section className="bg-accent py-8">
        <div className="container-main px-4 md:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {vehicleSizes.map((size) => (
              <button
                key={size.key}
                onClick={() => setSelectedSize(size.key)}
                className={`px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all border ${
                  selectedSize === size.key
                    ? 'bg-dark text-white border-dark'
                    : 'bg-transparent text-dark border-dark/30 hover:border-dark'
                }`}
              >
                {size.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-white">
        <div className="container-main px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingPackages.map((pkg) => {
              const price = Math.round(pkg.basePrice * currentMultiplier)
              return (
                <div
                  key={pkg.name}
                  className={`relative border transition-all ${
                    pkg.popular
                      ? 'border-accent shadow-lg shadow-accent/10'
                      : 'border-gray-200 hover:border-accent/50'
                  } card-hover`}
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
                      <span className="text-3xl font-black text-dark">${price}</span>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                          <CheckCircleIcon className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <a
                      href="tel:+17028880867"
                      className={`block w-full text-center ${pkg.popular ? 'btn-primary' : 'btn-dark'} !py-3 !text-xs`}
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              )
            })}
          </div>

          <p className="text-center text-xs text-gray-400 mt-8">

          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark text-white py-16">
        <div className="container-main px-4 md:px-8 text-center">
          <h2 className="heading-lg mb-4">
            Need a Custom <span className="text-accent">Quote</span>?
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8">
            Have an RV, boat, or special request? Contact us for a personalized quote.
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