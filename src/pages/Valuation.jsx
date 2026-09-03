import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import Navbar from '../components/Navbar'

const insights = [
  {
    img: 'https://s-static.cinccdn.com/img/consumer/seller/he_valuation.svg',
    title: 'An Accurate Home Estimate',
    description:
      'Receive our personalized report that estimates your home worth based on market data and trends.',
  },
  {
    img: 'https://s-static.cinccdn.com/img/consumer/seller/he_recently.svg',
    title: 'Recently Sold Listings',
    description:
      "See what's recently sold in your neighborhood that's similar to your own home.",
  },
  {
    img: 'https://s-static.cinccdn.com/img/consumer/seller/he_neighborhood.svg',
    title: 'Neighborhood Pulse Update',
    description:
      'Stay on top of trends in your neighborhood with automatic monthly updates.',
  },
]

export default function Valuation() {
  const [address, setAddress] = useState('')
  const [unit, setUnit] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    // MLS_READY: wire to valuation API
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Helmet>
        <title>What's Your Home Worth? | Jack Davis Realty</title>
        <meta
          name="description"
          content="Find out what your Atlanta Metro home is worth today. Get a free, no-obligation home valuation from Jack Davis Realty."
        />
      </Helmet>

      <Navbar />

      {/* Hero with address search */}
      <section
        className="relative min-h-[420px] flex flex-col justify-center px-4 pt-28 pb-24"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1600&auto=format&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            What's Your Home Worth?
          </h1>
          <p className="font-body text-white/90 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Thinking of selling or interested in learning about a neighbor's house?
            We can help you see what it's worth.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-stretch gap-0 max-w-3xl mx-auto shadow-2xl rounded overflow-hidden"
          >
            {/* Address */}
            <div className="flex items-center flex-1 bg-white px-4 gap-2 min-w-0">
              <FiSearch className="w-4 h-4 text-gray-400 shrink-0" />
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter Your Home Address"
                required
                className="flex-1 py-4 font-body text-sm text-gray-800 placeholder-gray-400 focus:outline-none bg-transparent"
              />
            </div>

            {/* Unit divider */}
            <div className="w-px bg-gray-200 hidden sm:block" />

            {/* Unit */}
            <input
              type="text"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              placeholder="Unit # (opt.)"
              className="bg-white px-4 py-4 font-body text-sm text-gray-800 placeholder-gray-400 focus:outline-none w-36 shrink-0 border-t sm:border-t-0 border-gray-200"
            />

            {/* Submit */}
            <button
              type="submit"
              className="bg-[#8D2222] hover:bg-[#6E1A1A] transition-colors text-white font-body font-semibold text-sm px-8 py-4 shrink-0"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Stay in the know */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Stay in the know.
          </h2>
          <p className="font-body text-gray-700 font-semibold text-lg mb-14">
            Gain insights in just 30 seconds.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {insights.map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-24 h-24 object-contain mb-5"
                />
                <h3 className="font-body text-base font-bold text-gray-900 mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </motion.div>
  )
}
