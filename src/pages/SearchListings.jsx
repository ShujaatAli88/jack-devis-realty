import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  MdSearch, MdHome, MdApartment, MdLandscape, MdBusiness,
  MdLocationCity, MdAttachMoney, MdBed, MdBathtub, MdTune, MdClose,
} from 'react-icons/md'
import { FiMapPin, FiHash, FiAlertCircle, FiMap } from 'react-icons/fi'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

/* ─── Data ─────────────────────────────────────── */
const TABS = [
  { id: 'advanced',    label: 'Advanced Search',   icon: MdTune },
  { id: 'condo',       label: 'Condo Search',       icon: MdApartment },
  { id: 'zip',         label: 'Zip Search',         icon: FiMapPin },
  { id: 'foreclosure', label: 'Foreclosure Search', icon: FiAlertCircle },
  { id: 'mls',         label: 'MLS Number',         icon: FiHash },
  { id: 'sold',        label: 'Sold Search',        icon: MdHome },
  { id: 'address',     label: 'Address Search',     icon: MdLocationCity },
]

const CITIES = [
  'All','Acworth','Alpharetta','Atlanta','Austell','Avondale Estates','Brookhaven',
  'Buford','Canton','Cartersville','Chamblee','College Park','Conyers','Covington',
  'Cumming','Decatur','Doraville','Douglasville','Duluth','Dunwoody','East Point',
  'Fairburn','Fayetteville','Forest Park','Gainesville','Johns Creek','Kennesaw',
  'Lawrenceville','Lilburn','Lithonia','Mableton','Marietta','McDonough','Milton',
  'Norcross','Peachtree City','Powder Springs','Riverdale','Roswell','Sandy Springs',
  'Smyrna','Snellville','Stone Mountain','Stockbridge','Tucker','Union City','Woodstock',
]

const SUBDIVISIONS = [
  'All','Buckhead','Cascade Heights','Collier Hills','Druid Hills','East Atlanta',
  'Grant Park','Inman Park','Kirkwood','Lake Claire','Midtown','Morningside',
  'Old Fourth Ward','Oakhurst','Poncey-Highland','Summerhill','Sweet Auburn',
  'Vine City','Virginia-Highland','West End','Westview','Winnona Park',
]

const PRICE_OPTS    = ['No Limit','$50K','$100K','$150K','$200K','$250K','$300K','$350K','$400K','$500K','$600K','$750K','$1M','$1.5M','$2M+']
const PROP_TYPES    = [
  { key: 'Home',      label: 'Home',      icon: MdHome },
  { key: 'Condo',     label: 'Condo',     icon: MdApartment },
  { key: 'Land',      label: 'Land',      icon: MdLandscape },
  { key: 'Multi-Res', label: 'Multi-Res', icon: MdBusiness },
]
const BED_OPTS      = ['Any','1+','2+','3+','4+','5+']
const BATH_OPTS     = ['Any','1+','2+','3+','4+']
const SQFT_OPTS     = ['No Pref','500+','750+','1,000+','1,500+','2,000+','2,500+','3,000+','4,000+','5,000+']
const STORY_OPTS    = ['All','1','2','3+']
const BASEMENT_OPTS = ['No Pref','Yes','No','Finished','Unfinished']
const YEAR_OPTS     = ['No Pref','2020+','2010+','2000+','1990+','1980+','Before 1980']

/* ─── Reusable pieces ───────────────────────────── */

function SectionTitle({ icon: Icon, children }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <div className="w-7 h-7 rounded-lg bg-[#AC1E32]/10 flex items-center justify-center">
        <Icon className="text-[#AC1E32]" size={15} />
      </div>
      <span className="font-body text-xs font-bold text-gray-500 uppercase tracking-widest">{children}</span>
    </div>
  )
}

function PropCard({ icon: Icon, label, active, onClick }) {
  return (
    <motion.button whileTap={{ scale: 0.93 }} onClick={onClick}
      className={`flex flex-col items-center justify-center gap-2.5 p-4 rounded-2xl border-2 cursor-pointer transition-all duration-200 ${
        active
          ? 'bg-[#AC1E32] border-[#AC1E32] text-white shadow-lg shadow-[#AC1E32]/25'
          : 'bg-white border-gray-100 text-gray-400 hover:border-[#AC1E32]/30 hover:text-[#AC1E32] hover:bg-[#AC1E32]/5'
      }`}
    >
      <Icon size={28} />
      <span className="font-body text-xs font-bold">{label}</span>
    </motion.button>
  )
}

