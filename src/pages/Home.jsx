import { useState, useEffect, useCallback } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  FiAward, FiStar, FiCheckCircle, FiHome, FiMapPin, FiPhone,
  FiChevronDown, FiChevronUp, FiArrowRight, FiTool, FiUsers,
  FiDollarSign, FiZap, FiAlertCircle, FiTrendingUp,
} from 'react-icons/fi'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import ContactModal from '../components/ContactModal'

const RED = '#AC1E32'
const GOLD = '#AC1E32'

/* ── Seller Situations ─────────────────────────── */
const SITUATIONS = [
  { icon: FiHome,        label: 'Inherited Home' },
  { icon: FiMapPin,      label: 'Vacant Property' },
  { icon: FiTool,        label: 'Needs Repairs' },
  { icon: FiCheckCircle, label: 'Tired Landlord' },
  { icon: FiZap,         label: 'Relocation' },
  { icon: FiAward,       label: 'Divorce' },
  { icon: FiAlertCircle, label: 'Pre-Foreclosure' },
  { icon: FiTrendingUp,  label: 'Downsizing' },
  { icon: FiUsers,       label: 'Tenant Issues' },
  { icon: FiAlertCircle, label: 'Code Violations' },
]

/* ── Differentiators ───────────────────────────── */
const DIFF_ITEMS = [
  {
    icon: FiDollarSign,
    title: 'Fast Cash Offer',
    body: 'Receive a competitive cash offer within 24 hours. No agent commissions, no repairs, close in as little as 14 days.',
  },
  {
    icon: FiAward,
    title: 'Traditional Listing',
    body: 'Want top dollar? Our licensed agents will list your home and market it to thousands of active buyers in the Atlanta area.',
  },
  {
    icon: FiTool,
    title: 'Renovate Before Selling',
    body: 'Our in-house renovation expertise means we can help you maximize value before listing — with no out-of-pocket costs.',
  },
  {
    icon: FiUsers,
    title: 'Investor Buyer Strategy',
    body: 'Access our network of vetted investors ready to buy off-market, as-is, on your timeline with no contingencies.',
  },
]

/* ── Process Steps ─────────────────────────────── */
const PROCESS_STEPS = [
  { num: '01', title: 'Tell Us About the Property', body: 'Answer a few quick questions about your home — condition, timeline, goals. Takes less than 2 minutes.' },
  { num: '02', title: 'Receive Your Offer or Recommendations', body: 'We present you with a fast cash offer and/or a personalized selling strategy based on your unique situation.' },
  { num: '03', title: 'Choose the Best Selling Option', body: 'You decide — cash offer, traditional listing, or renovation-first. No pressure, no obligation, ever.' },
  { num: '04', title: 'Close on Your Timeline', body: 'Whether it\'s 14 days or 6 months, we close when you\'re ready. You stay in control the entire way.' },
]

/* ── Reviews ───────────────────────────────────── */
const REVIEWS = [
  {
    name: "The Murray's",
    role: 'Home Seller',
    quote: "From our first conversation, I felt Mr. Tomond Jack was very knowledgeable, understanding to my desire to sell my home. Mr. Jack has been outstanding in helping me and I just cannot thank him enough. He was more than a Realtor — he assisted me in other areas of the sale of my property. I will gladly use Mr. Jack again.",
  },
  {
    name: 'C. Coleman',
    role: 'Home Seller',
    quote: "Tomond Jack went above and beyond helping me through the selling process of my late father's home. His communication through each step was clear and helpful. I never felt rushed or like a random customer — he took time to explain details for my understanding. I would recommend Tomond as an agent to anyone.",
  },
  {
    name: 'J. Robertson',
    role: 'Home Seller',
    quote: "Tomond was very efficient and thorough through this experience. He went to extensive measures to make sure that every concern I had was properly handled. He went over and above what was expected to make sure I got the result I wanted. Timely, available, and knowledgeable.",
  },
]

