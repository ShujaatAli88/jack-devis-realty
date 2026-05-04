import { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { MdSearch, MdLocationOn, MdTune } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const HERO_IMAGES = [
  { url: '/image_1.jpg', label: 'Luxury Homes' },
  { url: '/image_2.jpg', label: 'Modern Living' },
  { url: '/image_3.jpg', label: 'Dream Properties' },
]

const PLACEHOLDERS = [
  'Atlanta, GA…',
  'Decatur, GA…',
  'Marietta, GA…',
  'Smyrna, GA…',
  'Lawrenceville, GA…',
  'Stone Mountain, GA…',
]

const PROPERTY_TYPES = ['All Types', 'Home', 'Condo', 'Townhouse', 'Land', 'Multi-Family']
const MIN_PRICES    = ['No Min', '$50K', '$100K', '$200K', '$300K', '$400K', '$500K', '$750K', '$1M']
const MAX_PRICES    = ['No Max', '$200K', '$300K', '$400K', '$500K', '$750K', '$1M', '$1.5M', '$2M+']
const BEDS_OPTS     = ['Any', '1+', '2+', '3+', '4+', '5+']

export default function Hero() {
  const navigate = useNavigate()

  // slider
  const [current,  setCurrent]  = useState(0)
  const [paused,   setPaused]   = useState(false)
  const touchStartX = useRef(null)

  // animated placeholder
  const [phIdx,    setPhIdx]    = useState(0)
  const [phText,   setPhText]   = useState('')
  const [phTyping, setPhTyping] = useState(true)

  // search fields
  const [activeTab,     setActiveTab]     = useState('Buy')
  const [city,          setCity]          = useState('')
  const [propertyType,  setPropertyType]  = useState('All Types')
  const [minPrice,      setMinPrice]      = useState('No Min')
  const [maxPrice,      setMaxPrice]      = useState('No Max')
  const [beds,          setBeds]          = useState('Any')
  const [focused,       setFocused]       = useState(false)

  // slider auto-advance
  const next = useCallback(() => setCurrent(c => (c + 1) % HERO_IMAGES.length), [])
  const prev = useCallback(() => setCurrent(c => (c - 1 + HERO_IMAGES.length) % HERO_IMAGES.length), [])

  useEffect(() => {
    if (paused) return
    const t = setTimeout(next, 5000)
    return () => clearTimeout(t)
  }, [current, paused, next])

  // animated typing placeholder
  useEffect(() => {
    const target = PLACEHOLDERS[phIdx]
    if (phTyping) {
      if (phText.length < target.length) {
        const t = setTimeout(() => setPhText(target.slice(0, phText.length + 1)), 60)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setPhTyping(false), 1400)
        return () => clearTimeout(t)
      }
    } else {
      if (phText.length > 0) {
        const t = setTimeout(() => setPhText(phText.slice(0, -1)), 35)
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
    if (propertyType !== 'All Types') params.set('type', propertyType)
    if (minPrice !== 'No Min') params.set('minPrice', minPrice)
    if (maxPrice !== 'No Max') params.set('maxPrice', maxPrice)
    if (beds !== 'Any') params.set('beds', beds)
    params.set('tab', activeTab)
    navigate(`/search?${params.toString()}`)
  }

  return (
    <section
      className="relative min-h-screen overflow-hidden flex flex-col"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* ── Background slider ── */}
      {HERO_IMAGES.map((img, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}>
          <img
            src={img.url}
            alt={img.label}
            loading={i === 0 ? 'eager' : 'lazy'}
            className={`w-full h-full object-cover ${i === current ? 'animate-ken-burns' : ''}`}
          />
        </div>
      ))}

      {/* deep gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/75 z-10" />

      {/* ── Content ── */}
      <div className="relative z-20 flex flex-col items-center justify-center flex-1 pt-28 pb-12 px-4">

        {/* eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4 text-center"
        >
          Atlanta Metro Real Estate
        </motion.p>

        {/* headline */}
        <AnimatePresence mode="wait">
          <motion.h1
            key={current}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.55 }}
            className="text-white font-heading font-semibold text-4xl md:text-6xl lg:text-7xl text-center leading-tight mb-2"
          >
            Find Your <span className="text-gold italic">Dream Home.</span>
          </motion.h1>
        </AnimatePresence>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-white/60 font-body text-sm md:text-base text-center mb-10 max-w-md"
        >
          6,000+ deals closed · 20+ years serving Atlanta Metro
        </motion.p>

        {/* ── Search card ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-3xl"
        >
          {/* glowing border wrapper */}
          <div className="relative rounded-3xl p-[2px]"
            style={{ background: 'linear-gradient(135deg, #C8A96E 0%, #AC1E32 50%, #C8A96E 100%)' }}>
            <div className="bg-white/10 backdrop-blur-2xl rounded-[22px] overflow-hidden">

              {/* Tabs row */}
              <div className="flex items-center gap-1 px-5 pt-4 pb-2">
                {['Buy', 'Rent', 'Sold'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-200 ${
                      activeTab === tab
                        ? 'bg-white text-[#AC1E32] shadow-md'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* ── Big location input ── */}
              <div className={`flex items-center gap-3 mx-4 mb-3 px-4 py-3 rounded-2xl transition-all duration-300 ${
                focused ? 'bg-white shadow-lg ring-2 ring-gold/60' : 'bg-white/15'
              }`}>
                <MdLocationOn className={`flex-shrink-0 text-xl transition-colors ${focused ? 'text-[#AC1E32]' : 'text-gold'}`} />
                <input
                  type="text"
                  value={city}
                  onChange={e => setCity(e.target.value)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  onKeyDown={e => e.key === 'Enter' && handleSearch()}
                  placeholder={phText || ' '}
                  className={`flex-1 bg-transparent border-none outline-none text-base font-semibold placeholder:font-normal transition-colors ${
                    focused ? 'text-gray-900 placeholder:text-gray-400' : 'text-white placeholder:text-white/50'
                  }`}
                />
                {city && (
                  <button onClick={() => setCity('')} className="text-gray-400 hover:text-gray-600 text-lg leading-none">×</button>
                )}
              </div>

              {/* ── Filter row ── */}
              <div className="flex flex-wrap gap-2 px-4 pb-4">

                {/* Property type chips */}
                <div className="flex items-center gap-1.5 flex-wrap">
                  {PROPERTY_TYPES.map(t => (
                    <button
                      key={t}
                      onClick={() => setPropertyType(t)}
                      className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-150 ${
                        propertyType === t
                          ? 'bg-gold text-navy shadow-sm scale-105'
                          : 'bg-white/15 text-white/80 hover:bg-white/25'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>

                {/* Divider */}
                <div className="w-px bg-white/20 mx-1 self-stretch hidden sm:block" />

                {/* Beds */}
                <div className="flex items-center gap-1">
                  <span className="text-white/50 text-xs mr-1">Beds</span>
                  {BEDS_OPTS.map(b => (
                    <button
                      key={b}
                      onClick={() => setBeds(b)}
                      className={`w-8 h-8 rounded-full text-xs font-bold transition-all duration-150 ${
                        beds === b
                          ? 'bg-[#AC1E32] text-white shadow-md scale-110'
                          : 'bg-white/15 text-white/80 hover:bg-white/25'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>

                {/* Divider */}
                <div className="w-px bg-white/20 mx-1 self-stretch hidden sm:block" />

                {/* Price range */}
                <div className="flex items-center gap-1.5">
                  <span className="text-white/50 text-xs">$</span>
                  <select
                    value={minPrice}
                    onChange={e => setMinPrice(e.target.value)}
                    className="bg-white/15 text-white text-xs font-semibold rounded-full px-2 py-1 border-none outline-none cursor-pointer appearance-none"
                  >
                    {MIN_PRICES.map(p => <option key={p} className="text-gray-900">{p}</option>)}
                  </select>
                  <span className="text-white/40 text-xs">–</span>
                  <select
                    value={maxPrice}
                    onChange={e => setMaxPrice(e.target.value)}
                    className="bg-white/15 text-white text-xs font-semibold rounded-full px-2 py-1 border-none outline-none cursor-pointer appearance-none"
                  >
                    {MAX_PRICES.map(p => <option key={p} className="text-gray-900">{p}</option>)}
                  </select>
                </div>
              </div>

              {/* ── Search button + Advanced Search ── */}
              <div className="px-4 pb-4 flex gap-3">
                <button
                  onClick={handleSearch}
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl font-body font-bold text-base tracking-wide transition-all duration-200 active:scale-[0.98] shadow-xl hover:shadow-2xl"
                  style={{ background: 'linear-gradient(135deg, #AC1E32 0%, #7a1020 100%)' }}
                >
                  <MdSearch size={20} className="text-gold" />
                  <span className="text-white">Search Properties</span>
                  <span className="text-gold/60 text-sm ml-1">→</span>
                </button>

                <Link
                  to="/search"
                  className="flex items-center gap-2 px-5 py-3.5 rounded-2xl font-body font-bold text-sm transition-all duration-200 active:scale-[0.98] whitespace-nowrap border-2 border-gold bg-black/40 text-gold hover:bg-gold hover:text-navy backdrop-blur-sm shadow-lg"
                >
                  <MdTune size={17} />
                  Advanced Search
                </Link>
              </div>

            </div>
          </div>
        </motion.div>

        {/* ── Slide nav dots ── */}
        <div className="flex items-center gap-3 mt-8">
          <button onClick={prev} className="text-white/40 hover:text-white transition-colors">
            <FiChevronLeft size={18} />
          </button>
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current ? 'bg-gold w-7 h-2' : 'bg-white/30 w-2 h-2 hover:bg-white/50'
              }`}
            />
          ))}
          <button onClick={next} className="text-white/40 hover:text-white transition-colors">
            <FiChevronRight size={18} />
          </button>
        </div>

      </div>
    </section>
  )
}
