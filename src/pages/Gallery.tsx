import BeforeAfterGallery from '../components/BeforeAfterGallery'

export default function Gallery() {
  return (
    <div>
      <section className="bg-dark pt-32 pb-16 px-4 md:px-8">
        <div className="container-main text-center">
          <div className="gold-line mx-auto mb-6" />
          <h1 className="heading-xl text-white mb-4">Our <span className="text-accent">Gallery</span></h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            See the transformation. Real results from real vehicles in Las Vegas.
          </p>
        </div>
      </section>
      <BeforeAfterGallery />
    </div>
  )
}