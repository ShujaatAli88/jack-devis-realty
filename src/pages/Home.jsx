import { useState, useEffect, useCallback } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiSearch, FiHome, FiCheckCircle, FiAward, FiStar } from 'react-icons/fi'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Listings from '../components/Listings'
import Footer from '../components/Footer'
import ContactModal from '../components/ContactModal'

/* ── Data ─────────────────────────────────────── */
const services = [
  {
    label: 'Home Evaluation',
    title: 'Home Evaluation',
    description: "Find out what your home can really sell for in today's market with a fast & free property valuation.",
    image: '/pexels-curtis-adams-1694007-7027849.jpg',
    href: '/valuation',
  },
  {
    label: 'Sellers',
    title: 'Sell Your Home',
    description: 'Thinking of selling? Who you work with matters. Find out how Jack Davis Realty will get your home SOLD.',
    image: '/pexels-ibidsy-5524164.jpg',
    href: '/selling',
  },
  {
    label: 'Cash Offer',
    title: 'Fast Cash Offer',
    description: 'Receive a Fast Cash Offer and sell your home in as little as 14 days. Cash buyers are ready today.',
    image: '/pexels-cara-denison-886614634-37419422.jpg',
    href: '/cash-offer',
  },
]

const WHY_ITEMS = [
  { icon: '🏆', title: 'Market-Leading Results', body: 'Our listings sell faster and for more money than the Atlanta Metro average — backed by data.' },
  { icon: '🤝', title: 'End-to-End Support', body: 'From first search to closing day, our team is by your side at every step of the journey.' },
  { icon: '📊', title: 'Investment Expertise', body: "Whether it's your first home or your fifth investment property, we know Atlanta's best opportunities." },
]

const PROCESS_STEPS = [
  { num: '01', icon: <FiSearch className="w-6 h-6" />, title: 'Free Consultation', body: 'Tell us your goals — buying, selling, or investing. We listen and build a tailored plan.' },
  { num: '02', icon: <FiHome className="w-6 h-6" />, title: 'Search or List', body: 'We find your perfect match or professionally market your property to thousands of buyers.' },
  { num: '03', icon: <FiAward className="w-6 h-6" />, title: 'Expert Negotiation', body: 'Our team handles every offer, counter, and contingency to protect your interests.' },
  { num: '04', icon: <FiCheckCircle className="w-6 h-6" />, title: 'Close & Celebrate', body: 'We guide you seamlessly to closing day — keys in hand, stress-free.' },
]

const REVIEWS = [
  {
    name: "The Murray's",
    role: 'Home Seller',
    quote: "From our first conversation, I felt Mr. Tomond Jack was very knowledgeable, understanding to my desire to sell my home. Mr. Jack has been outstanding in helping me and I just cannot thank him enough. If anyone use his talents they will not be dissatisfied. With me he was more than a Realtor — he assisted me in other areas of the sale of my property. I will gladly use Mr. Jack again.",
  },
  {
    name: 'C. Coleman',
    role: 'Home Buyer',
    quote: "I want to give kudos to Tomond Jack. He and I recently worked together on the sale of my late father's home, and he went above and beyond helping me through the selling process. His communication through each step was clear and helpful. I never felt rushed or like a random customer — he took time to explain details for my understanding. I would recommend Tomond as an agent to anyone; I don't think I could have worked with someone more wonderful!",
  },
  {
    name: 'J. Robertson',
    role: 'Home Buyer',
    quote: "Tomond was very efficient and thorough through this experience. He went to extensive measures to make sure that every concern I had was properly handled. He went over and above what was expected of him to make sure that I got the home that I wanted. He's been timely, available, and knowledgeable. I was truly blessed by him and I will forever be grateful for his dedication and commitment to remain professional and above average.",
  },
]

