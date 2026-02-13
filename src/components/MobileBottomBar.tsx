import { trackPhoneClick, trackSmsClick } from '../lib/supabase'

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function MessageIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-dark border-t border-white/10 safe-area-bottom">
      <div className="grid grid-cols-2 divide-x divide-white/10">
        <a
          href="tel:+17028880867"
          onClick={trackPhoneClick}
          className="flex items-center justify-center gap-2 py-4 text-accent font-bold text-sm uppercase tracking-wider hover:bg-white/5 transition-colors"
        >
          <PhoneIcon />
          Call Now
        </a>
        <a
          href="sms:+17028880867"
          onClick={trackSmsClick}
          className="flex items-center justify-center gap-2 py-4 text-white font-bold text-sm uppercase tracking-wider hover:bg-white/5 transition-colors"
        >
          <MessageIcon />
          Text Us
        </a>
      </div>
    </div>
  )
}