/* ── FAQ Items ─────────────────────────────────── */
const FAQ_ITEMS = [
  {
    q: 'What types of properties can you help me sell?',
    a: 'We work with single-family homes, condos, townhomes, multi-family properties, and vacant land anywhere in the Metro Atlanta area — regardless of condition.',
  },
  {
    q: 'How quickly can you close?',
    a: 'We can close in as little as 14 days on a cash offer, or work with your timeline if you need more time. You set the closing date.',
  },
  {
    q: 'Do I have to make repairs before selling?',
    a: 'Absolutely not. Our cash buyer network purchases homes as-is. No cleaning, repairs, staging, or showings required.',
  },
  {
    q: 'Is your cash offer competitive with the open market?',
    a: 'Our cash offers are competitive and factor in your home\'s current condition. We\'ll also show you what a traditional listing could net so you can compare and choose confidently.',
  },
  {
    q: 'What makes Jack Davis Realty different from a wholesaler?',
    a: 'We are a licensed Georgia brokerage, not a wholesaler. We combine investor experience with brokerage expertise, giving you more options and more transparency than a typical cash buyer.',
  },
  {
    q: 'Is there any obligation after I request an offer?',
    a: 'None whatsoever. Getting an offer is completely free with zero pressure to accept. We want you to make the best decision for your situation.',
  },
]

/* ── Metro Areas ───────────────────────────────── */
const COUNTIES = ['DeKalb', 'Fulton', 'Cobb', 'Gwinnett', 'Clayton', 'Douglas', 'Rockdale', 'Henry', 'Newton']
const CITIES = [
  'Atlanta', 'Decatur', 'Stone Mountain', 'Tucker', 'Conyers',
  'Lilburn', 'Snellville', 'Mableton', 'Smyrna', 'Marietta',
  'Chamblee', 'Doraville', 'College Park', 'East Point',
]

/* ── Reviews Carousel ──────────────────────────── */
function ReviewsCarousel() {
  const [active, setActive] = useState(0)
  const next = useCallback(() => setActive(i => (i + 1) % REVIEWS.length), [])

  useEffect(() => {
    const t = setTimeout(next, 5000)
    return () => clearTimeout(t)
  }, [active, next])

  const r = REVIEWS[active]

  return (
    <section className="relative overflow-hidden py-20 px-4">
      <div className="absolute inset-0">
        <img src="/pexels-ibidsy-5524164.jpg" alt="" aria-hidden="true" className="w-full h-full object-cover" style={{ filter: 'blur(6px)', transform: 'scale(1.06)' }} />
        <div className="absolute inset-0" style={{ background: 'rgba(12,4,6,0.82)' }} />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <p className="font-body text-[11px] uppercase tracking-[0.35em] text-white/50 mb-8">What Our Clients Say</p>

        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.5 }}>
            <div className="flex justify-center gap-1 mb-5">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} className="w-4 h-4" style={{ fill: '#ffffff', color: '#ffffff' }} />
              ))}
            </div>
            <div className="font-heading leading-none mb-1 select-none" style={{ fontSize: '5rem', color: RED, opacity: 0.45, lineHeight: 1 }}>&ldquo;</div>
            <p className="font-heading text-xl md:text-2xl text-white/90 leading-relaxed italic mb-8">{r.quote}</p>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-10 bg-white/30 shrink-0" />
              <div>
                <p className="font-body text-sm font-semibold text-white tracking-wide">{r.name}</p>
                <p className="font-body text-xs text-white/40 mt-0.5">{r.role}</p>
              </div>
              <div className="h-px w-10 bg-white/30 shrink-0" />
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-2 mt-10">
          {REVIEWS.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} className="rounded-full transition-all duration-300"
              style={{ width: i === active ? '24px' : '6px', height: '6px', background: i === active ? 'white' : 'rgba(255,255,255,0.2)' }} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── FAQ Item ──────────────────────────────────── */