/* ── Reviews Carousel ──────────────────────────── */
function ReviewsCarousel() {
  const [active, setActive] = useState(0)

  const next = useCallback(() => setActive(i => (i + 1) % REVIEWS.length), [])

  useEffect(() => {
    const t = setTimeout(next, 4000)
    return () => clearTimeout(t)
  }, [active, next])

  const r = REVIEWS[active]

  return (
    <section className="relative overflow-hidden py-20 px-4">
      {/* Blurred background */}
      <div className="absolute inset-0">
        <img
          src="/pexels-ibidsy-5524164.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          style={{ filter: 'blur(8px)', transform: 'scale(1.06)' }}
        />
        <div className="absolute inset-0" style={{ background: 'rgba(12,4,6,0.80)' }} />
      </div>

      <div className="relative max-w-2xl mx-auto text-center">

        {/* Label */}
        <p className="font-body text-[11px] uppercase tracking-[0.4em] text-gold/70 mb-10">What Our Clients Say</p>

        {/* Animated content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.55, ease: 'easeInOut' }}
          >
            {/* Stars */}
            <div className="flex justify-center gap-1.5 mb-6">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} className="w-4 h-4" style={{ fill: '#C8A96E', color: '#C8A96E' }} />
              ))}
            </div>

            {/* Decorative open-quote */}
            <div
              className="font-heading leading-none mb-1 select-none"
              style={{ fontSize: '5rem', color: '#AC1E32', opacity: 0.5, lineHeight: 1 }}
            >
              &ldquo;
            </div>

            {/* Quote */}
            <p className="font-heading text-lg md:text-xl text-white/90 leading-relaxed italic mb-8">
              {r.quote}
            </p>

            {/* Author */}
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-10 bg-gold/40 shrink-0" />
              <div className="text-center">
                <p className="font-body text-sm font-semibold text-gold tracking-wide">{r.name}</p>
                <p className="font-body text-xs text-white/40 mt-0.5">{r.role}</p>
              </div>
              <div className="h-px w-10 bg-gold/40 shrink-0" />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-10">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="rounded-full transition-all duration-400"
              style={{
                width: i === active ? '22px' : '6px',
                height: '6px',
                background: i === active ? '#C8A96E' : 'rgba(255,255,255,0.2)',
              }}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

