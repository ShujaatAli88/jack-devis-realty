import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FiCheck, FiChevronDown, FiArrowRight } from 'react-icons/fi'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CashOfferModal from '../components/CashOfferModal'

const HERO_BG = 'https://t2.realgeeks.media/thumbnail/T8YfITNYRLNl9id6miWsaTXpuiw=/fit-in/0x720/u.realgeeks.media/jackdavisrealty/iStock-509868014m.jpg'
const IMG3 = 'https://u.realgeeks.media/jackdavisrealty/Picture3.png'
const IMG4 = 'http://u.realgeeks.media/jackdavisrealty/Picture4.png'
const IMG5 = 'https://u.realgeeks.media/jackdavisrealty/Picture5.png'
const FAQ_IMG = 'http://t.realgeeks.media/resize/460x/https://u.realgeeks.media/jackdavisrealty%252FQuestions_Photo.jpg'

const whyCards = [
  { img: IMG3, title: 'Hassle Free', desc: 'No need to make repairs. Sell your home "as-is" and in any condition or situation.' },
  { img: IMG4, title: 'Simple', desc: 'No need for multiple showings or open houses.' },
  { img: IMG5, title: 'Convenient', desc: 'Close in 14 days or on your timeframe. Pay no closing costs.' },
]

const steps = [
  { n: '01', title: 'Tell Us About the Property', desc: 'Share the address, condition, and your ideal timeline.' },
  { n: '02', title: 'Receive Your Offer', desc: 'Get a competitive offer within 24–48 hours based on local comparable sales, repair scope, and your preferred closing schedule.' },
  { n: '03', title: 'Choose Your Closing Date', desc: 'Close in as little as 14 days or a later date that fits your plans.' },
]

const benefits = [
  'Close in as little as 14 days',
  'No repairs or cleaning required',
  'No open houses or repeated showings',
  'No closing costs',
  'Flexible closing timeline based on your needs',
  'Local Metro Atlanta market expertise',
]

const situations = [
  'Vacant homes', 'Inherited or probate properties', 'Homes needing repairs or full renovations',
  'Fire or water damage', 'Downsizing', 'Divorce', 'Relocation', 'Pre-foreclosure',
  'Tired landlords', 'Tenant-occupied properties', 'Out-of-state ownership', 'Problem properties with code issues',
]

const counties = ['Fulton County','Gwinnett County','Dekalb County','Cobb County','Clayton County','Henry County','Rockdale County','Douglas County','Paulding County']
const cities = ['Atlanta','Decatur','Lawrenceville','Snellville','Lilburn','Stone Mountain','Tucker','East Point','College Park','Lithonia','Smyrna','Mableton','Marietta','West Midtown','East Lake']

const faqs = [
  { q: 'How fast can I sell my house for cash?', a: 'Most closings happen in 14 days or less, but we can move faster or slower depending on your needs.' },
  { q: 'Do I need to make repairs first?', a: 'No. We buy homes as-is, including homes that need cosmetic updates, major renovations, or cleanup.' },
  { q: 'How do you determine the offer price?', a: 'We look at neighborhood sales, current condition, renovation costs, and your timeline to create a fair, competitive cash offer.' },
  { q: "What if I'm not ready to sell yet?", a: 'That\'s perfectly fine. Our offer process is 100% no obligation.' },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="font-heading text-base font-semibold text-navy">{q}</span>
        <FiChevronDown className={`w-5 h-5 text-[#374151] shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="font-body text-sm text-gray-500 leading-relaxed pb-5">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function CTAButton({ onClick, className = '', children }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center gap-2 bg-[#AC1E32] hover:bg-[#8B1828] text-white font-body font-bold text-sm px-8 py-4 rounded-full shadow-lg transition-colors ${className}`}
    >
      {children}
      <FiArrowRight className="w-4 h-4" />
    </motion.button>
  )
}

