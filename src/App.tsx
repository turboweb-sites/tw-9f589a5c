import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import MobileBottomBar from './components/MobileBottomBar'
import QuoteFormModal from './components/QuoteFormModal'
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Pricing from './pages/Pricing'
import Gallery from './pages/Gallery'
import Reviews from './pages/Reviews'
import About from './pages/About'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import NotFound from './pages/NotFound'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  const [quoteOpen, setQuoteOpen] = useState(false)

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header onGetQuote={() => setQuoteOpen(true)} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home onGetQuote={() => setQuoteOpen(true)} />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <MobileBottomBar />
        <QuoteFormModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
      </div>
    </Router>
  )
}