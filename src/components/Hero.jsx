import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiCheckCircle, FiSearch, FiX, FiChevronDown } from 'react-icons/fi'
import { MdLocationOn } from 'react-icons/md'

/* ── Search config ─────────────────────────────── */
const TABS          = ['Buy', 'Rent', 'Sold']
const PROPERTY_TYPES = ['All', 'House', 'Condo', 'Townhouse', 'Land', 'Multi-Family']
const BEDS_OPTS     = ['Any', '1+', '2+', '3+', '4+', '5+']
const MIN_PRICES    = ['No Min', '$100K', '$200K', '$300K', '$400K', '$500K', '$750K', '$1M']
const MAX_PRICES    = ['No Max', '$300K', '$400K', '$500K', '$750K', '$1M', '$1.5M', '$2M+']
const PLACEHOLDERS  = ['Atlanta, GA…', 'Decatur, GA…', 'Marietta, GA…', 'Smyrna, GA…', 'Buckhead, GA…']

const TRUST_BADGES = [
  'Licensed Georgia Brokerage',
  'Local Investor Expertise',
  'No Repairs Required',
  'Close in as Little as 14 Days',
]

/* ── Expandable Search ─────────────────────────── */
function ExpandableSearch() {
  const navigate  = useNavigate()
  const wrapRef   = useRef(null)

  const [expanded,  setExpanded]  = useState(false)
  const [tab,       setTab]       = useState('Buy')
  const [city,      setCity]      = useState('')
  const [propType,  setPropType]  = useState('All')
  const [beds,      setBeds]      = useState('Any')
  const [minPrice,  setMinPrice]  = useState('No Min')
  const [maxPrice,  setMaxPrice]  = useState('No Max')
  const [phIdx,     setPhIdx]     = useState(0)
  const [phText,    setPhText]    = useState('')
  const [phTyping,  setPhTyping]  = useState(true)

  /* Typewriter placeholder */
  useEffect(() => {
    if (expanded) return
    const target = PLACEHOLDERS[phIdx]
    if (phTyping) {
      if (phText.length < target.length) {
        const t = setTimeout(() => setPhText(target.slice(0, phText.length + 1)), 65)
        return () => clearTimeout(t)
      }
      const t = setTimeout(() => setPhTyping(false), 1400)
      return () => clearTimeout(t)
    } else {
      if (phText.length > 0) {
        const t = setTimeout(() => setPhText(phText.slice(0, -1)), 38)
        return () => clearTimeout(t)
      }
      setPhIdx(i => (i + 1) % PLACEHOLDERS.length)
      setPhTyping(true)
    }
  }, [phText, phTyping, phIdx, expanded])

  /* Close on outside click */
  useEffect(() => {
    if (!expanded) return
    const handler = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setExpanded(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [expanded])

  /* Close on Escape */
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') setExpanded(false) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const handleSearch = () => {
    const p = new URLSearchParams()
    if (city) p.set('q', city)
    if (propType !== 'All') p.set('type', propType)
    if (minPrice !== 'No Min') p.set('minPrice', minPrice)
    if (maxPrice !== 'No Max') p.set('maxPrice', maxPrice)
    if (beds !== 'Any') p.set('beds', beds)
    p.set('tab', tab)
    navigate(`/search?${p.toString()}`)
    setExpanded(false)
  }

  const activeFilters = [propType !== 'All', beds !== 'Any', minPrice !== 'No Min', maxPrice !== 'No Max'].filter(Boolean).length

  return (
    <div ref={wrapRef} className="relative z-30 -mt-6">

      <motion.div
        layout
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden rounded-2xl shadow-2xl"
        style={{ background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(16px)' }}
      >
        {/* ── Collapsed: single pill row ── */}
        <div
          className="flex items-center gap-3 px-4 py-3 cursor-pointer"
          onClick={() => setExpanded(true)}
        >
          {/* Tab pills — hidden on small mobile (shown in expanded panel instead) */}
          <div className="hidden sm:flex gap-1 shrink-0">
            {TABS.map(t => (
              <button
                key={t}
                onClick={e => { e.stopPropagation(); setTab(t); setExpanded(true) }}
                className="px-3.5 py-1.5 rounded-full font-body text-xs font-bold transition-all duration-200"
                style={tab === t
                  ? { background: '#AC1E32', color: 'white' }
                  : { background: '#f3f4f6', color: '#6b7280' }
                }
              >
                {t}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="hidden sm:block h-6 w-px bg-gray-200 shrink-0" />

          {/* Search input hint */}
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <MdLocationOn className="w-4 h-4 text-[#AC1E32] shrink-0" />
            {expanded ? (
              <input
                autoFocus
                type="text"
                value={city}
                onChange={e => setCity(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSearch()}
                placeholder="City, ZIP, or neighborhood…"
                className="flex-1 bg-transparent outline-none font-body text-sm text-gray-800 placeholder:text-gray-400 min-w-0"
                onClick={e => e.stopPropagation()}
              />
            ) : (
              <span className="font-body text-sm text-gray-400 truncate">
                {phText || 'Search properties…'}
                <span className="animate-pulse">|</span>
              </span>
            )}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2 shrink-0">
            {activeFilters > 0 && (
              <span className="w-5 h-5 rounded-full text-white font-body text-[10px] font-bold flex items-center justify-center" style={{ background: '#AC1E32' }}>
                {activeFilters}
              </span>
            )}
            {expanded ? (
              <button onClick={e => { e.stopPropagation(); setExpanded(false) }} className="p-1 text-gray-400 hover:text-gray-700 transition-colors">
                <FiX className="w-4 h-4" />
              </button>
            ) : (
              <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <FiChevronDown className="w-4 h-4 text-gray-400" />
              </motion.div>
            )}
            <button
              onClick={e => { e.stopPropagation(); handleSearch() }}
              className="flex items-center gap-1.5 font-body font-bold text-xs text-white px-4 py-2 rounded-xl transition-all duration-150 shadow-sm"
              style={{ background: '#AC1E32' }}
            >
              <FiSearch className="w-3.5 h-3.5" />
              Search
            </button>
          </div>
        </div>

        {/* ── Expanded: full filter panel ── */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              key="filters"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="px-4 pb-4 pt-1 border-t border-gray-100 space-y-4">

                {/* Tab pills — shown only on mobile (collapsed bar hides them) */}
                <div className="sm:hidden flex gap-1.5 pt-1">
                  {TABS.map(t => (
                    <button
                      key={t}
                      onClick={() => setTab(t)}
                      className="px-3.5 py-1.5 rounded-full font-body text-xs font-bold transition-all duration-200"
                      style={tab === t
                        ? { background: '#AC1E32', color: 'white' }
                        : { background: '#f3f4f6', color: '#6b7280' }
                      }
                    >{t}</button>
                  ))}
                </div>

                {/* Property Type */}
                <div>
                  <p className="font-body text-[10px] uppercase tracking-[0.2em] text-gray-400 font-semibold mb-2">Property Type</p>
                  <div className="flex flex-wrap gap-1.5">
                    {PROPERTY_TYPES.map(t => (
                      <button key={t} onClick={() => setPropType(t)}
                        className="px-3 py-1.5 rounded-xl font-body text-xs font-semibold border transition-all duration-150"
                        style={propType === t
                          ? { background: '#AC1E32', color: 'white', borderColor: '#AC1E32' }
                          : { background: '#f9fafb', color: '#4b5563', borderColor: '#f3f4f6' }
                        }
                      >{t}</button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Bedrooms */}
                  <div>
                    <p className="font-body text-[10px] uppercase tracking-[0.2em] text-gray-400 font-semibold mb-2">Bedrooms</p>
                    <div className="flex flex-wrap gap-1.5">
                      {BEDS_OPTS.map(b => (
                        <button key={b} onClick={() => setBeds(b)}
                          className="flex-1 py-2 rounded-xl font-body text-xs font-bold border transition-all duration-150"
                          style={beds === b
                            ? { background: '#AC1E32', color: 'white', borderColor: '#AC1E32' }
                            : { background: '#f9fafb', color: '#6b7280', borderColor: '#f3f4f6' }
                          }
                        >{b}</button>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <p className="font-body text-[10px] uppercase tracking-[0.2em] text-gray-400 font-semibold mb-2">Price Range</p>
                    <div className="flex items-center gap-2">
                      <select value={minPrice} onChange={e => setMinPrice(e.target.value)}
                        className="flex-1 bg-gray-50 border border-gray-100 rounded-xl px-2.5 py-2 text-xs text-gray-700 font-body outline-none cursor-pointer">
                        {MIN_PRICES.map(p => <option key={p}>{p}</option>)}
                      </select>
                      <span className="text-gray-300 text-sm">—</span>
                      <select value={maxPrice} onChange={e => setMaxPrice(e.target.value)}
                        className="flex-1 bg-gray-50 border border-gray-100 rounded-xl px-2.5 py-2 text-xs text-gray-700 font-body outline-none cursor-pointer">
                        {MAX_PRICES.map(p => <option key={p}>{p}</option>)}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Search CTA */}
                <div className="flex items-center justify-between pt-1 gap-3 flex-wrap">
                  <button
                    onClick={() => { setPropType('All'); setBeds('Any'); setMinPrice('No Min'); setMaxPrice('No Max'); setCity('') }}
                    className="font-body text-xs text-gray-400 hover:text-gray-700 transition-colors underline-offset-2 hover:underline"
                  >
                    Clear filters
                  </button>
                  <button
                    onClick={handleSearch}
                    className="flex items-center gap-2 font-body font-bold text-sm text-white px-8 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                    style={{ background: 'linear-gradient(135deg, #AC1E32 0%, #8B1828 100%)' }}
                  >
                    <FiSearch className="w-4 h-4" />
                    Advanced Search
                  </button>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

/* ── Hero ──────────────────────────────────────── */
export default function Hero() {
  return (
    <section className="bg-white pt-[72px]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6">

        {/* ── Hero Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-3xl"
          style={{ minHeight: 'clamp(250px, calc(100vh - 300px), 440px)' }}
        >
          {/* Background */}
          <img
            src="/hero_bg.jpg"
            alt="Metro Atlanta Home"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: 'center 55%' }}
            loading="eager"
          />

          {/* Gradient — left for text, subtle overall darkening */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(110deg, rgba(6,2,3,0.80) 0%, rgba(6,2,3,0.50) 50%, rgba(6,2,3,0.08) 100%)' }} />
          <div className="absolute inset-x-0 bottom-0" style={{ height: '120px', background: 'linear-gradient(to top, rgba(0,0,0,0.30) 0%, transparent 100%)' }} />

          {/* Text content */}
          <div className="relative z-10 px-5 sm:px-10 pt-6 sm:pt-8 md:pt-12 pb-6 sm:pb-8 md:pb-14 max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="font-body text-[11px] font-semibold uppercase tracking-[0.32em] text-white/60 mb-4"
            >
              Metro Atlanta's Seller Solutions Brokerage
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="font-heading font-semibold text-white leading-[1.07] mb-5"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)' }}
            >
              Get your strongest<br />
              <span className="font-bold">cash offer today.</span>
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
              No obligations, just offers.
            </motion.p>
          </div>
        </motion.div>

        {/* ── Expandable Search — floats below card ── */}
        <ExpandableSearch />

        {/* ── Trust Badges ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-x-5 sm:gap-x-8 gap-y-3 py-6 mt-4"
        >
          {TRUST_BADGES.map(badge => (
            <div key={badge} className="flex items-center gap-2">
              <FiCheckCircle className="w-4 h-4 text-[#AC1E32] shrink-0" />
              <span className="font-body text-gray-600 text-xs sm:text-sm font-medium">{badge}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
