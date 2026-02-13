const supabaseUrl = "" || ''
const supabaseAnonKey = "" || ''

let supabase: any = null

async function getSupabase() {
  if (supabase) return supabase
  if (supabaseUrl && supabaseAnonKey) {
    try {
      const mod = await import(/* @vite-ignore */ 'https://esm.sh/@supabase/supabase-js@2')
      supabase = mod.createClient(supabaseUrl, supabaseAnonKey)
      return supabase
    } catch {
      console.warn('Supabase SDK not available')
      return null
    }
  }
  return null
}

export interface Lead {
  id?: string
  name: string
  phone: string
  email?: string
  address?: string
  zip?: string
  vehicle_type?: string
  service?: string
  message?: string
  photo_urls?: string[]
  status?: string
  created_at?: string
}

export interface Review {
  id?: string
  author: string
  rating: number
  text: string
  vehicle?: string
  service?: string
  photo_url?: string
  is_featured?: boolean
  source?: string
  created_at?: string
}

export async function submitLead(lead: Lead): Promise<{ data: any; error: any }> {
  const client = await getSupabase()
  if (!client) {
    console.warn('Supabase not configured — lead submission simulated')
    return { data: lead, error: null }
  }
  return await client.from('leads').insert(lead).select().single()
}

export async function getReviews(): Promise<{ data: any[]; error: any }> {
  const client = await getSupabase()
  if (!client) {
    return { data: [], error: null }
  }
  return await client
    .from('reviews')
    .select('*')
    .order('created_at', { ascending: false })
}

// Analytics helper
export function trackEvent(eventName: string, params?: Record<string, any>) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, params)
  }
}

export function trackPhoneClick() {
  trackEvent('phone_click', { event_category: 'contact', event_label: '(702) 888-0867' })
}

export function trackSmsClick() {
  trackEvent('sms_click', { event_category: 'contact', event_label: 'SMS' })
}

export function trackFormSubmit(service?: string) {
  trackEvent('form_submit', { event_category: 'lead', event_label: service || 'general' })
}

export function trackQuoteClick() {
  trackEvent('quote_click', { event_category: 'engagement', event_label: 'Get Quote' })
}