import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'

const CARD_H = 'clamp(420px, calc(100vh - 220px), 620px)'

const TRUST_BADGES = [
  'Licensed Georgia Brokerage',
  'Local Investor Expertise',
  'No Repairs Required',
  'Close in as Little as 14 Days',
]

export default function Hero() {
  const [address, setAddress] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/cash-offer${address ? `?address=${encodeURIComponent(address)}` : ''}`)
  }

  return (
    <section className="bg-white pt-[72px]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-2">

        {/* ── Hero Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[80px]"
          style={{ minHeight: CARD_H }}
        >
          {/* Background video */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: 'center 55%' }}
            poster="/hero_bg_poster.png"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src="/hero_bg.mp4" type="video/mp4" />
          </video>

          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(110deg, rgba(6,2,3,0.88) 0%, rgba(6,2,3,0.60) 52%, rgba(6,2,3,0.12) 100%)' }}
          />
          <div
            className="absolute inset-x-0 bottom-0"
            style={{ height: '180px', background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)' }}
          />

          {/* Content: flex column — heading top, CTA pinned bottom */}
          <div
            className="relative z-10 flex flex-col px-6 sm:px-12 pt-10 sm:pt-14 pb-8 sm:pb-10"
            style={{ minHeight: CARD_H }}
          >
            {/* Headline block */}
            <div className="max-w-xl">
              <motion.p
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="font-body text-[11px] font-semibold uppercase tracking-[0.32em] text-white/60 mb-4"
              >
                Metro Atlanta's Seller Solutions Brokerage
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                className="font-heading font-bold text-white leading-[1.05] mb-5"
                style={{ fontSize: 'clamp(2rem, 4.8vw, 3.6rem)' }}
              >
                Sell Your House Fast<br />
                <span className="font-semibold">in Metro Atlanta</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                className="font-body text-white/75 text-sm sm:text-base leading-relaxed max-w-md"
              >
                Get a competitive cash offer or explore the best strategy to maximize your home's value.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.48 }}
                className="font-body text-white font-semibold text-sm sm:text-base mt-1.5"
              >
                No repairs. No pressure. No obligation.
              </motion.p>
            </div>

            {/* Spacer — pushes CTA block to bottom */}
            <div className="flex-1 min-h-[24px]" />

            {/* ── Primary CTA: address input ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="w-full"
            >
              <form
                onSubmit={handleSubmit}
                className="flex items-center bg-white/95 backdrop-blur-sm rounded-full shadow-2xl overflow-hidden w-full"
              >
                <input
                  type="text"
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                  placeholder="Enter your home address…"
                  className="flex-1 bg-transparent px-5 sm:px-7 py-4 font-body text-sm text-gray-800 placeholder:text-gray-400 outline-none min-w-0"
                />
                <button
                  type="submit"
                  className="font-body font-bold text-sm text-white px-5 sm:px-7 py-3.5 rounded-full m-1 whitespace-nowrap transition-all duration-200 hover:opacity-90 active:scale-95 shrink-0"
                  style={{ background: '#8D2222' }}
                >
                  Get My Cash Offer
                </button>
              </form>

              {/* Secondary CTA */}
              <div className="mt-4 flex items-center gap-2">
                <Link
                  to="/selling"
                  className="font-body text-sm text-white/70 hover:text-white underline underline-offset-4 transition-colors"
                >
                  Explore Selling Options →
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ── Trust Badges ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-10 gap-y-3 py-5 mt-2"
        >
          {TRUST_BADGES.map(badge => (
            <div key={badge} className="flex items-center gap-2">
              <FiCheckCircle className="w-4 h-4 shrink-0" style={{ color: '#8D2222' }} />
              <span className="font-body text-gray-600 text-xs sm:text-sm font-medium">{badge}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
