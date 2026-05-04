import { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MdSearch, MdLocationOn, MdAttachMoney, MdHome, MdBed,
} from 'react-icons/md'
import { FiChevronDown } from 'react-icons/fi'

const HERO_IMAGES = [
  { url: '/image_1.jpg', label: 'Luxury Homes' },
  { url: '/image_2.jpg', label: 'Modern Living' },
  { url: '/image_3.jpg', label: 'Dream Properties' },
]

const PROPERTY_TYPES = ['All Types', 'Home', 'Condo', 'Townhouse', 'Land', 'Multi-Family']
const MIN_PRICES = ['No Min', '$50K', '$100K', '$200K', '$300K', '$400K', '$500K', '$750K', '$1M']
const MAX_PRICES = ['No Max', '$200K', '$300K', '$400K', '$500K', '$750K', '$1M', '$1.5M', '$2M+']
const BEDS_OPTS = ['Any Beds', '1+', '2+', '3+', '4+', '5+']
const BATHS_OPTS = ['Any Baths', '1+', '2+', '3+', '4+']

function InlineSelect({ value, onChange, options, className = '' }) {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      className={`appearance-none bg-transparent border-none outline-none text-sm font-semibold text-gray-800 cursor-pointer ${className}`}
    >
      {options.map(o => <option key={o}>{o}</option>)}
    </select>
  )
}

function MobileField({ label, value, onChange, options }) {
  return (
    <div>
      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">{label}</span>
      <div className="relative">
        <select
          value={value}
          onChange={e => onChange(e.target.value)}
          className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-800 bg-white outline-none w-full appearance-none cursor-pointer pr-7 focus:ring-2 focus:ring-amber-400"
        >
          {options.map(o => <option key={o}>{o}</option>)}
        </select>
        <FiChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={12} />
      </div>
    </div>
  )
}

