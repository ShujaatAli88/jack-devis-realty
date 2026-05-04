import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiTrendingUp, FiDollarSign, FiCheckCircle, FiClock, FiArrowRight, FiSearch } from 'react-icons/fi'
import Navbar from '../components/Navbar'
import PageHero from '../components/PageHero'
import Footer from '../components/Footer'
import CashOfferModal from '../components/CashOfferModal'

const sellingPoints = [
  {
    icon: <FiCheckCircle className="w-7 h-7 text-gold" />,
    title: 'Professional Selling Tips',
    description:
      'Even small updates and repairs can help you sell your home for the highest price possible in the shortest time possible. Staging, minor improvements, or even a fresh coat of paint can make a huge difference. Request a free consultation on preparing your home for sale.',
  },
  {
    icon: <FiDollarSign className="w-7 h-7 text-gold" />,
    title: 'Accurate Pricing',
    description:
      "Pricing your home according to what it's really worth in today's market is a critical step in the selling process. Well-priced homes are likely to generate multiple offers and get you the most money at closing. That's why you'll want a professional assessment of your home's value that takes into account similar homes in your area currently for sale as well as recently sold homes in your area.",
  },
  {
    icon: <FiClock className="w-7 h-7 text-gold" />,
    title: 'Ready When You Are',
    description:
      'Contact us today for a free home evaluation and to learn more about the home selling process.',
  },
  {
    icon: <FiTrendingUp className="w-7 h-7 text-gold" />,
    title: 'Attention to Detail',
    description:
      "As your listing team it's our job to take care of the details associated with selling your home so you can focus on making the move to your new home. Our experienced team can take care of everything you need, from start to close and everything in between.",
  },
]

export default function Selling() {
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Helmet>
        <title>Sellers | Jack Davis Realty – Atlanta Metro</title>
        <meta
          name="description"
          content="We know what it takes to get your home SOLD. Jack Davis Realty goes above and beyond for every seller in the Atlanta Metro area."
        />
      </Helmet>

      <Navbar />
      <PageHero
        title="Sellers"
        breadcrumb="Sellers"
        image="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1600&auto=format&fit=crop&q=80"
      />

      {/* Intro */}
      <section className="bg-ivory py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="section-label mb-4">Sellers</p>
          <h2 className="section-heading mb-5">
            We know what it takes to get your home SOLD.
          </h2>
          <p className="font-body text-gray-500 leading-relaxed text-lg mb-10">
            At Jack Davis Realty, we go above and beyond to meet the needs of every seller. Whether
            you're selling your first home, or are an experienced seller, you have our full attention
            along with our expert, honest advice on staging, repairs, marketing and negotiating.
            It's our goal to not only sell your home for the highest price possible, but to do so
            as quickly as possible with as little stress and interruption in your life as possible.
          </p>
          <button onClick={() => setContactOpen(true)} className="btn-gold">
            Get a Free Home Valuation
          </button>
        </div>
      </section>

      {/* Selling points */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Our Selling Strategy</p>
            <h2 className="section-heading">How We Get Your Home Sold</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sellingPoints.map((point) => (
              <div
                key={point.title}
                className="bg-ivory rounded-3xl p-8 shadow-sm border border-gray-100"
              >
                <div className="w-14 h-14 bg-navy/5 rounded-2xl flex items-center justify-center mb-5">
                  {point.icon}
                </div>
                <h3 className="font-heading text-xl font-semibold text-navy mb-3">{point.title}</h3>
                <p className="font-body text-gray-500 text-sm leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fast Cash Offer */}
      <section className="relative bg-navy overflow-hidden py-0">
        {/* Diagonal split */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-[#1F0A0E]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 min-h-[520px]">

          {/* Left — content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center px-8 md:px-12 py-16"
          >
            <span className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 text-gold font-body text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 self-start">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              Cash Buyers Ready Now
            </span>

            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
              Fast Cash Offer<br />
              <span className="text-gold">No Repairs. No Hassle.</span>
            </h2>

            <p className="font-body text-white/60 text-base leading-relaxed mb-8 max-w-sm">
              Sell your home in as little as 14 days. We work with cash buyers who are ready to purchase your home today — any condition, any situation.
            </p>

            {/* Stats row */}
            <div className="flex gap-6 mb-8">
              {[['14 Days', 'To Close'], ['$0', 'Closing Costs'], ['24hr', 'Response']].map(([val, label]) => (
                <div key={label} className="text-center">
                  <p className="font-heading text-2xl font-bold text-gold">{val}</p>
                  <p className="font-body text-white/40 text-xs uppercase tracking-wider">{label}</p>
                </div>
              ))}
            </div>

            {/* Address search */}
            <div className="bg-white/8 border border-white/15 rounded-2xl p-4 mb-6 max-w-sm backdrop-blur-sm">
              <p className="font-body text-xs text-gold font-semibold uppercase tracking-widest mb-2">Address Search</p>
              <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-3">
                <FiSearch className="w-4 h-4 text-gray-400 shrink-0" />
                <input
                  type="text"
                  placeholder="Enter an Address, City, Zip or MLS Number"
                  className="flex-1 font-body text-sm text-gray-700 placeholder-gray-400 focus:outline-none bg-transparent"
                />
              </div>
            </div>

            <motion.button
              onClick={() => setContactOpen(true)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="self-start inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-navy font-body font-bold text-sm px-7 py-3.5 rounded-full shadow-lg transition-colors"
            >
              Get Started <FiArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>

          {/* Right — image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative flex items-center justify-center px-8 md:px-12 py-16"
          >
            {/* Glow ring */}
            <div className="absolute inset-8 rounded-3xl bg-gold/5 blur-2xl" />
            <div className="relative w-full">
              {/* Corner accent */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-gold/50 rounded-tl-2xl" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-gold/50 rounded-br-2xl" />
              <img
                src="https://u.realgeeks.media/jackdavisrealty/177709534M.jpg"
                alt="Home Sold"
                loading="lazy"
                className="w-full rounded-3xl object-cover shadow-2xl ring-1 ring-white/10"
                style={{ aspectRatio: '4/3' }}
              />
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />

      {contactOpen && <CashOfferModal onClose={() => setContactOpen(false)} />}
    </motion.div>
  )
}