function StepBtn({ value, active, onClick }) {
  return (
    <motion.button whileTap={{ scale: 0.88 }} onClick={onClick}
      className={`h-10 px-4 rounded-xl font-body font-bold text-sm transition-all duration-150 ${
        active
          ? 'bg-[#AC1E32] text-white shadow-md shadow-[#AC1E32]/30'
          : 'bg-white border-2 border-gray-100 text-gray-500 hover:border-[#AC1E32]/40 hover:text-[#AC1E32]'
      }`}
    >
      {value}
    </motion.button>
  )
}

function PriceSelect({ label, value, onChange }) {
  return (
    <div className="flex-1">
      <p className="font-body text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">{label}</p>
      <div className="relative">
        <select value={value} onChange={e => onChange(e.target.value)}
          className="w-full border-2 border-gray-100 hover:border-[#AC1E32]/40 focus:border-[#AC1E32] rounded-xl px-3 py-2.5 font-body text-sm font-semibold text-gray-700 bg-white outline-none transition-all appearance-none cursor-pointer pr-8">
          {PRICE_OPTS.map(o => <option key={o}>{o}</option>)}
        </select>
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">▾</span>
      </div>
    </div>
  )
}

function SmallSelect({ label, value, onChange, options }) {
  return (
    <div>
      <p className="font-body text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">{label}</p>
      <div className="relative">
        <select value={value} onChange={e => onChange(e.target.value)}
          className="w-full border-2 border-gray-100 hover:border-[#AC1E32]/40 focus:border-[#AC1E32] rounded-xl px-3 py-2 font-body text-sm font-semibold text-gray-700 bg-white outline-none transition-all appearance-none cursor-pointer pr-7">
          {options.map(o => <option key={o}>{o}</option>)}
        </select>
        <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs">▾</span>
      </div>
    </div>
  )
}

function ScrollBox({ label, value, onChange, options }) {
  return (
    <div className="flex flex-col">
      <p className="font-body text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">{label}</p>
      <div className="border-2 border-gray-100 rounded-xl overflow-hidden focus-within:border-[#AC1E32] transition-all">
        <select multiple size={10} value={[value]} onChange={e => onChange(e.target.value)}
          className="w-full font-body text-sm text-gray-700 bg-white outline-none cursor-pointer"
          style={{ scrollbarWidth: 'thin', scrollbarColor: '#AC1E32 #f5f5f5' }}>
          {options.map(o => (
            <option key={o} value={o}
              style={value === o ? { background: '#AC1E32', color: '#fff', fontWeight: 600 } : {}}
            >{o}</option>
          ))}
        </select>
      </div>
      {value !== 'All' && (
        <button onClick={() => onChange('All')}
          className="self-start mt-1 font-body text-[10px] text-[#AC1E32] hover:underline flex items-center gap-0.5">
          <MdClose size={10} /> Clear
        </button>
      )}
    </div>
  )
}

function TextInput({ label, value, onChange, placeholder }) {
  return (
    <div>
      <p className="font-body text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">{label}</p>
      <input type="text" value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
        className="w-full border-2 border-gray-100 hover:border-[#AC1E32]/40 focus:border-[#AC1E32] rounded-xl px-4 py-3 font-body text-sm font-medium text-gray-700 outline-none transition-all bg-white placeholder:text-gray-300" />
    </div>
  )
}

/* ─── Active filter chips ────────────────────────── */
function FilterChip({ label, onRemove }) {
  return (
    <span className="inline-flex items-center gap-1.5 bg-[#AC1E32]/10 text-[#AC1E32] border border-[#AC1E32]/20 font-body text-xs font-semibold rounded-full px-3 py-1">
      {label}
      <button onClick={onRemove} className="hover:text-[#7a1020]"><MdClose size={12} /></button>
    </span>
  )
}

