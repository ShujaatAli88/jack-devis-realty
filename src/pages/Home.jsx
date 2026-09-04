import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MdHome, MdBuild, MdWarning, MdGavel, MdPeople,
  MdFlightTakeoff, MdLocationOn, MdApartment,
  MdVerifiedUser, MdCheckCircle, MdEvent,
  MdTrendingUp, MdAttachMoney, MdArrowForward,
  MdPhone, MdLock, MdSell, MdHomeWork,
  MdChevronLeft, MdChevronRight, MdFormatQuote,
} from 'react-icons/md'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const RED   = '#8D2222'
const NAVY  = '#1A1A1A'
const GOLD  = '#796063'
const GOLD_LIGHT = '#D9BFC2'
const CREAM = '#F7F3EE'
const GRAY1 = '#EFEDEA'
const DARK  = '#1A1A1A'

const AGENT_IMG   = '/jack_devis.jpg'
const SKYLINE_IMG = 'https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?w=1600&auto=format&fit=crop&q=80'

const SITUATIONS = [
  { Icon: MdHome,          label: 'Inherited Property',       slug: 'inherited-property'   },
  { Icon: MdBuild,         label: 'Repairs Needed',           slug: 'repairs-needed'       },
  { Icon: MdWarning,       label: 'Behind on Payments',       slug: 'behind-on-payments'   },
  { Icon: MdGavel,         label: 'Probate or Estate',        slug: 'probate-or-estate'    },
  { Icon: MdPeople,        label: 'Divorce or Separation',    slug: 'divorce'              },
  { Icon: MdLocationOn,    label: 'Downsizing or Retirement', slug: 'downsizing'           },
  { Icon: MdFlightTakeoff, label: 'Relocation',               slug: 'relocation'           },
  { Icon: MdApartment,     label: 'Landlords & Investors',    slug: 'landlords'            },
]

const TRUST_ITEMS = [
  { Icon: MdBuild,       label: 'Investor & Renovation Experience', sub: '100+ homes renovated'  },
  { Icon: MdVerifiedUser,label: 'Licensed Georgia Broker',          sub: 'Years of experience'    },
  { Icon: MdHomeWork,    label: 'Multiple Selling Options',         sub: 'Cash or traditional'    },
  { Icon: MdCheckCircle, label: 'No Repairs Required',              sub: 'Sell as-is'             },
  { Icon: MdEvent,       label: 'Flexible Closing Dates',           sub: 'On your timeline'       },
]

const TESTIMONIALS = [
  {
    quote: "I needed to sell my parents' house fast after they passed. Jack Davis Realty made the process so easy. No repairs, no hassle. They really do everything they say.",
    name: 'Angela H.',
    city: 'Decatur, GA',
  },
  {
    quote: "We had tenants who stopped paying rent. Jack helped us get a fair cash offer, and we closed in 2 weeks! Highly recommended.",
    name: 'Marcus T.',
    city: 'Atlanta, GA',
  },
  {
    quote: "They gave us clear options and explained everything. It felt good to have a team we could trust.",
    name: 'Stephanie L.',
    city: 'Smyrna, GA',
  },
]

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: (i || 0) * 0.09, ease: 'easeOut' },
  }),
}