function FaqItem({ q, a, open, onToggle }) {
  return (
    <div className="border-b border-gray-100">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
      >
        <span className="font-heading text-lg text-gray-800 group-hover:text-[#AC1E32] transition-colors">{q}</span>
        {open ? <FiChevronUp className="w-5 h-5 text-[#AC1E32] shrink-0" /> : <FiChevronDown className="w-5 h-5 text-gray-400 shrink-0 group-hover:text-[#AC1E32] transition-colors" />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }} className="overflow-hidden">
            <p className="font-body text-gray-500 text-sm leading-relaxed pb-5">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ── Main Component ────────────────────────────── */
export default function Home() {
  const [contactOpen, setContactOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)
  const [address, setAddress] = useState('')

  const handleOfferSubmit = (e) => {
    e.preventDefault()
    window.location.href = `/cash-offer${address ? `?address=${encodeURIComponent(address)}` : ''}`
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <Helmet>
        <title>Sell Your House Fast in Metro Atlanta | Jack Davis Realty</title>
        <meta name="description" content="Sell your home fast in Metro Atlanta. Get a competitive cash offer or explore the best strategy to maximize your home's value. No repairs. No pressure. No obligation." />
        <meta name="keywords" content="sell my house fast Atlanta, cash offer homes Atlanta, sell house as-is Metro Atlanta, cash home buyers DeKalb County" />
      </Helmet>

      <Navbar />
      <Hero />

      {/* ─── 1. Why Work With Jack Davis ────────── */}
      <section className="bg-white py-14 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="font-heading text-3xl md:text-4xl font-semibold text-gray-900 text-center mb-10 md:mb-14"
          >
            Why Work With{' '}
            <span style={{ color: RED }}>Jack Davis?</span>
          </motion.h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                icon: 'https://www.markspain.com/_next/image?url=https%3A%2F%2Fmarkspain-strapi-media-production.s3.us-east-2.amazonaws.com%2Freal_estate_icon_58b5f20ae1.png&w=128&q=75',
                stat: '#1',
                label: 'GA Seller Solutions Brokerage',
              },
              {
                icon: 'https://markspain-strapi-media-production.s3.us-east-2.amazonaws.com/lifetime_icon_f9b3546fe9.svg',
                stat: '6,000+',
                label: 'Successful Transactions',
              },
              {
                icon: 'https://www.markspain.com/_next/image?url=https%3A%2F%2Fmarkspain-strapi-media-production.s3.us-east-2.amazonaws.com%2Fover_icon_628f2ea41e.png&w=96&q=75',
                stat: '14 Days',
                label: 'Fastest Close Available',
              },
              {
                icon: 'https://www.markspain.com/_next/image?url=https%3A%2F%2Fmarkspain-strapi-media-production.s3.us-east-2.amazonaws.com%2Fhome_icon_4b2d2ba3e7.png&w=96&q=75',
                stat: '5★',
                label: 'Rated by Local Homeowners',
              },
            ].map((item, i) => (
              <motion.div
                key={item.stat}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-6 md:p-8 rounded-2xl"
                style={{ background: '#F5F5F5' }}
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-14 h-14 md:w-16 md:h-16 object-contain mb-4"
                />
                <p className="font-heading text-xl md:text-2xl font-bold mb-1" style={{ color: RED }}>{item.stat}</p>
                <p className="font-body text-sm text-gray-500 leading-snug">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 2. Seller Problem Section ──────────── */}
      <section className="bg-white py-16 md:py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: GOLD }}>We Understand Your Situation</p>
            <h2 className="font-heading text-3xl md:text-5xl font-semibold text-gray-900 leading-tight mb-5">
              We Help Homeowners Sell<br />in Difficult Situations
            </h2>
            <p className="font-body text-gray-500 text-base md:text-lg max-w-2xl mx-auto mb-12">
              Life happens. Whether you're dealing with an inherited property, a challenging tenant, or just need to move fast — Jack Davis Realty has a solution for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {SITUATIONS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex flex-col items-center gap-3 p-5 rounded-2xl border border-gray-100 hover:border-[#AC1E32]/25 hover:shadow-md transition-all duration-200 group bg-gray-50/60"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200" style={{ background: '#AC1E32' }}>
                  <s.icon className="w-5 h-5 text-white" />
                </div>
                <p className="font-body text-xs font-semibold text-gray-700 text-center leading-snug">{s.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.3 }} className="mt-12">
            <Link to="/cash-offer" className="inline-flex items-center gap-2 bg-[#AC1E32] hover:bg-[#8B1828] text-white font-body font-bold px-10 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5">
              Get My Fast Cash Offer
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── 3. Differentiator Section ──────────── */}
      <section className="bg-[#F2F2F2] py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="text-center mb-12 md:mb-16">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: GOLD }}>The Jack Davis Difference</p>
            <h2 className="font-heading text-3xl md:text-5xl font-semibold text-gray-900 leading-tight mb-5">
              More Than a Typical Cash Buyer
            </h2>
            <p className="font-body text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
              Unlike national cash buyers or wholesalers, Jack Davis Realty combines local brokerage expertise, investor experience, and renovation knowledge — so you always get the best option for your situation.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DIFF_ITEMS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 shrink-0" style={{ background: '#AC1E32' }}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="font-body text-sm text-gray-500 leading-relaxed flex-1">{item.body}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.2 }} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/cash-offer" className="inline-flex items-center gap-2 bg-[#AC1E32] hover:bg-[#8B1828] text-white font-body font-bold px-10 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5">
              Get My Fast Cash Offer <FiArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/selling" className="inline-flex items-center gap-2 border-2 border-gray-300 text-gray-700 hover:border-[#AC1E32] hover:text-[#AC1E32] font-body font-semibold px-10 py-4 rounded-full transition-all duration-200">
              Explore Selling Options
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── 4. How It Works ────────────────────── */}
      <section className="bg-white py-16 md:py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="text-center mb-12 md:mb-16">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: GOLD }}>Our Process</p>
            <h2 className="font-heading text-3xl md:text-5xl font-semibold text-gray-900 leading-tight">
              Simple. Fast. Flexible.
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center group"
              >
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(50%+44px)] right-[-50%] h-px bg-gray-200" />
                )}
                <div className="relative w-20 h-20 rounded-2xl flex items-center justify-center mb-5 shadow-md group-hover:scale-105 transition-transform duration-200" style={{ background: RED }}>
                  <span className="font-heading text-2xl font-bold text-white">{step.num}</span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-gray-900 mb-3 leading-snug">{step.title}</h3>
                <p className="font-body text-sm text-gray-500 leading-relaxed">{step.body}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.3 }} className="mt-14 text-center">
            <Link to="/cash-offer" className="inline-flex items-center gap-2 bg-[#AC1E32] hover:bg-[#8B1828] text-white font-body font-bold px-10 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5">
              Get My Fast Cash Offer <FiArrowRight className="w-4 h-4" />
            </Link>
            <p className="font-body text-gray-400 text-sm mt-3">Free. No pressure. No obligation. Licensed Georgia Brokerage.</p>
          </motion.div>
        </div>
      </section>

      {/* ─── 5. Lead Capture CTA ────────────────── */}
      <section className="relative overflow-hidden py-16 md:py-20 px-4" style={{ background: RED }}>
        <div className="absolute inset-0 opacity-10">
          <img src="/pexels-cara-denison-886614634-37419422.jpg" alt="" aria-hidden="true" className="w-full h-full object-cover" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative max-w-2xl mx-auto text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-4 leading-tight">
            Get Your Fast Cash Offer Today
          </h2>
          <p className="font-body text-white/80 text-base mb-8">
            No obligations, just offers. Enter your property address to get started.
          </p>
          <form onSubmit={handleOfferSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input
              type="text"
              value={address}
              onChange={e => setAddress(e.target.value)}
              placeholder="Enter your property address…"
              className="flex-1 bg-white rounded-full px-6 py-4 font-body text-sm text-gray-800 placeholder:text-gray-400 outline-none border-2 border-transparent focus:border-[#AC1E32] transition-all"
            />
            <button
              type="submit"
              className="bg-[#1F0A0E] hover:bg-black text-white font-body font-bold text-sm px-8 py-4 rounded-full transition-all duration-200 whitespace-nowrap shadow-lg"
            >
              Get My Offer
            </button>
          </form>
          <p className="font-body text-white/50 text-xs mt-4">Free. No pressure. No obligation. Licensed Georgia Brokerage.</p>
        </motion.div>
      </section>

      {/* ─── 6. Testimonials ────────────────────── */}
      <ReviewsCarousel />

      {/* ─── 7. Metro Atlanta Service Areas ─────── */}
      <section className="bg-white py-16 md:py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: GOLD }}>Our Coverage</p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              We Serve Metro Atlanta &amp; Surrounding Counties
            </h2>
            <p className="font-body text-gray-500 text-base mb-10 max-w-xl mx-auto">
              If your property is in any of these counties or cities, we can help you sell fast.
            </p>
          </motion.div>

          <div className="mb-8">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-4">Counties</p>
            <div className="flex flex-wrap justify-center gap-2">
              {COUNTIES.map(c => (
                <Link
                  key={c}
                  to={`/search?location=${encodeURIComponent(c + ' County GA')}`}
                  className="font-body text-sm font-medium px-4 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-[#AC1E32] hover:text-[#AC1E32] transition-all duration-150"
                >
                  {c} County
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-body text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-4">Cities</p>
            <div className="flex flex-wrap justify-center gap-2">
              {CITIES.map(c => (
                <Link
                  key={c}
                  to={`/search?location=${encodeURIComponent(c + ' GA')}`}
                  className="font-body text-sm font-medium px-4 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-[#AC1E32] hover:text-[#AC1E32] transition-all duration-150"
                >
                  {c}
                </Link>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.2 }} className="mt-12">
            <Link to="/cash-offer" className="inline-flex items-center gap-2 bg-[#AC1E32] hover:bg-[#8B1828] text-white font-body font-bold px-10 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-lg">
              Get My Cash Offer
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── 8. FAQ Section ─────────────────────── */}
      <section className="bg-[#F2F2F2] py-16 md:py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="text-center mb-10">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: GOLD }}>Have Questions?</p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-gray-900">Frequently Asked Questions</h2>
          </motion.div>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            {FAQ_ITEMS.map((item, i) => (
              <FaqItem
                key={i}
                q={item.q}
                a={item.a}
                open={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>

          <p className="font-body text-center text-gray-400 text-sm mt-8">
            Still have questions?{' '}
            <button onClick={() => setContactOpen(true)} className="text-[#AC1E32] font-semibold hover:underline">
              Contact us directly
            </button>
            .
          </p>
        </div>
      </section>

      {/* ─── 9. Final CTA Banner ────────────────── */}
      <section className="relative overflow-hidden py-16 md:py-24 px-4">
        <div className="absolute inset-0">
          <img src="/pexels-cara-denison-886614634-37419422.jpg" alt="" aria-hidden="true" className="w-full h-full object-cover" style={{ filter: 'blur(4px)' }} />
          <div className="absolute inset-0" style={{ background: 'rgba(20,6,9,0.88)' }} />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative max-w-3xl mx-auto text-center"
        >
          <p className="font-body text-[11px] uppercase tracking-[0.3em] text-white/50 mb-4">Sell Fast. Sell As-Is. Sell With Confidence.</p>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-white mb-5 leading-tight">
            Ready to Explore<br />
            <span className="italic">Your Selling Options?</span>
          </h2>
          <p className="font-body text-white/65 text-sm md:text-base mb-10 max-w-md mx-auto">
            We help Metro Atlanta homeowners sell quickly and easily — whether that's a cash offer, a traditional listing, or something in between.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/cash-offer" className="bg-white text-[#AC1E32] font-body font-bold px-10 py-4 rounded-full hover:bg-gray-100 transition-all duration-200 shadow-lg">
              Get My Fast Cash Offer
            </Link>
            <Link to="/selling" className="border-2 border-white/40 text-white font-body font-semibold px-10 py-4 rounded-full hover:border-white hover:bg-white/10 transition-all duration-200">
              Explore Selling Options
            </Link>
          </div>
          <a href="tel:6789222532" className="flex items-center justify-center gap-2 mt-8 font-body text-sm text-white/40 hover:text-white/70 transition-colors">
            <FiPhone className="w-3.5 h-3.5" />
            678-922-2532
          </a>
        </motion.div>
      </section>

      <Footer />

      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
    </motion.div>
  )
}
