import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import Navbar from '../components/Navbar'
import PageHero from '../components/PageHero'
import ListingCard from '../components/ListingCard'
import Footer from '../components/Footer'
import { useListings } from '../hooks/useListings'

// MLS_READY: Wire filters to IDX API query params

const PROPERTY_TYPES = ['any', 'Single Family', 'Luxury Estate', 'Waterfront', 'Condo', 'Townhome']

export default function SearchListings() {
  const [draft, setDraft] = useState({
    location: '',
    minPrice: '',
    maxPrice: '',
    beds: 'any',
    baths: 'any',
    propertyType: 'any',
  })
  const [active, setActive] = useState({})
  const { listings, loading } = useListings(active)

  function handleSearch(e) {
    e.preventDefault()
    setActive({ ...draft })
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Helmet>
        <title>Search Homes | Jack Davis Realty – Atlanta Metro</title>
        <meta
          name="description"
          content="Search all Atlanta Metro area real estate for sale on one easy-to-use site. Homes, condos, townhomes, land, and foreclosure properties."
        />
      </Helmet>

      <Navbar />
      <PageHero
        title="Search Homes"
        breadcrumb="Home Search"
        image="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&auto=format&fit=crop&q=80"
      />

      {/* Filter bar */}
      <section className="bg-navy py-8 px-4 sticky top-16 z-40 shadow-xl">
        <div className="max-w-7xl mx-auto">
          <form
            onSubmit={handleSearch}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 items-end"
          >
            {/* Location */}
            <div className="col-span-2 sm:col-span-3 lg:col-span-2">
              <label className="font-body text-xs text-white/50 uppercase tracking-wider block mb-1">
                Location
              </label>
              <input
                type="text"
                value={draft.location}
                onChange={(e) => setDraft({ ...draft, location: e.target.value })}
                placeholder="Decatur, Atlanta, zip..."
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 font-body text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
              />
            </div>

            {/* Min price */}
            <div>
              <label className="font-body text-xs text-white/50 uppercase tracking-wider block mb-1">
                Min Price
              </label>
              <input
                type="number"
                value={draft.minPrice}
                onChange={(e) => setDraft({ ...draft, minPrice: e.target.value })}
                placeholder="$0"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 font-body text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
              />
            </div>

            {/* Max price */}
            <div>
              <label className="font-body text-xs text-white/50 uppercase tracking-wider block mb-1">
                Max Price
              </label>
              <input
                type="number"
                value={draft.maxPrice}
                onChange={(e) => setDraft({ ...draft, maxPrice: e.target.value })}
                placeholder="Any"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 font-body text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
              />
            </div>

            {/* Beds */}
            <div>
              <label className="font-body text-xs text-white/50 uppercase tracking-wider block mb-1">
                Beds
              </label>
              <select
                value={draft.beds}
                onChange={(e) => setDraft({ ...draft, beds: e.target.value })}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 font-body text-sm text-white focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
              >
                {['any', '1', '2', '3', '4', '5'].map((v) => (
                  <option key={v} value={v} className="bg-navy text-white">
                    {v === 'any' ? 'Any' : `${v}+`}
                  </option>
                ))}
              </select>
            </div>

            {/* Property type */}
            <div>
              <label className="font-body text-xs text-white/50 uppercase tracking-wider block mb-1">
                Type
              </label>
              <select
                value={draft.propertyType}
                onChange={(e) => setDraft({ ...draft, propertyType: e.target.value })}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 font-body text-sm text-white focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
              >
                {PROPERTY_TYPES.map((v) => (
                  <option key={v} value={v} className="bg-navy text-white">
                    {v === 'any' ? 'Any Type' : v}
                  </option>
                ))}
              </select>
            </div>

            {/* Search button */}
            <button
              type="submit"
              className="btn-gold flex items-center justify-center gap-2 py-2.5"
            >
              <FiSearch className="w-4 h-4" />
              Search
            </button>
          </form>
        </div>
      </section>

      {/* Results */}
      <section className="bg-ivory py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-heading text-2xl font-semibold text-navy">
              {loading ? 'Searching...' : `${listings.length} Properties Found`}
            </h2>
          </div>

          {listings.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-heading text-2xl text-gray-400 mb-4">No properties match your search.</p>
              <p className="font-body text-gray-400 text-sm">Try adjusting your filters or broadening your search area.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {listings.map((listing, i) => (
                <motion.div
                  key={listing.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  <ListingCard listing={listing} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </motion.div>
  )
}
