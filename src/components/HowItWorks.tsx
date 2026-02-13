import { useInView } from './useInView'

const steps = [
  {
    number: '01',
    title: 'Request',
    desc: 'Call, text, or submit a quote with your vehicle details and location.',
    icon: '',
  },
  {
    number: '02',
    title: 'Confirm',
    desc: 'We provide an estimate and schedule a convenient time for you.',
    icon: '✅',
  },
  {
    number: '03',
    title: 'We Arrive',
    desc: 'Our fully-equipped mobile unit arrives at your location — home or office.',
    icon: '',
  },
  {
    number: '04',
    title: 'Done!',
    desc: 'Your vehicle looks showroom-new. Pay and enjoy your freshly detailed ride!',
    icon: '✨',
  },
]

export default function HowItWorks() {
  const { ref, isInView } = useInView(0.05)

  return (
    <section className="section-padding bg-white">
      <div className="container-main" ref={ref}>
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="gold-line" />
            <span className="text-accent text-xs font-bold uppercase tracking-[0.3em]">
              Simple Process
            </span>
            <div className="gold-line" />
          </div>
          <h2 className="heading-lg text-dark">
            How It <span className="text-accent">Works</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connection line (desktop) */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gray-200" />

          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`relative text-center transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isInView ? `${i * 150}ms` : '0ms' }}
            >
              <div className="relative z-10 w-24 h-24 mx-auto mb-6 bg-surface-50 border-2 border-gray-200 rounded-full flex items-center justify-center">
                <span className="text-3xl">{step.icon}</span>
              </div>
              <div className="text-accent text-xs font-bold tracking-widest mb-2">
                Step {step.number}
              </div>
              <h3 className="font-bold uppercase tracking-wider text-sm mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}