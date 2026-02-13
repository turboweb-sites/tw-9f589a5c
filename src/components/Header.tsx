import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface HeaderProps {
  onGetQuote?: () => void
}

const LOGO_URL = "https://pub-166557a34b174b9a90d5376150b1d05a.r2.dev/assets/9f589a5c-a758-4229-aca4-2583e94a0423/9728749e-853c-47cc-bf83-99bbbb56f99e/534430600_17944766856043507_3331526972432231432_n_removebg_preview_1770946099541_xe4cyy.webp"

const navLinks = [
  { label: 'Home', path: '/' },
  {
    label: 'Services',
    path: '/services',
    children: [
      { label: 'Exterior Detail', path: '/services/mobile-exterior-detail' },
      { label: 'Interior Detail', path: '/services/interior-detail' },
      { label: 'Full Detail', path: '/services/full-detail' },
      { label: 'Paint Correction', path: '/services/paint-correction' },
      { label: 'Ceramic Coating', path: '/services/ceramic-coating' },
      { label: 'RV Detailing', path: '/services/rv-detailing' },
      { label: 'Marine Detailing', path: '/services/marine-detailing' },
    ],
  },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Reviews', path: '/reviews' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
  { label: 'FAQ', path: '/faq' },
]

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
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

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

export default function Header({ onGetQuote }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setMobileServicesOpen(false)
  }, [location.pathname])

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark/95 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container-main">
        <div className="flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
          {/* Logo with white background circle for maximum visibility */}
          <Link to="/" className="flex items-center gap-3 group relative z-10">
            <div className="relative w-14 h-14 md:w-16 md:h-16 flex-shrink-0">
              {/* Bright white circle background */}
              <div
                className="absolute inset-0 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.6),0_0_40px_rgba(212,175,55,0.3)]"
              />
              {/* Gold ring border */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #D4AF37 0%, #F5E6A3 50%, #D4AF37 100%)',
                  padding: '2px',
                  borderRadius: '9999px',
                }}
              >
                <div className="w-full h-full rounded-full bg-white" />
              </div>
              {/* Logo image on top */}
              <img
                src={LOGO_URL}
                alt="Top Choice Detail Logo"
                className="absolute inset-[3px] w-[calc(100%-6px)] h-[calc(100%-6px)] rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
                style={{
                  filter: 'contrast(1.2) saturate(1.1)',
                }}
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-bold text-sm uppercase tracking-widest leading-tight drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                Top Choice
              </div>
              <div className="text-accent text-[10px] uppercase tracking-[0.2em] font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                Detail
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    to={link.path}
                    className={`flex items-center gap-1 px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                      isActive(link.path)
                        ? 'text-accent'
                        : 'text-white/80 hover:text-accent'
                    }`}
                  >
                    {link.label}
                    <ChevronDownIcon
                      className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                    />
                  </Link>

                  {servicesOpen && (
                    <div className="absolute top-full left-0 pt-2 animate-slide-down">
                      <div className="bg-dark-50 border border-white/10 shadow-2xl min-w-[240px]">
                        {link.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={`block px-5 py-3 text-xs uppercase tracking-wider transition-colors border-l-2 ${
                              isActive(child.path)
                                ? 'text-accent border-accent bg-white/5'
                                : 'text-white/70 border-transparent hover:text-accent hover:border-accent hover:bg-white/5'
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                    isActive(link.path)
                      ? 'text-accent'
                      : 'text-white/80 hover:text-accent'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+17028880867"
              className="flex items-center gap-2 text-accent text-sm font-bold hover:text-accent-light transition-colors"
              onClick={() => {
                if ((window as any).gtag) {
                  (window as any).gtag('event', 'phone_click', { event_category: 'contact' })
                }
              }}
            >
              <PhoneIcon className="w-4 h-4" />
              (702) 888-0867
            </a>
            <button onClick={onGetQuote} className="btn-primary !py-3 !px-6 !text-xs">
              Get Quote
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 -mr-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden bg-dark-50 border-t border-white/10 animate-slide-down">
            <nav className="py-4 px-4">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className={`flex items-center justify-between w-full py-3 text-sm font-semibold uppercase tracking-wider ${
                        isActive(link.path) ? 'text-accent' : 'text-white/80'
                      }`}
                    >
                      {link.label}
                      <ChevronDownIcon
                        className={`w-4 h-4 transition-transform ${
                          mobileServicesOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {mobileServicesOpen && (
                      <div className="pl-4 pb-2 space-y-1">
                        <Link
                          to={link.path}
                          className="block py-2 text-xs uppercase tracking-wider text-white/60 hover:text-accent transition-colors"
                        >
                          All Services
                        </Link>
                        {link.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={`block py-2 text-xs uppercase tracking-wider transition-colors ${
                              isActive(child.path)
                                ? 'text-accent'
                                : 'text-white/60 hover:text-accent'
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    to={link.path}
                    className={`block py-3 text-sm font-semibold uppercase tracking-wider ${
                      isActive(link.path) ? 'text-accent' : 'text-white/80'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}

              <div className="mt-4 pt-4 border-t border-white/10 space-y-3">
                <a
                  href="tel:+17028880867"
                  className="flex items-center gap-2 text-accent font-bold"
                >
                  <PhoneIcon className="w-4 h-4" />
                  (702) 888-0867
                </a>
                <button onClick={onGetQuote} className="btn-primary w-full text-center">
                  Get a Free Quote
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}