import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import {
  MdHome, MdBuild, MdWarning, MdGavel, MdPeople,
  MdFlightTakeoff, MdLocationOn, MdApartment,
  MdVerifiedUser, MdCheckCircle, MdEvent,
  MdTrendingUp, MdAttachMoney, MdArrowForward,
  MdPhone, MdLock, MdSell, MdHomeWork,
} from 'react-icons/md'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const RED   = '#C42535'
const NAVY  = '#17293C'
const GOLD  = '#C1912E'
const CREAM = '#F7F3EE'
const GRAY1 = '#EFEDEA'
const DARK  = '#1A1A1A'

const HERO_IMG    = '/hero_bg.jpg'
const AGENT_IMG   = '/jack_devis.jpg'
const SKYLINE_IMG = 'https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?w=1600&auto=format&fit=crop&q=80'

const SITUATIONS = [
  { Icon: MdHome,          label: 'Inherited Property'      },
  { Icon: MdBuild,         label: 'Repairs Needed'          },
  { Icon: MdWarning,       label: 'Behind on Payments'      },
  { Icon: MdGavel,         label: 'Probate or Estate'       },
  { Icon: MdPeople,        label: 'Divorce or Separation'   },
  { Icon: MdLocationOn,    label: 'Downsizing or Retirement'},
  { Icon: MdFlightTakeoff, label: 'Relocation'              },
  { Icon: MdApartment,     label: 'Landlords & Investors'   },
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
    className={`inline-flex items-center justify-center gap-2 text-white font-body font-bold text-sm px-7 py-4 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap ${className}`}
    style={{ background: RED }}
  >
    {children || 'Get My Fast Cash Offer'}
    <MdArrowForward className="w-5 h-5" />
  </Link>
)

