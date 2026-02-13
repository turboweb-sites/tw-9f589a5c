import { useInView } from '../components/useInView'

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}

function AwardIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  )
}

const values = [
  {
    icon: ShieldIcon,
    title: 'Quality First',
    description: 'We use only premium, professional-grade products and proven techniques on every vehicle.',
  },
  {
    icon: UsersIcon,
    title: 'Family Owned',
    description: 'As a family business, we treat every customer like family and every car like our own.',
  },
  {
    icon: HeartIcon,
    title: 'Passion Driven',
    description: 'Our love for cars shows in every detail. We don\'t cut corners — we perfect them.',
  },
  {
    icon: AwardIcon,
    title: 'Certified Experts',
    description: 'Trained and certified in the latest detailing techniques, coatings, and paint correction.',
  },
]

const stats = [
  { value: '2,000+', label: 'Cars Detailed' },
  { value: '4.9★', label: 'Average Rating' },
  { value: '80+', label: 'Five-Star Reviews' },
  { value: '5+', label: 'Years Experience' },
]

export default function About() {
  const { ref, isInView } = useInView(0.05)

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-dark text-white py-20">
        <div className="container-main px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="gold-line" />
              <span className="text-accent text-xs font-bold uppercase tracking-[0.3em]">
                About Us
              </span>
              <div className="gold-line" />
            </div>
            <h1 className="heading-xl mb-6">
              Premium Mobile Detailing, <span className="text-accent">Family Values</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              LV Mobile Detailing is a family-owned mobile auto detailing business serving the
              Las Vegas valley. We bring professional-grade detailing directly to your home or office.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-accent py-12">
        <div className="container-main px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-dark">{stat.value}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-dark/70 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-main px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="gold-line" />
              <span className="text-accent text-xs font-bold uppercase tracking-[0.3em]">
                Our Story
              </span>
              <div className="gold-line" />
            </div>
            <h2 className="heading-lg text-dark mb-8">
              Built on <span className="text-accent">Passion</span> & Trust
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                What started as a passion for keeping our own cars looking pristine has grown into
                Las Vegas's most trusted mobile detailing service. We founded LV Mobile Detailing
                with a simple belief: every vehicle deserves professional care, and that care
                should come to you.
              </p>
              <p>
                As a family-owned business, we understand the importance of trust. When you invite
                us to your home or workplace, we treat that trust with the utmost respect. Every
                team member is trained to our exacting standards, using only premium products that
                protect your investment.
              </p>
              <p>
                From daily drivers to exotic supercars, from compact sedans to 40-foot RVs — we've
                seen it all and we love every minute of it. Our mobile setup means we bring
                everything we need, including our own water supply, so you can sit back and relax
                while we work our magic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-surface-50" ref={ref}>
        <div className="container-main px-4 md:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="gold-line" />
              <span className="text-accent text-xs font-bold uppercase tracking-[0.3em]">
                Our Values
              </span>
              <div className="gold-line" />
            </div>
            <h2 className="heading-lg text-dark">
              What We <span className="text-accent">Stand For</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className={`bg-white border border-gray-200 p-8 text-center card-hover transition-all duration-700 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: isInView ? `${i * 100}ms` : '0ms' }}
                >
                  <div className="w-14 h-14 bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="heading-sm text-dark mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark text-white py-16">
        <div className="container-main px-4 md:px-8 text-center">
          <h2 className="heading-lg mb-4">
            Ready to Experience the <span className="text-accent">Difference</span>?
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8">
            Book your mobile detail today and see why Las Vegas trusts LV Mobile Detailing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+17028880867" className="btn-primary">
              Call (702) 888-0867
            </a>
            <a
              href="sms:+17028880867"
              className="btn-secondary"
            >
              Text Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}