/* ─── Shared search tabs reuse ───────────────────── */
function CommonFilters({ city, setCity, minPrice, setMinPrice, maxPrice, setMaxPrice, beds, setBeds, baths, setBaths }) {
  return (
    <div className="p-6 space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <ScrollBox label="City" value={city} onChange={setCity} options={CITIES} />
        <div className="space-y-4">
          <div className="flex gap-3">
            <PriceSelect label="Min Price" value={minPrice} onChange={setMinPrice} />
            <PriceSelect label="Max Price" value={maxPrice} onChange={setMaxPrice} />
          </div>
          <div>
            <SectionTitle icon={MdBed}>Min Bedrooms</SectionTitle>
            <div className="flex gap-2 flex-wrap">{BED_OPTS.map(b => <StepBtn key={b} value={b} active={beds===b} onClick={() => setBeds(b)} />)}</div>
          </div>
          <div>
            <SectionTitle icon={MdBathtub}>Min Bathrooms</SectionTitle>
            <div className="flex gap-2 flex-wrap">{BATH_OPTS.map(b => <StepBtn key={b} value={b} active={baths===b} onClick={() => setBaths(b)} />)}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Page ───────────────────────────────────────── */
export default function SearchListings() {
  const navigate = useNavigate()
  const [activeTab,   setActiveTab]   = useState('advanced')
  const [city,        setCity]        = useState('All')
  const [subdivision, setSubdivision] = useState('All')
  const [propTypes,   setPropTypes]   = useState({ Home: true, Condo: false, Land: false, 'Multi-Res': false })
  const [minPrice,    setMinPrice]    = useState('No Limit')
  const [maxPrice,    setMaxPrice]    = useState('No Limit')
  const [beds,        setBeds]        = useState('Any')
  const [baths,       setBaths]       = useState('Any')
  const [minSqft,     setMinSqft]     = useState('No Pref')
  const [stories,     setStories]     = useState('All')
  const [basement,    setBasement]    = useState('No Pref')
  const [yearBuilt,   setYearBuilt]   = useState('No Pref')
  const [zip,         setZip]         = useState('')
  const [mls,         setMls]         = useState('')
  const [address,     setAddress]     = useState('')

  const toggleType = key => setPropTypes(p => ({ ...p, [key]: !p[key] }))

  const buildParams = () => {
    const params = new URLSearchParams()
    if (city !== 'All') params.set('location', city)
    if (beds !== 'Any') params.set('beds', beds)
    if (zip) params.set('zip', zip)
    if (mls) params.set('mls', mls)
    if (address) params.set('address', address)
    return params.toString()
  }

  const handleSearch  = () => navigate(`/search?${buildParams()}`)
  const handleMapSearch = () => navigate(`/search?${buildParams()}&view=map`)

  const resetAll = () => {
    setCity('All'); setSubdivision('All')
    setPropTypes({ Home: true, Condo: false, Land: false, 'Multi-Res': false })
    setMinPrice('No Limit'); setMaxPrice('No Limit')
    setBeds('Any'); setBaths('Any')
    setMinSqft('No Pref'); setStories('All'); setBasement('No Pref'); setYearBuilt('No Pref')
    setZip(''); setMls(''); setAddress('')
  }

  // active filter chips
  const chips = [
    city !== 'All'            && { label: `City: ${city}`,           remove: () => setCity('All') },
    subdivision !== 'All'     && { label: `Area: ${subdivision}`,    remove: () => setSubdivision('All') },
    beds !== 'Any'            && { label: `${beds} Beds`,            remove: () => setBeds('Any') },
    baths !== 'Any'           && { label: `${baths} Baths`,          remove: () => setBaths('Any') },
    minPrice !== 'No Limit'   && { label: `Min ${minPrice}`,         remove: () => setMinPrice('No Limit') },
    maxPrice !== 'No Limit'   && { label: `Max ${maxPrice}`,         remove: () => setMaxPrice('No Limit') },
  ].filter(Boolean)

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
      className="min-h-screen bg-[#F2F2F2]">
      <Helmet>
        <title>Advanced Property Search | Jack Davis Realty</title>
        <meta name="description" content="Search Atlanta Metro real estate with advanced filters — city, price, beds, property type, subdivision and more." />
      </Helmet>

      <Navbar />

      {/* Hero */}
      <div className="relative bg-navy overflow-hidden pt-28 pb-12 px-4 text-center">
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(ellipse at 15% 60%, #AC1E32 0%, transparent 55%), radial-gradient(ellipse at 85% 40%, #AC1E32 0%, transparent 55%)' }} />
        <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="font-body text-[11px] text-white/70 uppercase tracking-[0.3em] mb-2">Jack Davis Realty</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }}
          className="font-heading text-4xl md:text-5xl font-semibold text-white mb-3">Find Your Perfect Property</motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.28 }}
          className="font-body text-white/50 text-sm">Atlanta Metro · 30,000+ FMLS Listings · Updated Daily</motion.p>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8 pb-16">

        {/* Active filter chips */}
        <AnimatePresence>
          {chips.length > 0 && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
              className="flex flex-wrap gap-2 mb-4">
              {chips.map((c, i) => <FilterChip key={i} label={c.label} onRemove={c.remove} />)}
              <button onClick={resetAll} className="font-body text-xs text-gray-400 hover:text-[#AC1E32] transition-colors ml-1 underline-offset-2 hover:underline">
                Clear all
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 }}
          className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">

          {/* Tab strip */}
          <div className="flex overflow-x-auto border-b border-gray-100 bg-gray-50/50" style={{ scrollbarWidth: 'none' }}>
            {TABS.map(tab => {
              const Icon = tab.icon
              const on = activeTab === tab.id
              return (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-5 py-4 font-body text-[11px] font-bold uppercase tracking-wider whitespace-nowrap border-b-2 transition-all duration-200 shrink-0 ${
                    on ? 'border-[#AC1E32] text-[#AC1E32] bg-white' : 'border-transparent text-gray-400 hover:text-[#AC1E32] hover:bg-white/80'
                  }`}>
                  <Icon size={13} />
                  {tab.label}
                </button>
              )
            })}
          </div>

          {/* Tab body */}
          <AnimatePresence mode="wait">
            <motion.div key={activeTab}
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}>

              {/* ── ADVANCED ── */}
              {activeTab === 'advanced' && (
                <div className="p-6 space-y-5">

                  {/* Row 1 — Location */}
                  <div className="bg-[#F2F2F2] rounded-2xl p-5 border border-gray-100">
                    <SectionTitle icon={MdLocationCity}>Location</SectionTitle>
                    <div className="grid grid-cols-2 gap-4">
                      <ScrollBox label="City" value={city} onChange={setCity} options={CITIES} />
                      <ScrollBox label="Subdivision / Neighborhood" value={subdivision} onChange={setSubdivision} options={SUBDIVISIONS} />
                    </div>
                    <p className="font-body text-[10px] text-gray-400 mt-3">
                      Hold <kbd className="bg-white border border-gray-200 rounded px-1.5 py-0.5 font-mono text-[10px]">Ctrl</kbd> / <kbd className="bg-white border border-gray-200 rounded px-1.5 py-0.5 font-mono text-[10px]">⌘</kbd> to select multiple.
                    </p>
                  </div>

                  {/* Row 2 — Property type + Price */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="bg-[#F2F2F2] rounded-2xl p-5 border border-gray-100">
                      <SectionTitle icon={MdHome}>Property Type</SectionTitle>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {PROP_TYPES.map(pt => (
                          <PropCard key={pt.key} icon={pt.icon} label={pt.label}
                            active={propTypes[pt.key]} onClick={() => toggleType(pt.key)} />
                        ))}
                      </div>
                    </div>

                    <div className="bg-[#F2F2F2] rounded-2xl p-5 border border-gray-100">
                      <SectionTitle icon={MdAttachMoney}>Price Range</SectionTitle>
                      <div className="flex items-end gap-3">
                        <PriceSelect label="Minimum" value={minPrice} onChange={setMinPrice} />
                        <div className="pb-3 text-gray-300 font-bold text-lg">—</div>
                        <PriceSelect label="Maximum" value={maxPrice} onChange={setMaxPrice} />
                      </div>
                    </div>
                  </div>

                  {/* Row 3 — Beds + Baths */}
                  <div className="bg-[#F2F2F2] rounded-2xl p-5 border border-gray-100">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <SectionTitle icon={MdBed}>Bedrooms</SectionTitle>
                        <div className="flex gap-2 flex-wrap">
                          {BED_OPTS.map(b => <StepBtn key={b} value={b} active={beds===b} onClick={() => setBeds(b)} />)}
                        </div>
                      </div>
                      <div>
                        <SectionTitle icon={MdBathtub}>Bathrooms</SectionTitle>
                        <div className="flex gap-2 flex-wrap">
                          {BATH_OPTS.map(b => <StepBtn key={b} value={b} active={baths===b} onClick={() => setBaths(b)} />)}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 4 — More filters */}
                  <div className="bg-[#F2F2F2] rounded-2xl p-5 border border-gray-100">
                    <SectionTitle icon={MdTune}>Additional Filters</SectionTitle>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <SmallSelect label="Min Sq. Feet"   value={minSqft}   onChange={setMinSqft}   options={SQFT_OPTS} />
                      <SmallSelect label="Stories"         value={stories}   onChange={setStories}   options={STORY_OPTS} />
                      <SmallSelect label="Basement"        value={basement}  onChange={setBasement}  options={BASEMENT_OPTS} />
                      <SmallSelect label="Year Built"      value={yearBuilt} onChange={setYearBuilt} options={YEAR_OPTS} />
                    </div>
                  </div>
                </div>
              )}

              {/* ── CONDO ── */}
              {activeTab === 'condo' && (
                <CommonFilters city={city} setCity={setCity} minPrice={minPrice} setMinPrice={setMinPrice}
                  maxPrice={maxPrice} setMaxPrice={setMaxPrice} beds={beds} setBeds={setBeds} baths={baths} setBaths={setBaths} />
              )}

              {/* ── ZIP ── */}
              {activeTab === 'zip' && (
                <div className="p-8 max-w-sm">
                  <TextInput label="ZIP Code" value={zip} onChange={setZip} placeholder="e.g. 30030" />
                </div>
              )}

              {/* ── MLS ── */}
              {activeTab === 'mls' && (
                <div className="p-8 max-w-sm">
                  <TextInput label="MLS Listing Number" value={mls} onChange={setMls} placeholder="e.g. 7764496" />
                </div>
              )}

              {/* ── ADDRESS ── */}
              {activeTab === 'address' && (
                <div className="p-8 max-w-md">
                  <TextInput label="Street Address" value={address} onChange={setAddress} placeholder="e.g. 221 3rd Avenue, Decatur" />
                </div>
              )}

              {/* ── FORECLOSURE / SOLD ── */}
              {(activeTab === 'foreclosure' || activeTab === 'sold') && (
                <CommonFilters city={city} setCity={setCity} minPrice={minPrice} setMinPrice={setMinPrice}
                  maxPrice={maxPrice} setMaxPrice={setMaxPrice} beds={beds} setBeds={setBeds} baths={baths} setBaths={setBaths} />
              )}

              {/* ── Footer actions ── */}
              <div className="flex items-center gap-3 px-6 py-5 border-t border-gray-100 bg-gray-50/40">
                <motion.button whileTap={{ scale: 0.97 }} onClick={handleSearch}
                  className="flex items-center gap-2 px-10 py-3.5 rounded-full font-body font-bold text-sm text-white shadow-lg hover:shadow-xl transition-shadow"
                  style={{ background: 'linear-gradient(135deg, #AC1E32 0%, #7a1020 100%)' }}>
                  <MdSearch size={18} />
                  Search
                  {chips.length > 0 && (
                    <span className="bg-white/25 text-white text-[10px] rounded-full px-2 py-0.5 font-bold">
                      {chips.length}
                    </span>
                  )}
                </motion.button>

                <motion.button whileTap={{ scale: 0.97 }} onClick={handleMapSearch}
                  className="flex items-center gap-2 px-8 py-3.5 rounded-full font-body font-bold text-sm border-2 border-navy text-navy bg-white hover:bg-navy hover:text-white transition-all shadow-sm">
                  <FiMap size={15} />
                  Map Search
                </motion.button>

                {chips.length > 0 && (
                  <button onClick={resetAll}
                    className="ml-auto font-body text-xs text-gray-400 hover:text-[#AC1E32] transition-colors flex items-center gap-1">
                    <MdClose size={13} /> Reset filters
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <p className="text-center font-body text-[11px] text-gray-400 mt-5 leading-relaxed">
          Listings sourced from the FMLS IDX Compilation · 30,000+ active Atlanta Metro properties · Updated daily<br />
          Information deemed reliable but not guaranteed. © 2026 FMLS
        </p>
      </div>

      <Footer />
    </motion.div>
  )
}
