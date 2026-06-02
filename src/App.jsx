import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { AnimatePresence, motion } from 'framer-motion'
import Home from './pages/Home'
import About from './pages/About'
import BlogPage from './pages/BlogPage'
import SearchListings from './pages/SearchListings'
import Communities from './pages/Communities'
import Buying from './pages/Buying'
import Selling from './pages/Selling'
import CashOffer from './pages/CashOffer'
import CashOfferForm from './pages/CashOfferForm'
import Valuation from './pages/Valuation'
import FeaturedProperties from './pages/FeaturedProperties'
import AgentProfile from './pages/AgentProfile'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop'

function StickyMobileCTA() {
  const { pathname } = useLocation()
  if (pathname === '/cash-offer' || pathname === '/cash-offer-form') return null
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.4 }}
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden px-4 pb-4 pt-2"
      style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.12) 0%, transparent 100%)' }}
    >
      <Link
        to="/cash-offer"
        className="block w-full text-center font-body font-bold text-base py-4 rounded-full shadow-xl transition-all duration-200"
        style={{ background: '#AC1E32', color: 'white' }}
      >
        Get My Fast Cash Offer
      </Link>
    </motion.div>
  )
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/search" element={<SearchListings />} />
            <Route path="/communities" element={<Communities />} />
            <Route path="/buying" element={<Buying />} />
            <Route path="/selling" element={<Selling />} />
            <Route path="/cash-offer" element={<CashOffer />} />
            <Route path="/cash-offer-form" element={<CashOfferForm />} />
            <Route path="/valuation" element={<Valuation />} />
            <Route path="/featured" element={<FeaturedProperties />} />
            <Route path="/agents/:slug" element={<AgentProfile />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <StickyMobileCTA />
      </BrowserRouter>
    </HelmetProvider>
  )
}
