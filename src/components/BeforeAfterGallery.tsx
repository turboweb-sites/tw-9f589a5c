import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useInView } from './useInView'

const galleryItems = [
  {
    id: 1,
    category: 'Exterior',
    title: 'Tesla Model 3 — Full Exterior',
    beforeColor: 'from-gray-400 to-gray-600',
    afterColor: 'from-accent/60 to-accent-dark/60',
  },
  {
    id: 2,
    category: 'Interior',
    title: 'Range Rover — Deep Interior',
    beforeColor: 'from-gray-500 to-gray-700',
    afterColor: 'from-accent/60 to-accent-dark/60',
  },
  {
    id: 3,
    category: 'Paint Correction',
    title: 'BMW M4 — 2-Step Correction',
    beforeColor: 'from-gray-400 to-gray-600',
    afterColor: 'from-accent/60 to-accent-dark/60',
  },
  {
    id: 4,
    category: 'Ceramic',
    title: 'Porsche 911 — Ceramic Coating',
    beforeColor: 'from-gray-500 to-gray-700',
    afterColor: 'from-accent/60 to-accent-dark/60',
  },
]

const filters = ['All', 'Exterior', 'Interior', 'Paint Correction', 'Ceramic']

export default function BeforeAfterGallery() {
  const [activeFilter, setActiveFilter] = useState('All')
  const { ref, isInView } = useInView(0.05)

  const filtered = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter)

  return (
    <section className="section-padding bg-dark text-white">
      <div className="container-main" ref={ref}>
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="gold-line" />
            <span className="text-accent text-xs font-bold uppercase tracking-[0.3em]">
              Our Work
            </span>
            <div className="gold-line" />
          </div>
          <h2 className="heading-lg">
            Before & <span className="text-accent">After</span>
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all border ${
                activeFilter === f
                  ? 'bg-accent text-dark border-accent'
                  : 'border-white/20 text-white/60 hover:border-accent hover:text-accent'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isInView ? `${i * 150}ms` : '0ms' }}
            >
              <div className="grid grid-cols-2 h-64">
                {/* Before */}
                <div className={`relative bg-gradient-to-br ${item.beforeColor} flex items-center justify-center`}>
                  <div className="absolute top-3 left-3 bg-black/60 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                    Before
                  </div>
                  <div className="text-white/30 text-4xl font-black">B</div>
                </div>
                {/* After */}
                <div className={`relative bg-gradient-to-br ${item.afterColor} flex items-center justify-center`}>
                  <div className="absolute top-3 right-3 bg-accent text-dark text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                    After
                  </div>
                  <div className="text-white/30 text-4xl font-black">A</div>
                </div>
              </div>
              <div className="p-4 bg-dark-50">
                <span className="text-accent text-[10px] font-bold uppercase tracking-widest">
                  {item.category}
                </span>
                <h3 className="text-sm font-bold mt-1">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/gallery" className="btn-secondary">
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  )
}