export default function Home() {
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
        <img
          src={HERO_IMG}
          alt="Atlanta home"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center 40%' }}
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(110deg, rgba(10,4,6,0.92) 0%, rgba(10,4,6,0.72) 48%, rgba(10,4,6,0.20) 100%)',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-36 w-full">
          <motion.div initial="hidden" animate="visible" className="max-w-xl">

            <motion.p
              variants={fadeUp} custom={0}
              className="font-body font-bold text-sm uppercase tracking-[0.28em] mb-5"
              style={{ color: GOLD }}
            >
              Real Solutions. Real Life.
            </motion.p>

            <motion.h1
              variants={fadeUp} custom={1}
              className="font-heading font-bold leading-[1.04] mb-6"
              style={{ fontSize: 'clamp(2.8rem, 5.5vw, 4.8rem)' }}
            >
              <span className="text-white block">Sell Your Home</span>
              <span style={{ color: GOLD }}>Your Way</span>
            </motion.h1>

            <motion.p
              variants={fadeUp} custom={2}
              className="font-body text-white/80 text-lg leading-relaxed mb-8"
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
              className="flex items-center gap-2 text-white/45 font-body text-xs"
            >
              <MdLock className="w-4 h-4 shrink-0" style={{ color: GOLD }} />
              <span>100% Confidential &nbsp;·&nbsp; No Obligation</span>
            </motion.div>

          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-30">
          <div className="w-px h-10 bg-white animate-pulse" />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          2. SITUATIONS
      ══════════════════════════════════════════ */}
      <section className="py-20 px-4" style={{ background: GRAY1 }}>
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
            {SITUATIONS.map(({ Icon, label }, i) => (
              <motion.div
                key={label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white rounded-2xl px-4 py-6 flex flex-col items-center gap-4 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-250 cursor-default group"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-200"
                  style={{ background: RED }}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <p className="font-body text-sm font-semibold text-center leading-snug" style={{ color: DARK }}>
                  {label}
                </p>
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
      <section className="py-20 px-4" style={{ background: CREAM }}>
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
              className="relative rounded-2xl p-8 flex flex-col shadow-xl mt-6"
              style={{ background: RED }}
            >
              {/* Most Popular badge */}
              <div
                className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-1.5 rounded-full font-body text-[11px] font-bold uppercase tracking-widest whitespace-nowrap shadow-md"
                style={{ background: GOLD, color: '#fff' }}
              >
                Most Popular
              </div>

              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 mt-2"
                style={{ background: 'rgba(255,255,255,0.18)' }}
              >
                <MdSell className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-white mb-3">Sell As-Is for Cash</h3>
              <p className="font-body text-white/75 text-sm leading-relaxed mb-6">
                Skip repairs, showings, and uncertainty. Receive a competitive cash offer and close on your timeline.
              </p>
              <div className="border-t border-white/20 pt-5 mb-6">
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
              <div className="mt-auto">
                <Link
                  to="/cash-offer"
                  className="block w-full text-center font-body font-bold text-sm py-3.5 rounded-xl hover:bg-gray-50 transition-colors shadow-sm"
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
              className="bg-white rounded-2xl p-8 flex flex-col border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ background: NAVY }}
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
                  className="block w-full text-center text-white font-body font-bold text-sm py-3.5 rounded-xl hover:opacity-90 transition-opacity"
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
              className="bg-white rounded-2xl p-8 flex flex-col border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ background: `${GOLD}22` }}
              >
                <MdHomeWork className="w-8 h-8" style={{ color: GOLD }} />
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
                  className="block w-full text-center text-white font-body font-bold text-sm py-3.5 rounded-xl hover:opacity-90 transition-opacity"
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
      <section className="py-8 px-4 border-y border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {TRUST_ITEMS.map(({ Icon, label, sub }, i) => (
              <div
                key={label}
                className={`flex flex-col items-center text-center px-4 py-6 gap-2 ${
                  i > 0 ? 'lg:border-l lg:border-gray-100' : ''
                }`}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-1"
                  style={{ background: `${NAVY}12` }}
                >
                  <Icon className="w-6 h-6" style={{ color: NAVY }} />
                </div>
                <p className="font-body font-bold text-xs leading-snug" style={{ color: DARK }}>{label}</p>
                <p className="font-body text-[11px] text-gray-400">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          5. AGENT BIO
      ══════════════════════════════════════════ */}
      <section className="py-20 px-4" style={{ background: CREAM }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div
              className="absolute -top-4 -left-4 w-full h-full rounded-2xl hidden lg:block"
              style={{ background: `${RED}15` }}
            />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={AGENT_IMG}
                alt="Jack Davis — Tomond Jack"
                className="w-full object-cover object-top"
                style={{ aspectRatio: '4/5' }}
                loading="lazy"
              />
            </div>
            {/* Gold corner accent */}
            <div
              className="absolute -bottom-3 -right-3 w-20 h-20 rounded-2xl hidden lg:block"
              style={{ background: GOLD, opacity: 0.18 }}
            />
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
                <div key={lbl} className="text-center bg-white rounded-xl py-4 shadow-sm border border-gray-100">
                  <p className="font-heading text-xl font-bold mb-0.5" style={{ color: RED }}>{val}</p>
                  <p className="font-body text-[11px] text-gray-400 leading-tight">{lbl}</p>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-white font-body font-bold text-sm px-7 py-4 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              style={{ background: RED }}
            >
              Learn More About Tomond <MdArrowForward className="w-5 h-5" />
            </Link>
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          6. TESTIMONIALS
      ══════════════════════════════════════════ */}
      <section className="py-20 px-4 bg-white">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="rounded-2xl p-8 flex flex-col border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                style={{ background: CREAM }}
              >
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} className="w-4 h-4" style={{ fill: GOLD, color: GOLD }} viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="font-heading text-base italic text-gray-600 leading-relaxed flex-1 mb-6">
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-3 border-t border-gray-200 pt-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-body font-bold text-white text-sm shrink-0"
                    style={{ background: RED }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-body font-bold text-sm" style={{ color: DARK }}>{t.name}</p>
                    <p className="font-body text-xs text-gray-400">{t.city}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          7. CTA BAND
      ══════════════════════════════════════════ */}
      <section className="relative py-20 px-4 overflow-hidden" style={{ background: NAVY }}>
        <img
          src={SKYLINE_IMG}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.10]"
        />
        {/* Left red accent strip */}
        <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: RED }} />

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
              className="inline-flex items-center justify-center gap-2 border border-white/35 text-white font-body font-semibold text-sm px-7 py-4 rounded-xl hover:bg-white/10 hover:border-white/60 transition-all duration-200 whitespace-nowrap"
            >
              <MdPhone className="w-5 h-5" />
              (678) 962-8754
            </a>
          </motion.div>

        </div>
      </section>

      <Footer />
    </>
  )
}