/* ── Component ─────────────────────────────────── */
export default function Home() {
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Helmet>
        <title>Jack Davis Realty | Atlanta Metro Real Estate</title>
        <meta name="description" content="Jack Davis Realty — your Atlanta residential and investment specialist. Search Atlanta Metro homes, condos, townhomes, and investment properties." />
      </Helmet>

      <Navbar />
      <Hero />

      {/* ── Stats bar ── */}
      <div className="bg-navy py-6 md:py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          <div className="text-center md:text-left">
            <p className="font-heading text-xl md:text-3xl font-semibold text-white leading-tight">Jack Davis Realty</p>
            <p className="font-body text-xs md:text-sm text-gold/80 tracking-widest uppercase mt-1">Your Atlanta Residential &amp; Investment Specialist</p>
          </div>
          <div className="flex gap-6 md:gap-10">
            {[['6,000+', 'Deals Closed'], ['20+', 'Years Exp.'], ['5★', 'Rated']].map(([num, lbl]) => (
              <div key={lbl} className="text-center">
                <p className="font-heading text-xl md:text-2xl font-bold text-gold">{num}</p>
                <p className="font-body text-[10px] text-white/50 uppercase tracking-widest mt-1">{lbl}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Why Jack Davis ── */}
      <section className="relative overflow-hidden bg-ivory py-14 md:py-24 px-4">
        <div className="absolute inset-0 pointer-events-none">
          <img src="/pexels-cara-denison-886614634-37419422.jpg" alt="" aria-hidden="true" className="w-full h-full object-cover opacity-[0.05]" />
        </div>
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="section-label mb-4">Why Jack Davis Realty</p>
            <h2 className="section-heading mb-6">Atlanta's Most Trusted<br />Real Estate Partner</h2>
            <p className="font-body text-gray-500 text-base leading-relaxed mb-10 max-w-md">
              With over two decades in the Atlanta Metro market and 6,000+ successful closings, Jack Davis Realty delivers results that speak for themselves.
            </p>
            <div className="space-y-5 mb-10">
              {WHY_ITEMS.map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="flex gap-4 items-start">
                  <span className="text-2xl mt-0.5 flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="font-heading text-lg font-semibold text-navy mb-1">{item.title}</p>
                    <p className="font-body text-sm text-gray-500 leading-relaxed">{item.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <Link to="/about" className="btn-gold">Meet the Team</Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.15 }} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              <img src="/pexels-curtis-adams-1694007-7027849.jpg" alt="Luxury Atlanta home" loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl">
                <p className="font-body text-[10px] uppercase tracking-widest text-gray-400 mb-1">Latest Achievement</p>
                <p className="font-heading text-xl font-semibold text-navy leading-tight">
                  #1 Real Estate Team<br /><span className="text-gold">Atlanta Metro 2024</span>
                </p>
              </div>
            </div>
            <div className="hidden lg:block absolute -bottom-6 -right-6 w-40 h-40 rounded-full border-2 border-navy/20 -z-10" />
            <div className="hidden lg:block absolute -top-6 -left-6 w-24 h-24 rounded-full bg-navy/10 -z-10" />
          </motion.div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="bg-white py-14 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <p className="section-label mb-3">Simple Process</p>
            <h2 className="section-heading">How It Works</h2>
            <p className="font-body text-gray-500 mt-4 max-w-lg mx-auto">From your first call to closing day — we make buying or selling straightforward and stress-free.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div key={step.num} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.1 }} className="relative flex flex-col items-center text-center group">
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] right-0 h-px bg-navy/20" />
                )}
                <div className="relative w-20 h-20 rounded-2xl bg-navy flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-105 transition-transform duration-200">
                  {step.icon}
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gold text-navy font-body text-[10px] font-bold flex items-center justify-center">{step.num}</span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-navy mb-3">{step.title}</h3>
                <p className="font-body text-gray-500 text-sm leading-relaxed">{step.body}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button onClick={() => setContactOpen(true)} className="btn-gold px-10 py-4 text-base">Get Started Today</button>
          </div>
        </div>
      </section>

      {/* ── Service Cards ── */}
      <section className="bg-ivory py-14 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <p className="section-label mb-3">Our Services</p>
            <h2 className="section-heading">What We Can Do For You</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {services.map((svc, i) => (
              <motion.div key={svc.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }} className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col border border-gray-100">
                <div className="relative overflow-hidden h-44 sm:h-52">
                  <img src={svc.image} alt={svc.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                  <span className="absolute top-4 left-4 bg-navy text-white font-body text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full">{svc.label}</span>
                </div>
                <div className="p-5 md:p-7 flex flex-col flex-1">
                  <h3 className="font-heading text-xl md:text-2xl font-semibold text-navy mb-2 md:mb-3">{svc.title}</h3>
                  <p className="font-body text-gray-500 leading-relaxed text-sm flex-1 mb-5 md:mb-6">{svc.description}</p>
                  <Link to={svc.href} className="btn-outline-navy w-full text-center block">Learn More</Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What Clients Are Saying — Carousel ── */}
      <ReviewsCarousel />

      {/* ── Listings ── */}
      <Listings />

      {/* ── CTA Banner ── */}
      <section className="relative overflow-hidden py-16 md:py-24 px-4">
        <div className="absolute inset-0">
          <img src="/pexels-cara-denison-886614634-37419422.jpg" alt="" aria-hidden="true" className="w-full h-full object-cover" style={{ filter: 'blur(4px)' }} />
          <div className="absolute inset-0 bg-navy/88" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative max-w-3xl mx-auto text-center"
        >
          <p className="section-label mb-3 md:mb-4">Ready to Move?</p>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-white mb-4 md:mb-6 leading-tight">
            Let's Find Your Perfect<br />
            <span className="text-gold italic">Atlanta Home Today</span>
          </h2>
          <p className="font-body text-white/65 text-sm md:text-base mb-8 md:mb-10 max-w-md mx-auto">
            Whether you're buying, selling, or investing — Jack Davis Realty has the experience and connections to make it happen.
          </p>
          <div className="flex gap-3 md:gap-4 justify-center flex-wrap">
            <button onClick={() => setContactOpen(true)} className="btn-gold text-sm md:text-base px-7 md:px-10 py-3.5 md:py-4">
              Contact Us
            </button>
            <Link to="/search" className="border-2 border-white/50 text-white font-body font-semibold text-sm md:text-base px-7 md:px-10 py-3.5 md:py-4 rounded-full hover:border-white hover:bg-white/10 transition-all duration-200">
              Browse Listings
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />

      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
    </motion.div>
  )
}
