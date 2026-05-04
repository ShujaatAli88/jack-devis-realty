import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiTrendingUp, FiDollarSign, FiCheckCircle, FiClock } from 'react-icons/fi'
import Navbar from '../components/Navbar'
import PageHero from '../components/PageHero'
import Footer from '../components/Footer'

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
          <Link to="/contact" className="btn-gold">
            Get a Free Home Valuation
          </Link>
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
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="border border-gray-200 rounded-xl p-6 mb-8 max-w-md">
              <h3 className="font-heading text-lg font-semibold text-navy mb-3">Address Search</h3>
              <input
                type="text"
                placeholder="Enter an Address, City, Zip or MLS Number"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 font-body text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
              />
            </div>

            <h2 className="font-heading text-3xl font-semibold text-navy mb-4">
              Fast Cash Offer
            </h2>
            <p className="font-body text-gray-500 leading-relaxed mb-8">
              Receive a fast Cash Offer and sell your home in as little as 14 days. We work with
              cash buyers who are ready to purchase your home today.
            </p>
            <Link to="/cash-offer-form" className="btn-gold">
              Get Started
            </Link>
          </div>
          <div>
            <img
              src="https://u.realgeeks.media/jackdavisrealty/177709534M.jpg"
              alt="Home Sold"
              loading="lazy"
              className="w-full rounded-3xl object-cover shadow-2xl"
              style={{ aspectRatio: '4/3' }}
            />
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  )
}