export default function CashOffer() {
  const [formOpen, setFormOpen] = useState(false)

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <Helmet>
        <title>Fast Cash Offer | Jack Davis Realty – Atlanta Metro</title>
        <meta name="description" content="Sell your Atlanta Metro home fast for cash — no repairs, no showings, no commissions. Close in 14 days." />
      </Helmet>

      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-32"
        style={{ backgroundImage: `url(${HERO_BG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/75" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-body text-xs font-semibold text-white uppercase tracking-widest mb-4">
            Jack Davis Realty
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="font-heading text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Fast Cash Offer for Your<br className="hidden md:block" /> Atlanta Metro Home
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="font-body text-white/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-4">
            Need to sell your house anywhere in Metro Atlanta? Jack Davis Realty helps homeowners receive competitive cash offers for homes in any condition.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
            className="font-body text-white/70 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10">
            Whether your property is vacant, inherited, tenant-occupied, needs repairs or you simply want a fast and convenient sale, we can help you close in as little as 14 days with no repairs, no showings, no commissions, and no closing costs.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton onClick={() => setFormOpen(true)}>Get My Cash Offer</CTAButton>
            <p className="font-body text-white/50 text-xs">No obligation · No fees · 24–48 hour response</p>
          </motion.div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
          <div className="w-px h-10 bg-white animate-pulse" />
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="bg-navy py-6 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-3 divide-x divide-white/10 text-center">
          {[['14 Days', 'Close Timeline'], ['24–48 hrs', 'Offer Response'], ['$0', 'Closing Costs']].map(([val, label]) => (
            <div key={label} className="px-4 py-2">
              <p className="font-heading text-2xl md:text-3xl font-bold text-white">{val}</p>
              <p className="font-body text-xs text-white/50 uppercase tracking-widest mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY CHOOSE ── */}
      <section className="bg-ivory py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Why Homeowners Choose Us</p>
            <h2 className="section-heading mb-4">Why Homeowners Choose Our Cash Offer Program</h2>
            <p className="font-body text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              We work with cash buyers who are ready to purchase your home today.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 group hover:shadow-xl transition-shadow duration-300 flex flex-col items-start"
              >
                {/* Icon — contained, not cropped */}
                <div className="w-full flex justify-center mb-6 bg-gray-50 rounded-2xl p-6">
                  <img
                    src={card.img}
                    alt={card.title}
                    loading="lazy"
                    className="h-28 w-auto object-contain"
                  />
                </div>
                {/* Check badge */}
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <FiCheck className="w-4 h-4 text-[#374151]" strokeWidth={3} />
                </div>
                <h3 className="font-heading text-xl font-semibold text-navy mb-2">{card.title}</h3>
                <p className="font-body text-gray-500 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-navy py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-body text-xs text-white uppercase tracking-widest font-semibold mb-3">Simple Process</p>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white">How Our Cash Offer Process Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
            {steps.map((step, i) => (
              <motion.div key={step.n}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative text-center">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-white/20" />
                )}
                <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-5">
                  <span className="font-heading text-xl font-bold text-white">{step.n}</span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-white mb-3">{step.title}</h3>
                <p className="font-body text-white/55 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <CTAButton onClick={() => setFormOpen(true)}>Get My Cash Offer</CTAButton>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="section-label mb-3">What You Get</p>
            <h2 className="section-heading mb-4">Benefits</h2>
            <p className="font-body text-gray-500 text-sm leading-relaxed mb-8">
              Selling the traditional way is not always the best option. If speed, certainty, and convenience matter most, our cash offer program is designed to make the process simple.
            </p>
            <ul className="space-y-4 mb-10">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <FiCheck className="w-3.5 h-3.5 text-[#374151]" strokeWidth={3} />
                  </span>
                  <span className="font-body text-sm text-gray-700">{b}</span>
                </li>
              ))}
            </ul>
            <p className="font-body text-gray-500 text-sm leading-relaxed italic border-l-4 border-gray-300 pl-4">
              As both a licensed Georgia brokerage and experienced local investor, Jack Davis Realty gives you more than a generic cash buyer. We understand property values, renovation costs, neighborhood trends, and the best exit strategy for your home.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <img src={HERO_BG} alt="Cash offer Atlanta home" loading="lazy"
              className="w-full rounded-3xl object-cover shadow-2xl" style={{ aspectRatio: '4/3' }} />
          </motion.div>
        </div>
      </section>

      {/* ── SITUATIONS ── */}
      <section className="bg-ivory py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-3">We Can Help</p>
            <h2 className="section-heading mb-4">We Help Homeowners Sell Fast In Situations Like</h2>
            <p className="font-body text-gray-500 text-sm max-w-lg mx-auto">
              We specialize in helping sellers who need speed, simplicity, or a creative solution.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {situations.map((s) => (
              <div key={s} className="bg-white rounded-2xl px-5 py-4 shadow-sm border border-gray-100 flex items-center gap-3">
                <span className="w-2 h-2 bg-[#AC1E32] rounded-full shrink-0" />
                <span className="font-body text-sm text-gray-700">{s}</span>
              </div>
            ))}
          </div>
          <p className="text-center font-body text-sm text-[#374151] italic mt-4">
            If your home needs work, that's okay — we buy as-is.
          </p>
        </div>
      </section>

      {/* ── AREAS ── */}
      <section className="bg-[#1F0A0E] py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-body text-xs text-white uppercase tracking-widest font-semibold mb-3">Coverage</p>
            <h2 className="font-heading text-4xl font-semibold text-white mb-4">Areas We Buy Homes</h2>
            <p className="font-body text-white/50 text-sm max-w-md mx-auto">
              We provide fast cash offers throughout Metro Atlanta, including:
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-8">
            <div>
              <p className="font-body text-xs text-white uppercase tracking-widest font-semibold mb-5">Counties</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {counties.map((c) => (
                  <div key={c} className="flex items-center gap-2 font-body text-sm text-white/70">
                    <span className="w-1.5 h-1.5 bg-white rounded-full shrink-0" />{c}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="font-body text-xs text-white uppercase tracking-widest font-semibold mb-5">Cities</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {cities.map((c) => (
                  <div key={c} className="flex items-center gap-2 font-body text-sm text-white/70">
                    <span className="w-1.5 h-1.5 bg-white rounded-full shrink-0" />{c}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-center font-body text-white/40 text-xs italic">
            If your property is outside these areas, reach out anyway. We often work in surrounding neighborhoods.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-ivory py-24 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <img src={FAQ_IMG} alt="FAQ" loading="lazy"
              className="w-full rounded-3xl object-cover shadow-xl" style={{ aspectRatio: '4/3' }} />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="section-label mb-3">Got Questions?</p>
            <h2 className="section-heading mb-8">Frequently Asked Questions</h2>
            <div className="divide-y divide-gray-200 border-t border-gray-200">
              {faqs.map((f) => <FAQItem key={f.q} {...f} />)}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative py-28 px-4 overflow-hidden"
        style={{ backgroundImage: `url(${HERO_BG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 backdrop-blur-sm bg-black/55" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="font-body text-xs text-white uppercase tracking-widest font-semibold mb-4">No Obligation</p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white mb-4">
            Get Your No-Obligation Cash Offer
          </h2>
          <p className="font-body text-white/65 text-base leading-relaxed mb-4">
            Ready to sell your house fast in Metro Atlanta?
          </p>
          <p className="font-body text-white/55 text-sm leading-relaxed mb-10">
            Request your no-obligation cash offer today and find out what your property could sell for in the next 24–48 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {['No fees', 'No repairs', 'No pressure', 'No obligation'].map((tag) => (
              <div key={tag} className="flex items-center gap-2 font-body text-sm text-white/70">
                <FiCheck className="w-4 h-4 text-white" strokeWidth={2.5} />
                {tag}
              </div>
            ))}
          </div>
          <CTAButton onClick={() => setFormOpen(true)} className="text-base px-10 py-5">
            Get My Cash Offer
          </CTAButton>
        </div>
      </section>

      <Footer />

      {formOpen && <CashOfferModal onClose={() => setFormOpen(false)} />}
    </motion.div>
  )
}
