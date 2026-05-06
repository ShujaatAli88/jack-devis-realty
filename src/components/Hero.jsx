import { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { MdSearch, MdLocationOn, MdTune, MdClose } from 'react-icons/md'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const RED = '#AC1E32'
const RED_DARK = '#8B1828'
const GOLD = '#C8A96E'

const SLIDES = [
  {
    title: 'Find Your',
    accent: 'Dream Home.',
    sub: 'Luxury homes, condos & investment properties across Atlanta Metro.',
    url: '/pexels-curtis-adams-1694007-7027849.jpg',
  },
  {
    title: 'Sell Smarter,',
    accent: 'Close Faster.',
    sub: "Top-dollar results with Atlanta's most experienced listing specialist.",
    url: '/pexels-ibidsy-5524164.jpg',
  },
  {
    title: "Atlanta's Premier",
    accent: 'Real Estate Partner.',
    sub: '6,000+ deals closed. 20+ years of trusted expertise in the Metro area.',
    url: '/pexels-cara-denison-886614634-37419422.jpg',
  },
]

const PLACEHOLDERS = ['Atlanta, GA…', 'Decatur, GA…', 'Buckhead, GA…', 'Marietta, GA…', 'Smyrna, GA…']
const PROPERTY_TYPES = ['All', 'House', 'Condo', 'Townhouse', 'Land', 'Multi-Family']
const MIN_PRICES = ['No Min', '$100K', '$200K', '$300K', '$400K', '$500K', '$750K', '$1M']
const MAX_PRICES = ['No Max', '$300K', '$400K', '$500K', '$750K', '$1M', '$1.5M', '$2M+']
const BEDS_OPTS = ['Any', '1+', '2+', '3+', '4+', '5+']

export default function Hero() {
  const navigate = useNavigate()
  const [slide, setSlide] = useState(0)
  const touchStartX = useRef(null)

  const [phIdx, setPhIdx] = useState(0)
  const [phText, setPhText] = useState('')
  const [phTyping, setPhTyping] = useState(true)

  const [activeTab, setActiveTab] = useState('Buy')
  const [city, setCity] = useState('')
  const [propertyType, setPropertyType] = useState('All')
  const [minPrice, setMinPrice] = useState('No Min')
  const [maxPrice, setMaxPrice] = useState('No Max')
  const [beds, setBeds] = useState('Any')

  const next = useCallback(() => setSlide(s => (s + 1) % SLIDES.length), [])
  const prev = useCallback(() => setSlide(s => (s - 1 + SLIDES.length) % SLIDES.length), [])

  useEffect(() => {
    const t = setTimeout(next, 3000)
    return () => clearTimeout(t)
  }, [slide, next])

  useEffect(() => {
    const target = PLACEHOLDERS[phIdx]
    if (phTyping) {
      if (phText.length < target.length) {
        const t = setTimeout(() => setPhText(target.slice(0, phText.length + 1)), 65)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setPhTyping(false), 1600)
        return () => clearTimeout(t)
      }
    } else {
      if (phText.length > 0) {
        const t = setTimeout(() => setPhText(phText.slice(0, -1)), 40)
        return () => clearTimeout(t)
      } else {
        setPhIdx(i => (i + 1) % PLACEHOLDERS.length)
        setPhTyping(true)
      }
    }
  }, [phText, phTyping, phIdx])

  const handleTouchStart = e => { touchStartX.current = e.touches[0].clientX }
  const handleTouchEnd = e => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev()
    touchStartX.current = null
  }

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (city) params.set('q', city)
    if (propertyType !== 'All') params.set('type', propertyType)
    if (minPrice !== 'No Min') params.set('minPrice', minPrice)
    if (maxPrice !== 'No Max') params.set('maxPrice', maxPrice)
    if (beds !== 'Any') params.set('beds', beds)
    params.set('tab', activeTab)
    navigate(`/search?${params.toString()}`)
  }

  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: '100dvh' }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* ── Background slides ── */}
      {SLIDES.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === slide ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src={s.url}
            alt={s.accent}
            loading={i === 0 ? 'eager' : 'lazy'}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Mobile overlay — uniform dark for centered text readability */}
      <div
        className="absolute inset-0 z-10 lg:hidden"
        style={{ background: 'rgba(8,14,26,0.78)' }}
      />
      {/* Desktop overlay — left-heavy for split layout */}
      <div
        className="absolute inset-0 z-10 hidden lg:block"
        style={{ background: 'linear-gradient(to right, rgba(10,18,32,0.90) 0%, rgba(10,18,32,0.65) 52%, rgba(10,18,32,0.20) 100%)' }}
      />
      {/* Top/bottom vignette for both */}
      <div
        className="absolute inset-0 z-10"
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.20) 0%, transparent 40%, rgba(0,0,0,0.40) 100%)' }}
      />

      {/* ── Content ── */}
      <div className="relative z-20 flex flex-col" style={{ minHeight: '100dvh' }}>
        <div className="flex-1 flex items-center py-20 px-4 sm:px-8 lg:px-16">
          <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-[1fr_460px] gap-8 xl:gap-20 items-center">

            {/* ── LEFT: Headline ── */}
            <div className="space-y-4 lg:space-y-6 text-center lg:text-left">

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                style={{ color: GOLD }}
                className="text-[11px] font-semibold tracking-[0.35em] uppercase font-body"
              >
                Atlanta Metro Real Estate
              </motion.p>

              <AnimatePresence mode="wait">
                <motion.div
                  key={slide}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.55 }}
                >
                  <h1 className="font-heading font-semibold text-[2.4rem] sm:text-5xl lg:text-7xl text-white leading-[1.06]">
                    {SLIDES[slide].title}
                    <br />
                    <span style={{ color: GOLD }} className="italic">{SLIDES[slide].accent}</span>
                  </h1>
                  <p className="font-body text-white/65 text-sm sm:text-base mt-3 lg:mt-4 mx-auto lg:mx-0 max-w-[340px] sm:max-w-sm leading-relaxed">
                    {SLIDES[slide].sub}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.38 }}
                className="flex justify-center lg:justify-start gap-6 lg:gap-8 pt-1"
              >
                {[['6,000+', 'Deals Closed'], ['20+', 'Years Exp.'], ['#1', 'ATL Specialist']].map(([num, lbl]) => (
                  <div key={lbl}>
                    <p className="font-heading text-2xl lg:text-3xl font-bold leading-none" style={{ color: GOLD }}>{num}</p>
                    <p className="font-body text-[10px] text-white/50 uppercase tracking-wider mt-1.5">{lbl}</p>
                  </div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex justify-center lg:justify-start gap-3 flex-wrap pt-1"
              >
                <Link to="/search" className="btn-gold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5">
                  Browse All Homes
                </Link>
                <Link
                  to="/valuation"
                  className="border-2 border-white/40 text-white font-body font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 rounded-full hover:border-white hover:bg-white/10 transition-all duration-200"
                >
                  Free Valuation
                </Link>
              </motion.div>

              {/* Mobile quick-search bar — lg+ uses full panel on right */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="lg:hidden mx-auto w-full max-w-sm"
              >
                <div
                  className="flex items-center gap-2 rounded-2xl px-4 py-3"
                  style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.22)', backdropFilter: 'blur(8px)' }}
                >
                  <MdSearch size={18} style={{ color: GOLD, flexShrink: 0 }} />
                  <input
                    type="text"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleSearch()}
                    placeholder="City, ZIP, or neighborhood…"
                    className="flex-1 bg-transparent font-body text-sm text-white outline-none placeholder:text-white/40 min-w-0"
                  />
                  <button
                    onClick={handleSearch}
                    className="shrink-0 font-body font-bold text-xs px-3 py-1.5 rounded-xl transition-opacity hover:opacity-85"
                    style={{ background: GOLD, color: RED }}
                  >
                    Search
                  </button>
                </div>
              </motion.div>

              {/* Slide dots */}
              <div className="flex items-center justify-center lg:justify-start gap-3 pt-1">
                <button onClick={prev} className="text-white/40 hover:text-white transition-colors">
                  <FiChevronLeft size={18} />
                </button>
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlide(i)}
                    className="rounded-full transition-all duration-300"
                    style={{
                      background: i === slide ? GOLD : 'rgba(255,255,255,0.3)',
                      width: i === slide ? '28px' : '8px',
                      height: '8px',
                    }}
                  />
                ))}
                <button onClick={next} className="text-white/40 hover:text-white transition-colors">
                  <FiChevronRight size={18} />
                </button>
              </div>
            </div>

            {/* ── RIGHT: Search panel — desktop only ── */}
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
            >
              <div className="bg-white rounded-3xl overflow-hidden" style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.45)' }}>

                {/* Card header */}
                <div className="px-7 pt-6 pb-5" style={{ background: RED }}>
                  <p className="font-body text-[10px] uppercase tracking-[0.28em] font-semibold mb-4" style={{ color: `${GOLD}CC` }}>
                    Property Search
                  </p>
                  <div className="flex gap-1 rounded-2xl p-1" style={{ background: 'rgba(0,0,0,0.25)' }}>
                    {['Buy', 'Rent', 'Sold'].map(tab => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className="flex-1 py-2.5 rounded-xl text-sm font-bold uppercase tracking-widest transition-all duration-200"
                        style={activeTab === tab
                          ? { background: GOLD, color: RED }
                          : { color: 'rgba(255,255,255,0.65)' }
                        }
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Card body */}
                <div className="px-7 py-6 space-y-5">

                  {/* Location */}
                  <div>
                    <label className="font-body text-[10px] uppercase tracking-[0.22em] text-gray-400 font-semibold mb-2 block">
                      Location
                    </label>
                    <div className="flex items-center gap-3 border-2 border-gray-100 focus-within:border-[#C8A96E] rounded-2xl px-4 py-3.5 bg-gray-50/60 transition-colors duration-200">
                      <MdLocationOn className="text-xl flex-shrink-0" style={{ color: GOLD }} />
                      <input
                        type="text"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && handleSearch()}
                        placeholder={phText || 'City, ZIP, or neighborhood…'}
                        className="flex-1 bg-transparent border-none outline-none text-gray-800 font-body text-sm placeholder:text-gray-400"
                      />
                      {city && (
                        <button onClick={() => setCity('')} className="text-gray-300 hover:text-gray-500 transition-colors">
                          <MdClose size={15} />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Property Type */}
                  <div>
                    <label className="font-body text-[10px] uppercase tracking-[0.22em] text-gray-400 font-semibold mb-2 block">
                      Property Type
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {PROPERTY_TYPES.map(t => (
                        <button
                          key={t}
                          onClick={() => setPropertyType(t)}
                          className="px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition-all duration-150"
                          style={propertyType === t
                            ? { background: RED, color: '#fff', borderColor: RED }
                            : { background: '#f9fafb', color: '#4b5563', borderColor: '#f3f4f6' }
                          }
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Bedrooms */}
                  <div>
                    <label className="font-body text-[10px] uppercase tracking-[0.22em] text-gray-400 font-semibold mb-2 block">
                      Bedrooms
                    </label>
                    <div className="flex gap-1.5">
                      {BEDS_OPTS.map(b => (
                        <button
                          key={b}
                          onClick={() => setBeds(b)}
                          className="flex-1 py-2.5 rounded-xl text-xs font-bold border transition-all duration-150"
                          style={beds === b
                            ? { background: RED, color: '#fff', borderColor: RED }
                            : { background: '#f9fafb', color: '#6b7280', borderColor: '#f3f4f6' }
                          }
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <label className="font-body text-[10px] uppercase tracking-[0.22em] text-gray-400 font-semibold mb-2 block">
                      Price Range
                    </label>
                    <div className="flex items-center gap-2">
                      <select
                        value={minPrice}
                        onChange={e => setMinPrice(e.target.value)}
                        className="flex-1 bg-gray-50 border border-gray-100 rounded-xl px-3 py-2.5 text-xs text-gray-700 font-body outline-none cursor-pointer"
                      >
                        {MIN_PRICES.map(p => <option key={p}>{p}</option>)}
                      </select>
                      <span className="text-gray-300 text-sm font-body">—</span>
                      <select
                        value={maxPrice}
                        onChange={e => setMaxPrice(e.target.value)}
                        className="flex-1 bg-gray-50 border border-gray-100 rounded-xl px-3 py-2.5 text-xs text-gray-700 font-body outline-none cursor-pointer"
                      >
                        {MAX_PRICES.map(p => <option key={p}>{p}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Search button */}
                  <button
                    onClick={handleSearch}
                    className="w-full flex items-center justify-center gap-2.5 py-4 rounded-2xl text-white font-body font-bold text-base transition-all duration-200 shadow-lg active:scale-[0.99] mt-1"
                    style={{ background: `linear-gradient(135deg, ${RED} 0%, ${RED_DARK} 100%)` }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.92'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >
                    <MdSearch size={20} style={{ color: GOLD }} />
                    Search Properties
                  </button>

                  {/* Advanced link */}
                  <Link
                    to="/search"
                    className="flex items-center justify-center gap-1.5 font-body text-xs text-gray-400 hover:text-gray-700 transition-colors pb-1"
                  >
                    <MdTune size={13} />
                    Advanced Search &amp; More Filters
                  </Link>

                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