const CashBtn = ({ className = '', children }) => (
  <Link
    to="/cash-offer"
    className={`group inline-flex items-center justify-center gap-2 text-white font-body font-bold text-sm px-7 py-4 rounded-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 whitespace-nowrap ${className}`}
    style={{
      background: `linear-gradient(135deg, #A83A3A 0%, ${RED} 45%, #6E1A1A 100%)`,
      boxShadow: '0 10px 30px -10px rgba(141,34,34,0.55), 0 2px 6px rgba(0,0,0,0.08)',
    }}
  >
    {children || 'Get My Fast Cash Offer'}
    <MdArrowForward className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
  </Link>
)

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [testimonialDir, setTestimonialDir] = useState(1)

  const goToTestimonial = useCallback((index, dir) => {
    setTestimonialDir(dir)
    setActiveTestimonial((index + TESTIMONIALS.length) % TESTIMONIALS.length)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      goToTestimonial(activeTestimonial + 1, 1)
    }, 3000)
    return () => clearTimeout(timer)
  }, [activeTestimonial, goToTestimonial])

  return (
    <>
      <Helmet>
        <title>Sell Your Home Your Way | Jack Davis Realty – Metro Atlanta</title>
        <meta name="description" content="Fast Cash Offers. Traditional Listings. Real Solutions for Real Life. Jack Davis Realty helps Metro Atlanta homeowners sell on their terms." />
      </Helmet>

      <Navbar />

      {/* ══════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center 40%' }}
          poster="/hero_bg_poster.png"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/hero_bg.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(105deg, rgba(6,2,3,0.96) 0%, rgba(6,2,3,0.88) 40%, rgba(6,2,3,0.55) 70%, rgba(6,2,3,0.30) 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 35%)' }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ boxShadow: 'inset 0 0 180px rgba(0,0,0,0.55)' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-36 w-full">
          <motion.div initial="hidden" animate="visible" className="max-w-xl">

            <motion.p
              variants={fadeUp} custom={0}
              className="font-body font-bold text-sm uppercase tracking-[0.28em] mb-5"
              style={{ color: GOLD_LIGHT, textShadow: '0 2px 12px rgba(0,0,0,0.85)' }}
            >
              Real Solutions. Real Life.
            </motion.p>

            <motion.h1
              variants={fadeUp} custom={1}
              className="font-heading font-bold leading-[1.04] mb-6"
              style={{ fontSize: 'clamp(2.8rem, 5.5vw, 4.8rem)' }}
            >
              <span className="text-white block" style={{ textShadow: '0 4px 28px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,0.7)' }}>Sell Your Home</span>
              <span style={{ color: GOLD_LIGHT, textShadow: '0 4px 28px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,0.7)' }}>Your Way</span>
            </motion.h1>

            <motion.p
              variants={fadeUp} custom={2}
              className="font-body text-white text-lg leading-relaxed mb-8"
              style={{ textShadow: '0 2px 14px rgba(0,0,0,0.85)' }}
            >
              Fast Cash Offers. Traditional Listings. Real Solutions for Real Life.
            </motion.p>

            <motion.div
              variants={fadeUp} custom={3}
              className="flex flex-col sm:flex-row gap-3 mb-7"
            >
              <CashBtn />
              <Link
                to="/selling"
                className="inline-flex items-center justify-center gap-2 border border-white/45 text-white font-body font-semibold text-sm px-7 py-4 rounded-xl hover:bg-white/10 hover:border-white/70 transition-all duration-200 whitespace-nowrap"
              >
                Explore All My Selling Options
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp} custom={4}
              className="flex items-center gap-2 text-white/70 font-body text-xs"
              style={{ textShadow: '0 1px 8px rgba(0,0,0,0.8)' }}
            >
              <MdLock className="w-4 h-4 shrink-0" style={{ color: GOLD_LIGHT }} />
              <span>100% Confidential &nbsp;·&nbsp; No Obligation</span>
            </motion.div>

          </motion.div>
        </div>

        {/* Floating credibility card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7, ease: 'easeOut' }}
          className="hidden lg:flex absolute bottom-14 right-10 xl:right-16 z-10 items-stretch gap-6 rounded-2xl px-7 py-5 border border-white/15"
          style={{ background: 'rgba(20,10,11,0.45)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)' }}
        >
          <div className="text-left">
            <p className="font-heading text-2xl font-bold text-white leading-none">6,000+</p>
            <p className="font-body text-[10px] uppercase tracking-[0.18em] text-white/50 mt-1.5">Homes Sold</p>
          </div>
          <div className="w-px self-stretch" style={{ background: 'rgba(255,255,255,0.15)' }} />
          <div className="text-left">
            <p className="font-heading text-2xl font-bold text-white leading-none">20+</p>
            <p className="font-body text-[10px] uppercase tracking-[0.18em] text-white/50 mt-1.5">Years Experience</p>
          </div>
          <div className="w-px self-stretch" style={{ background: 'rgba(255,255,255,0.15)' }} />
          <div className="text-left">
            <p className="font-heading text-2xl font-bold leading-none flex items-center gap-1" style={{ color: GOLD_LIGHT }}>
              5.0
              <svg className="w-4 h-4" style={{ fill: GOLD_LIGHT }} viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </p>
            <p className="font-body text-[10px] uppercase tracking-[0.18em] text-white/50 mt-1.5">Client Rating</p>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-body text-[9px] uppercase tracking-[0.3em] text-white/70">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/70 to-transparent animate-pulse" />
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          2. SITUATIONS
      ══════════════════════════════════════════ */}
      <section id="situations" className="py-20 px-4" style={{ background: GRAY1 }}>
        <div className="max-w-6xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            <p className="font-body font-bold text-xs uppercase tracking-[0.28em] mb-3" style={{ color: RED }}>
              We Can Help
            </p>
            <h2 className="font-heading font-semibold text-3xl md:text-4xl mb-5 leading-tight" style={{ color: DARK }}>
              We Help Homeowners in Difficult Situations
            </h2>
            <p className="font-body text-gray-500 text-base max-w-2xl mx-auto mb-12 leading-relaxed">
              Life happens. Whether you're dealing with an inherited property, repairs, foreclosure, divorce,
              or simply want a hassle-free sale, we'll help you explore the best option for your situation.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {SITUATIONS.map(({ Icon, label, slug }, i) => (
              <motion.div
                key={label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Link
                  to={`/sell/${slug}`}
                  className="relative bg-white rounded-3xl px-4 py-7 flex flex-col items-center gap-4 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-transparent transition-all duration-300 group h-full overflow-hidden"
                >
                  <div
                    className="absolute inset-x-0 top-0 h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                    style={{ background: `linear-gradient(90deg, ${RED}, ${GOLD})` }}
                  />
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300"
                    style={{ background: `linear-gradient(135deg, #A83A3A, ${RED} 60%, #6E1A1A)` }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <p className="font-body text-sm font-semibold text-center leading-snug group-hover:text-[#8D2222] transition-colors duration-200" style={{ color: DARK }}>
                    {label}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.25 }}
          >
            <CashBtn />
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. SELLING OPTIONS
      ══════════════════════════════════════════ */}
      <section id="selling-options" className="py-20 px-4" style={{ background: CREAM }}>
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">
            <p className="font-body font-bold text-xs uppercase tracking-[0.28em] mb-3" style={{ color: RED }}>
              One Home. Multiple Selling Options.
            </p>
            <h2 className="font-heading font-semibold text-3xl md:text-4xl mb-4" style={{ color: DARK }}>
              Every homeowner's situation is different.
            </h2>
            <p className="font-body text-gray-500 text-base max-w-xl mx-auto">
              Whether you need speed, top dollar, or something in between, we'll help you find the right path.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

            {/* ── Card 1: Highlighted maroon ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="relative rounded-3xl p-8 flex flex-col shadow-2xl"
              style={{
                background: `linear-gradient(155deg, #A83A3A 0%, ${RED} 45%, #5E1616 100%)`,
                boxShadow: '0 25px 50px -18px rgba(141,34,34,0.6)',
              }}
            >
              {/* subtle sheen */}
              <div
                className="absolute top-0 right-0 w-56 h-56 rounded-tr-3xl rounded-bl-[6rem] pointer-events-none overflow-hidden"
              >
                <div
                  className="absolute -top-20 -right-20 w-56 h-56 rounded-full"
                  style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.14) 0%, transparent 70%)' }}
                />
              </div>

              {/* Most Popular badge */}
              <div
                className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 rounded-full font-body text-[11px] font-bold uppercase tracking-widest whitespace-nowrap shadow-lg"
                style={{ background: `linear-gradient(120deg, #9C8A8C, ${GOLD})`, color: '#fff' }}
              >
                Most Popular
              </div>

              <div
                className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-6 mt-2 shadow-inner"
                style={{ background: 'rgba(255,255,255,0.16)', border: '1px solid rgba(255,255,255,0.15)' }}
              >
                <MdSell className="w-8 h-8 text-white" />
              </div>
              <h3 className="relative font-heading text-2xl font-bold text-white mb-3">Sell As-Is for Cash</h3>
              <p className="relative font-body text-white/75 text-sm leading-relaxed mb-6">
                Skip repairs, showings, and uncertainty. Receive a competitive cash offer and close on your timeline.
              </p>
              <div className="relative border-t border-white/20 pt-5 mb-6">
                <p className="font-body text-[11px] font-bold uppercase tracking-widest text-white/55 mb-3">Best For:</p>
                <ul className="space-y-2.5">
                  {['Inherited homes', 'Repairs needed', 'Landlords', 'Fast Closings'].map(item => (
                    <li key={item} className="flex items-center gap-2.5 font-body text-sm text-white/90">
                      <MdCheckCircle className="w-5 h-5 text-white shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative mt-auto">
                <Link
                  to="/cash-offer"
                  className="block w-full text-center font-body font-bold text-sm py-3.5 rounded-xl hover:bg-gray-50 hover:-translate-y-0.5 transition-all duration-200 shadow-md"
                  style={{ background: '#fff', color: RED }}
                >
                  Get My Fast Cash Offer
                </Link>
              </div>
            </motion.div>

            {/* ── Card 2: Maximize price ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -6 }}
              className="group rounded-3xl p-8 flex flex-col border border-gray-100 shadow-sm hover:shadow-2xl hover:border-transparent transition-all duration-300"
              style={{ background: `linear-gradient(160deg, #FFFFFF 0%, ${GOLD}14 100%)` }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300"
                style={{ background: `linear-gradient(135deg, #9C8A8C, ${GOLD})` }}
              >
                <MdTrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-3" style={{ color: DARK }}>
                Maximize Your Sale Price
              </h3>
              <p className="font-body text-gray-500 text-sm leading-relaxed mb-6">
                Want the highest possible price? We'll market your home to thousands of qualified buyers across Metro Atlanta.
              </p>
              <div className="border-t border-gray-100 pt-5 mb-6">
                <p className="font-body text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">Best For:</p>
                <ul className="space-y-2.5">
                  {['Updated homes', 'No rush to sell', 'Highest return'].map(item => (
                    <li key={item} className="flex items-center gap-2.5 font-body text-sm text-gray-700">
                      <MdCheckCircle className="w-5 h-5 shrink-0" style={{ color: RED }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto">
                <Link
                  to="/cash-offer"
                  className="block w-full text-center text-white font-body font-bold text-sm py-3.5 rounded-xl hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
                  style={{ background: RED }}
                >
                  Get My Fast Cash Offer
                </Link>
              </div>
            </motion.div>

            {/* ── Card 3: Increase value ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -6 }}
              className="group rounded-3xl p-8 flex flex-col border border-gray-100 shadow-sm hover:shadow-2xl hover:border-transparent transition-all duration-300"
              style={{ background: `linear-gradient(160deg, #FFFFFF 0%, ${GOLD}14 100%)` }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300"
                style={{ background: `linear-gradient(135deg, #9C8A8C, ${GOLD})` }}
              >
                <MdHomeWork className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-3" style={{ color: GOLD }}>
                Increase Your Home's Value
              </h3>
              <p className="font-body text-gray-500 text-sm leading-relaxed mb-6">
                Minor improvements can sometimes lead to significantly higher offers. We'll help you determine
                if renovations are worth the investment—and in some cases, help you complete them with little
                or no upfront cost.
              </p>
              <div className="border-t border-gray-100 pt-5 mb-6">
                <p className="font-body text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">Best For:</p>
                <ul className="space-y-2.5">
                  {['Curb appeal', 'Cosmetic repairs', 'More equity'].map(item => (
                    <li key={item} className="flex items-center gap-2.5 font-body text-sm text-gray-700">
                      <MdCheckCircle className="w-5 h-5 shrink-0" style={{ color: GOLD }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto">
                <Link
                  to="/cash-offer"
                  className="block w-full text-center text-white font-body font-bold text-sm py-3.5 rounded-xl hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
                  style={{ background: RED }}
                >
                  Get My Fast Cash Offer
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. TRUST STRIP
      ══════════════════════════════════════════ */}
      <section id="trust" className="py-10 px-4 border-y border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {TRUST_ITEMS.map(({ Icon, label, sub }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}
                className={`group flex flex-col items-center text-center px-4 py-6 gap-2.5 ${
                  i > 0 ? 'lg:border-l lg:border-gray-100' : ''
                }`}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-1 shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300"
                  style={{ background: `linear-gradient(135deg, ${NAVY}08, ${GOLD}22)` }}
                >
                  <Icon className="w-6 h-6" style={{ color: GOLD }} />
                </div>
                <p className="font-body font-bold text-xs leading-snug" style={{ color: DARK }}>{label}</p>
                <p className="font-body text-[11px] text-gray-400">{sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          5. AGENT BIO
      ══════════════════════════════════════════ */}
      <section id="about-agent" className="py-20 px-4" style={{ background: CREAM }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div
              className="absolute -top-4 -left-4 w-full h-full rounded-2xl hidden lg:block"
              style={{ background: `linear-gradient(135deg, ${RED}22, ${GOLD}18)` }}
            />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={AGENT_IMG}
                alt="Jack Davis — Tomond Jack"
                className="w-full object-cover object-top"
                style={{ aspectRatio: '4/5' }}
                loading="lazy"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 30%)' }}
              />
            </div>
            {/* Gold corner accent */}
            <div
              className="absolute -bottom-3 -right-3 w-20 h-20 rounded-2xl hidden lg:block"
              style={{ background: GOLD, opacity: 0.18 }}
            />
            {/* Floating experience badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 left-6 sm:left-10 bg-white rounded-2xl shadow-xl px-6 py-4 flex items-center gap-3 border border-gray-100"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: `linear-gradient(135deg, #A83A3A, ${RED})` }}
              >
                <MdVerifiedUser className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-heading text-lg font-bold leading-none" style={{ color: DARK }}>20+ Years</p>
                <p className="font-body text-[11px] text-gray-400 mt-1">Real Estate Experience</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
            className="order-1 lg:order-2"
          >
            <p className="font-body font-bold text-xs uppercase tracking-[0.28em] mb-4" style={{ color: RED }}>
              Meet Tomond Jack
            </p>
            <h2
              className="font-heading text-3xl md:text-4xl font-semibold mb-6 leading-tight"
              style={{ color: DARK }}
            >
              Your Trusted Real Estate Advisor
            </h2>
            <p className="font-body text-gray-500 text-base leading-relaxed mb-8">
              Investor. Broker. Developer. I've renovated over 100 homes and helped homeowners navigate
              some of life's toughest transitions. Whether you need a fast cash offer or want to maximize
              your sale price, my goal is simple: help you make the best decision—not the fastest one.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[['100+', 'Homes Renovated'], ['14 Days', 'Fastest Close'], ['5★', 'Client Rating']].map(([val, lbl]) => (
                <div
                  key={lbl}
                  className="text-center bg-white rounded-xl py-4 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-250"
                >
                  <p className="font-heading text-xl font-bold mb-0.5" style={{ color: RED }}>{val}</p>
                  <p className="font-body text-[11px] text-gray-400 leading-tight">{lbl}</p>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="group inline-flex items-center gap-2 text-white font-body font-bold text-sm px-7 py-4 rounded-xl hover:-translate-y-0.5 transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, #A83A3A 0%, ${RED} 45%, #6E1A1A 100%)`,
                boxShadow: '0 10px 30px -10px rgba(141,34,34,0.55)',
              }}
            >
              Learn More About Tomond <MdArrowForward className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          6. TESTIMONIALS
      ══════════════════════════════════════════ */}
      <section id="testimonials" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <p className="font-body font-bold text-xs uppercase tracking-[0.28em] mb-3" style={{ color: RED }}>
              Client Stories
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold" style={{ color: DARK }}>
              What Homeowners Are Saying
            </h2>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">

            {/* Prev / Next buttons — desktop, flanking the card */}
            <button
              onClick={() => goToTestimonial(activeTestimonial - 1, -1)}
              aria-label="Previous testimonial"
              className="hidden sm:flex absolute top-1/2 -translate-y-1/2 -left-6 lg:-left-16 z-20 w-12 h-12 rounded-full bg-white border border-gray-200 shadow-lg items-center justify-center text-gray-500 hover:text-white hover:border-transparent transition-all duration-250 hover:scale-105"
              onMouseEnter={(e) => { e.currentTarget.style.background = RED }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#fff' }}
            >
              <MdChevronLeft className="w-7 h-7" />
            </button>
            <button
              onClick={() => goToTestimonial(activeTestimonial + 1, 1)}
              aria-label="Next testimonial"
              className="hidden sm:flex absolute top-1/2 -translate-y-1/2 -right-6 lg:-right-16 z-20 w-12 h-12 rounded-full bg-white border border-gray-200 shadow-lg items-center justify-center text-gray-500 hover:text-white hover:border-transparent transition-all duration-250 hover:scale-105"
              onMouseEnter={(e) => { e.currentTarget.style.background = RED }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#fff' }}
            >
              <MdChevronRight className="w-7 h-7" />
            </button>

            {/* Card viewport */}
            <div className="relative overflow-hidden rounded-[2rem]">
              <AnimatePresence mode="wait" custom={testimonialDir}>
                <motion.div
                  key={activeTestimonial}
                  custom={testimonialDir}
                  initial={(dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 })}
                  animate={{ opacity: 1, x: 0 }}
                  exit={(dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60 })}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className="relative rounded-[2rem] p-10 sm:p-14 flex flex-col items-center text-center overflow-hidden border"
                  style={{
                    background: `linear-gradient(160deg, ${CREAM} 0%, #EFE3DC 100%)`,
                    borderColor: `${GOLD}30`,
                    boxShadow: `0 30px 60px -25px ${RED}30, 0 10px 25px -10px rgba(0,0,0,0.08)`,
                  }}
                >
                  {/* Decorative quote mark */}
                  <MdFormatQuote
                    className="absolute -top-4 right-6 w-32 h-32 opacity-[0.08] pointer-events-none rotate-180"
                    style={{ color: RED }}
                  />

                  {/* Stars */}
                  <div className="relative flex items-center gap-1.5 mb-6">
                    {[...Array(5)].map((_, s) => (
                      <svg
                        key={s}
                        className="w-5 h-5"
                        style={{ fill: GOLD, filter: `drop-shadow(0 1px 3px ${GOLD}66)` }}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="relative font-heading text-xl sm:text-2xl italic text-gray-700 leading-relaxed mb-8 max-w-xl">
                    "{TESTIMONIALS[activeTestimonial].quote}"
                  </p>

                  <div className="relative flex flex-col items-center gap-3">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center font-heading font-bold text-white text-lg shrink-0 shadow-lg"
                      style={{ background: `linear-gradient(135deg, #A83A3A, ${RED})`, boxShadow: `0 8px 20px -6px ${RED}80` }}
                    >
                      {TESTIMONIALS[activeTestimonial].name[0]}
                    </div>
                    <div>
                      <p className="font-body font-bold text-sm" style={{ color: DARK }}>
                        {TESTIMONIALS[activeTestimonial].name}
                      </p>
                      <p className="font-body text-xs text-gray-400">{TESTIMONIALS[activeTestimonial].city}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile prev/next */}
            <div className="flex sm:hidden items-center justify-center gap-4 mt-6">
              <button
                onClick={() => goToTestimonial(activeTestimonial - 1, -1)}
                aria-label="Previous testimonial"
                className="w-11 h-11 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-500"
              >
                <MdChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => goToTestimonial(activeTestimonial + 1, 1)}
                aria-label="Next testimonial"
                className="w-11 h-11 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-500"
              >
                <MdChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Dot indicators */}
            <div className="flex items-center justify-center gap-2.5 mt-8">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => goToTestimonial(i, i > activeTestimonial ? 1 : -1)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className="p-1.5 -m-1.5"
                >
                  <span
                    className="block rounded-full transition-all duration-300"
                    style={{
                      width: i === activeTestimonial ? '28px' : '8px',
                      height: '8px',
                      background: i === activeTestimonial ? RED : '#E2D9D3',
                    }}
                  />
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          7. CTA BAND
      ══════════════════════════════════════════ */}
      <section
        id="cta-band"
        className="relative py-24 px-4 overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #241012 100%)` }}
      >
        <img
          src={SKYLINE_IMG}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.12]"
        />
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle, ${RED}33 0%, transparent 70%)` }}
        />
        {/* Left red accent strip */}
        <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: `linear-gradient(to bottom, ${GOLD}, ${RED})` }} />

        <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

          <motion.div
            initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55 }}
          >
            <p className="font-body font-bold text-xs uppercase tracking-[0.28em] mb-3" style={{ color: GOLD }}>
              No Obligation
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-4 leading-tight">
              Ready to Explore Your Options?
            </h2>
            <p className="font-body text-white/55 text-base">
              Let's find the best solution for your home and your life.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.15 }}
            className="flex flex-col sm:flex-row gap-4 lg:justify-end"
          >
            <CashBtn />
            <a
              href="tel:6789628754"
              className="inline-flex items-center justify-center gap-2 border border-white/35 text-white font-body font-semibold text-sm px-7 py-4 rounded-xl hover:bg-white/10 hover:border-white/60 hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap backdrop-blur-sm"
            >
              <MdPhone className="w-5 h-5" style={{ color: GOLD_LIGHT }} />
              (678) 962-8754
            </a>
          </motion.div>

        </div>
      </section>

      <Footer />
    </>
  )
}
