import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Listings from '../components/Listings'
import Footer from '../components/Footer'

const services = [
  {
    label: 'Home Evaluation',
    title: 'Home Evaluation',
    description:
      "Find out what your home can really sell for in today's market with a Fast & Free property valuation.",
    image: 'https://u.realgeeks.media/jackdavisrealty/hv39.jpg',
    href: '/valuation',
  },
  {
    label: 'Sellers',
    title: 'Sell Your Home',
    description:
      'Thinking of selling? Who you work with matters. Find out how Jack Davis Realty will get your home SOLD.',
    image: 'https://u.realgeeks.media/jackdavisrealty/sell7-320.png',
    href: '/selling',
  },
  {
    label: 'Cash Offer',
    title: 'Fast Cash Offer',
    description:
      'Receive a Fast Cash Offer and sell your home in as little as 14 days. We have cash buyers ready to purchase your home today.',
    image: 'https://u.realgeeks.media/jackdavisrealty/sold320-7.jpg',
    href: '/cash-offer',
  },
]

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

      {/* Tagline bar */}
      <div className="bg-navy py-6 px-4 text-center">
        <p className="font-heading text-2xl md:text-3xl font-semibold text-white mb-1">
          Jack Davis Realty
        </p>
        <p className="font-body text-sm text-gold/80 tracking-widest uppercase">
          Your Atlanta Residential &amp; Investment Specialist
        </p>
      </div>

      {/* Service Cards */}
      <section className="bg-ivory py-20 px-4">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-8">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={svc.image}
                  alt={svc.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                <span className="absolute top-4 left-4 bg-gold text-navy font-body text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
                  {svc.label}
                </span>
              </div>

              <div className="p-7 flex flex-col flex-1">
                <h3 className="font-heading text-2xl font-semibold text-navy mb-3">
                  {svc.title}
                </h3>
                <p className="font-body text-gray-500 leading-relaxed text-sm flex-1 mb-6">
                  {svc.description}
                </p>
                <Link to={svc.href} className="btn-gold w-full text-center block">
                  Check Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Listings */}
      <Listings />

      <Footer />

    </motion.div>
  )
}