export default function Hero() {
  const navigate = useNavigate()

  // — Slider state —
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [progress, setProgress] = useState(0)
  const touchStartX = useRef(null)

  // — Search state —
  const [activeTab, setActiveTab] = useState('Buy')
  const [city, setCity] = useState('')
  const [propertyType, setPropertyType] = useState('All Types')
  const [minPrice, setMinPrice] = useState('No Min')
  const [maxPrice, setMaxPrice] = useState('No Max')
  const [beds, setBeds] = useState('Any Beds')
  const [baths, setBaths] = useState('Any Baths')

  const next = useCallback(() => { setCurrent(c => (c + 1) % HERO_IMAGES.length); setProgress(0) }, [])
  const prev = useCallback(() => { setCurrent(c => (c - 1 + HERO_IMAGES.length) % HERO_IMAGES.length); setProgress(0) }, [])
  const goTo = useCallback((idx) => { setCurrent(idx); setProgress(0) }, [])

  useEffect(() => {
    if (paused) return
    let elapsed = 0
    const DURATION = 2000
    const TICK = 50
    const progressTimer = setInterval(() => {
      elapsed += TICK
      setProgress(Math.min((elapsed / DURATION) * 100, 100))
    }, TICK)
    const slideTimer = setTimeout(next, DURATION)
    return () => { clearInterval(progressTimer); clearTimeout(slideTimer) }
  }, [current, paused, next])

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
    if (beds !== 'Any Beds') params.set('beds', beds)
    if (baths !== 'Any Baths') params.set('baths', baths)
    params.set('tab', activeTab)
    navigate(`/search?${params.toString()}`)
  }

  const slideNum = String(current + 1).padStart(2, '0')
  const totalNum = String(HERO_IMAGES.length).padStart(2, '0')

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* ── Background slider ── */}
      {HERO_IMAGES.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            key={i === current ? `active-${current}` : `inactive-${i}`}
            src={img.url}
            alt={img.label}
            loading={i === 0 ? 'eager' : 'lazy'}
            className={`w-full h-full object-cover ${i === current ? 'animate-ken-burns' : ''}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
        </div>
      ))}

      {/* ── Slide counter ── */}
      <div className="absolute top-24 right-6 z-20 text-white/60 text-sm font-mono hidden md:block tracking-widest">
        {slideNum} / {totalNum}
      </div>

      {/* ── Hero text — aligned with navbar ── */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center pt-28 pb-72 md:pb-40">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-amber-400 text-sm font-medium tracking-[0.2em] uppercase mb-4"
          >
            Atlanta Metro Real Estate
          </motion.p>

          <AnimatePresence mode="wait">
            <motion.h1
              key={current}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="text-white font-heading font-semibold text-5xl md:text-7xl lg:text-8xl leading-[1.05]"
            >
              Find Your <br />
              <span className="text-amber-400 italic">Dream Home.</span>
            </motion.h1>
          </AnimatePresence>

          {/* Dot indicators */}
          <div className="flex items-center gap-2 mt-10">
            {HERO_IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? 'bg-amber-400 w-8 h-2' : 'bg-white/40 w-2 h-2 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Buy/Rent/Sold tabs — desktop, float above search band ── */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 hidden md:flex gap-1 bg-red-950/50 backdrop-blur-md rounded-full p-1 border border-white/10 z-30">
        {['Buy', 'Rent', 'Sold'].map(tab => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
              activeTab === tab ? 'bg-white text-red-900 shadow-sm' : 'text-white/90 hover:text-white hover:bg-white/10'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ── Desktop search band ── */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#FAFAF8] border-t-[3px] border-amber-400 shadow-2xl z-20 hidden md:block">
        {/* Animated progress bar — top edge of the band */}
        <div
          className="absolute top-0 left-0 h-0.5 bg-amber-400"
          style={{ width: `${progress}%`, transition: 'none' }}
        />

        <div className="max-w-7xl mx-auto flex items-stretch h-20 divide-x divide-amber-100">

          {/* Location */}
          <div className="flex flex-col justify-center px-6 flex-[2] hover:bg-amber-50 transition-colors cursor-text group">
            <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-0.5">Location</span>
            <div className="flex items-center gap-1.5">
              <MdLocationOn className="text-amber-500 flex-shrink-0" size={15} />
              <input
                type="text"
                value={city}
                onChange={e => setCity(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSearch()}
                placeholder="City, Neighborhood, ZIP"
                className="appearance-none bg-transparent border-none outline-none text-sm font-semibold text-gray-800 placeholder:font-normal placeholder:text-gray-400 w-full"
              />
            </div>
          </div>

          {/* Property Type */}
          <div className="flex flex-col justify-center px-6 flex-1 hover:bg-amber-50 transition-colors cursor-pointer">
            <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-0.5">Property Type</span>
            <div className="flex items-center gap-1.5">
              <MdHome className="text-amber-500 flex-shrink-0" size={15} />
              <InlineSelect value={propertyType} onChange={setPropertyType} options={PROPERTY_TYPES} className="w-full" />
            </div>
          </div>

          {/* Price Range */}
          <div className="flex flex-col justify-center px-6 flex-1 hover:bg-amber-50 transition-colors cursor-pointer">
            <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-0.5">Price Range</span>
            <div className="flex items-center gap-1.5">
              <MdAttachMoney className="text-amber-500 flex-shrink-0" size={15} />
              <div className="flex items-center gap-1.5 min-w-0">
                <InlineSelect value={minPrice} onChange={setMinPrice} options={MIN_PRICES} />
                <span className="text-gray-300 text-xs flex-shrink-0">–</span>
                <InlineSelect value={maxPrice} onChange={setMaxPrice} options={MAX_PRICES} />
              </div>
            </div>
          </div>

          {/* Beds & Baths */}
          <div className="flex flex-col justify-center px-6 flex-1 hover:bg-amber-50 transition-colors cursor-pointer">
            <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-0.5">Beds &amp; Baths</span>
            <div className="flex items-center gap-1.5">
              <MdBed className="text-amber-500 flex-shrink-0" size={15} />
              <div className="flex items-center gap-1.5">
                <InlineSelect value={beds} onChange={setBeds} options={BEDS_OPTS} />
                <span className="text-gray-300 text-xs flex-shrink-0">·</span>
                <InlineSelect value={baths} onChange={setBaths} options={BATHS_OPTS} />
              </div>
            </div>
          </div>

          {/* Search button */}
          <button
            type="button"
            onClick={handleSearch}
            className="bg-gradient-to-b from-red-700 to-red-900 hover:from-red-800 hover:to-red-950 text-white font-bold px-10 flex items-center gap-2 transition-all active:scale-95 text-base whitespace-nowrap shadow-lg"
          >
            <MdSearch size={22} />
            Search
          </button>

        </div>
      </div>

      {/* ── Mobile search card ── */}
      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl p-5 md:hidden z-20">

        {/* Tabs */}
        <div className="flex justify-center mb-4">
          <div className="flex gap-0.5 bg-gray-100 rounded-full p-1">
            {['Buy', 'Rent', 'Sold'].map(tab => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Location (full width) */}
        <div className="mb-2.5">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Location</span>
          <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2.5 focus-within:ring-2 focus-within:ring-amber-400">
            <MdLocationOn className="text-amber-500 flex-shrink-0" size={14} />
            <input
              type="text"
              value={city}
              onChange={e => setCity(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSearch()}
              placeholder="City, Neighborhood, ZIP"
              className="text-sm font-medium text-gray-800 placeholder:text-gray-400 outline-none bg-transparent w-full"
            />
          </div>
        </div>

        {/* 2×2 fields */}
        <div className="grid grid-cols-2 gap-2.5 mb-3">
          <MobileField label="Property Type" value={propertyType} onChange={setPropertyType} options={PROPERTY_TYPES} />
          <MobileField label="Min Price" value={minPrice} onChange={setMinPrice} options={MIN_PRICES} />
          <MobileField label="Beds" value={beds} onChange={setBeds} options={BEDS_OPTS} />
          <MobileField label="Baths" value={baths} onChange={setBaths} options={BATHS_OPTS} />
        </div>

        <button
          type="button"
          onClick={handleSearch}
          className="bg-navy hover:bg-navy-dark text-white font-bold py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 w-full transition-all active:scale-95"
        >
          <MdSearch size={18} />
          Search Properties
        </button>
      </div>

    </section>
  )
}
