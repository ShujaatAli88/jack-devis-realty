import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { AnimatePresence } from 'framer-motion'
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
import ScrollToTop from './components/ScrollToTop'

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
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </HelmetProvider>
  )
}
