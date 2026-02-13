import HeroSection from '../components/HeroSection'
import PackagesSection from '../components/PackagesSection'
import WhyUsSection from '../components/WhyUsSection'
import BeforeAfterGallery from '../components/BeforeAfterGallery'
import ReviewsCarousel from '../components/ReviewsCarousel'
import HowItWorks from '../components/HowItWorks'
import ServiceAreaSection from '../components/ServiceAreaSection'
import FinalCTA from '../components/FinalCTA'

interface HomeProps {
  onGetQuote?: () => void
}

export default function Home({ onGetQuote }: HomeProps) {
  return (
    <div>
      <HeroSection onGetQuote={onGetQuote} />
      <PackagesSection onGetQuote={onGetQuote} />
      <WhyUsSection />
      <BeforeAfterGallery />
      <ReviewsCarousel />
      <HowItWorks />
      <ServiceAreaSection />
      <FinalCTA />

      {/* FAQ Schema for Home Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How long does mobile detailing take?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Exterior detail takes 1-2 hours, interior 1.5-2.5 hours, full detail 3-5 hours. Paint correction and ceramic coating may take 4-8 hours depending on vehicle size and condition.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do I need to provide water or electricity?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We bring everything we need! Our mobile unit is fully self-contained with water tanks, generators, and all professional equipment. Just provide access to your vehicle.',
                },
              },
              {
                '@type': 'Question',
                name: 'What areas in Las Vegas do you serve?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We serve the entire Las Vegas metro area including Las Vegas, Summerlin, Henderson, North Las Vegas, Green Valley, Spring Valley, Enterprise, Centennial Hills, Mountains Edge, Aliante, and Rhodes Ranch.',
                },
              },
              {
                '@type': 'Question',
                name: 'What happens if it rains on the day of my appointment?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "If weather doesn't permit safe detailing, we'll reschedule at no extra charge. We monitor weather conditions and will proactively reach out to reschedule if needed.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  )
}