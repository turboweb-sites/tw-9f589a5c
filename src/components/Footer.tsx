import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Star } from 'lucide-react'

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/topchoicedetail', label: 'Instagram' },
  { icon: Facebook, href: 'https://facebook.com/topchoicedetail', label: 'Facebook' },
]

const quickLinks = [
  { name: 'Services', path: '/services' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Reviews', path: '/reviews' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'FAQ', path: '/faq' },
]

const services = [
  { name: 'Paint Correction', path: '/services/paint-correction' },
  { name: 'Ceramic Coating', path: '/services/ceramic-coating' },
  { name: 'Paint Protection Film', path: '/services/ppf' },
  { name: 'Interior Detailing', path: '/services/interior-detailing' },
  { name: 'Exterior Detailing', path: '/services/exterior-detailing' },
  { name: 'Window Tinting', path: '/services/window-tinting' },
]

function SocialIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  )
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img
                src="https://pub-166557a34b174b9a90d5376150b1d05a.r2.dev/assets/9f589a5c-a758-4229-aca4-2583e94a0423/9728749e-853c-47cc-bf83-99bbbb56f99e/534430600_17944766856043507_3331526972432231432_n_removebg_preview_1770946099541_xe4cyy.webp"
                alt="Top Choice Detail Logo"
                className="h-12 w-12 object-contain"
              />
              <div>
                <span className="text-xl font-bold text-white tracking-wider">
                  TOP CHOICE
                </span>
                <span className="block text-xs text-[#D4AF37] tracking-[0.3em] uppercase">
                  Detail
                </span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Premium auto detailing services that transform your vehicle. We bring out the best in
              every car with meticulous attention to detail.
            </p>
            <div className="flex items-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
              ))}
              <span className="text-white/50 text-sm ml-2">5.0 on Google</span>
            </div>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-all duration-300"
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold uppercase tracking-wider text-sm mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/50 hover:text-[#D4AF37] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold uppercase tracking-wider text-sm mb-6">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-white/50 hover:text-[#D4AF37] transition-colors duration-300 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold uppercase tracking-wider text-sm mb-6">
              Contact Us
            </h3>
            <div className="space-y-4">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-white/50 hover:text-[#D4AF37] transition-colors duration-300"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">(123) 456-7890</span>
              </a>
              <a
                href="mailto:info@topchoicedetail.com"
                className="flex items-center gap-3 text-white/50 hover:text-[#D4AF37] transition-colors duration-300"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">info@topchoicedetail.com</span>
              </a>
              <div className="flex items-start gap-3 text-white/50">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span className="text-sm">123 Detail Street, Auto City, CA 90210</span>
              </div>
              <div className="flex items-start gap-3 text-white/50">
                <Clock className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p>Mon – Fri: 8:00 AM – 6:00 PM</p>
                  <p>Sat: 9:00 AM – 4:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {currentYear} Top Choice Detail. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Crafted with precision & passion
          </p>
        </div>
      </div>
    </footer>
  )
}