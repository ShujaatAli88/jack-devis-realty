import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiBell, FiBarChart2, FiHome } from 'react-icons/fi'
import Navbar from '../components/Navbar'
import PageHero from '../components/PageHero'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

const features = [
  {
    icon: <FiBell className="w-7 h-7 text-[#8D2222]" />,
    title: 'New Listing Alerts',
    description:
      'Sign up to receive instant notifications when new homes matching your criteria hit the Atlanta Metro market — so you never miss an opportunity.',
  },
  {
    icon: <FiBarChart2 className="w-7 h-7 text-[#8D2222]" />,
    title: 'Custom Market Reports',
    description:
      'Curious about what\'s happening in your target neighborhood? A custom market report shows the latest active, under contract, and sold homes near you.',
  },
  {
    icon: <FiHome className="w-7 h-7 text-[#8D2222]" />,
    title: 'Free Home Valuation',
    description:
      'Considering selling or refinancing? Get an instant property valuation now. Knowledge is power in any real estate decision.',
  },
]

export default function Buying() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Helmet>
        <title>Buying a Home | Jack Davis Realty – Atlanta Metro</title>
        <meta
          name="description"
          content="Find your perfect Atlanta Metro home. Get instant access to new listings, custom market reports, and expert buyer representation from Jack Davis Realty."
        />
      </Helmet>

      <Navbar />
      <PageHero
        title="Buying"
        breadcrumb="Buying"
        image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&auto=format&fit=crop&q=80"
      />

      {/* Hero copy */}
      <section className="bg-ivory py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="section-label mb-4">Atlanta Metro Home Search</p>
          <h2 className="section-heading mb-5">
            Find Your Perfect Atlanta Metro Home
          </h2>
          <p className="font-body text-gray-500 leading-relaxed text-lg mb-10">
            Get INSTANT ACCESS to the Atlanta Metro area&apos;s newest listings — homes, condos,
            townhomes, land, and foreclosure properties all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/search" className="btn-gold">
              Search All Homes
            </Link>
            <Link to="/contact" className="btn-outline-navy">
              Sign Up for Listing Alerts
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Buyer Resources</p>
            <h2 className="section-heading">Everything You Need to Buy Smart</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="bg-ivory rounded-3xl p-8 text-center shadow-sm border border-gray-100"
              >
                <div className="w-16 h-16 bg-navy/5 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  {f.icon}
                </div>
                <h3 className="font-heading text-xl font-semibold text-navy mb-3">{f.title}</h3>
                <p className="font-body text-gray-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why work with us */}
      <section className="bg-ivory py-24 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&auto=format&fit=crop&q=80"
              alt="Atlanta Metro home"
              loading="lazy"
              className="w-full rounded-3xl object-cover shadow-xl"
              style={{ aspectRatio: '4/3' }}
            />
          </div>
          <div>
            <p className="section-label mb-3">Buyer Representation</p>
            <h2 className="section-heading mb-6">Your Interests Come First</h2>
            <p className="font-body text-gray-600 leading-relaxed mb-4">
              As your buyer&apos;s representative, Tomond Jack and the Jack Davis Realty team will
              guide you through every step — from identifying your priorities to negotiating the
              best possible price and terms.
            </p>
            <p className="font-body text-gray-600 leading-relaxed mb-8">
              With over 6,000 real estate deals and 20+ years in the Atlanta Metro market, we know
              which neighborhoods are appreciating, which builders deliver quality, and how to
              spot value that others miss.
            </p>
            <Link to="/contact" className="btn-gold">
              Start Your Home Search
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />
      <Footer />
    </motion.div>
  )
}
