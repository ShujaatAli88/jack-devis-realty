import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutPreview from '../components/AboutPreview'
import Services from '../components/Services'
import Listings from '../components/Listings'
import ServicesSplit from '../components/ServicesSplit'
import Testimonials from '../components/Testimonials'
import ReviewsStrip from '../components/ReviewsStrip'
import CTABanner from '../components/CTABanner'
import Blog from '../components/Blog'
import ConnectCTA from '../components/ConnectCTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Helmet>
        <title>Jack Davis Realty | Atlanta Metro Real Estate</title>
        <meta
          name="description"
          content="Jack Davis Realty — your Atlanta residential and investment specialist. Search Atlanta Metro homes, condos, townhomes, and investment properties."
        />
      </Helmet>

      <Navbar />
      <Hero />
      <AboutPreview />
      <Services />
      <Listings />
      <ServicesSplit />
      <Testimonials />
      <ReviewsStrip />
      <CTABanner />
      <Blog />
      <ConnectCTA />
      <Footer />
    </motion.div>
  )
}
