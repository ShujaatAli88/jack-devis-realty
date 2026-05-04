import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaBed, FaBath } from 'react-icons/fa'
import { FiMaximize2 } from 'react-icons/fi'
import Navbar from '../components/Navbar'
import PageHero from '../components/PageHero'
import Footer from '../components/Footer'

const featuredListings = [
  {
    id: 1,
    address: '142 Peachtree Hills Ave NE',
    city: 'Atlanta, GA 30305',
    price: '$875,000',
    beds: 4,
    baths: 3,
    sqft: '3,200',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&auto=format&fit=crop&q=80',
    tag: 'New Listing',
  },
  {
    id: 2,
    address: '8820 Roswell Rd',
    city: 'Sandy Springs, GA 30350',
    price: '$549,000',
    beds: 3,
    baths: 2,
    sqft: '2,100',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&auto=format&fit=crop&q=80',
    tag: 'Price Reduced',
  },
  {
    id: 3,
    address: '3350 Lenox Rd NE',
    city: 'Brookhaven, GA 30326',
    price: '$1,150,000',
    beds: 5,
    baths: 4,
    sqft: '4,600',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=700&auto=format&fit=crop&q=80',
    tag: 'Featured',
  },
  {
    id: 4,
    address: '210 Walker St SW',
    city: 'Atlanta, GA 30313',
    price: '$399,000',
    beds: 2,
    baths: 2,
    sqft: '1,450',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&auto=format&fit=crop&q=80',
    tag: 'Just Listed',
  },
  {
    id: 5,
    address: '5520 Chamblee Tucker Rd',
    city: 'Tucker, GA 30084',
    price: '$465,000',
    beds: 4,
    baths: 3,
    sqft: '2,800',
    image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=700&auto=format&fit=crop&q=80',
    tag: 'Featured',
  },
  {
    id: 6,
    address: '1890 Johnson Ferry Rd',
    city: 'Marietta, GA 30062',
    price: '$620,000',
    beds: 4,
    baths: 3,
    sqft: '3,050',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=700&auto=format&fit=crop&q=80',
    tag: 'Open House',
  },
]

export default function FeaturedProperties() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Helmet>
        <title>Featured Properties | Jack Davis Realty – Atlanta Metro</title>
        <meta
          name="description"
          content="Browse hand-picked featured Atlanta Metro properties. Homes, condos, and investment properties selected by Jack Davis Realty."
        />
      </Helmet>

      <Navbar />
      <PageHero
        title="Featured Properties"
        breadcrumb="Featured Properties"
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&auto=format&fit=crop&q=80"
      />

      {/* Intro */}
      <section className="bg-ivory py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="section-label mb-4">Hand-Picked Listings</p>
          <h2 className="section-heading mb-5">
            Featured Atlanta Metro Properties
          </h2>
          <p className="font-body text-gray-500 leading-relaxed text-lg">
            Explore our personally curated selection of outstanding homes across the Atlanta Metro area.
            From luxury estates to great starter homes — find your perfect match.
          </p>
        </div>
      </section>

      {/* Listings Grid */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredListings.map((listing) => (
              <div
                key={listing.id}
                className="bg-ivory rounded-3xl overflow-hidden shadow-sm border border-gray-100 card-hover"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={listing.image}
                    alt={listing.address}
                    loading="lazy"
                    className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 bg-navy text-white font-body text-xs font-semibold px-3 py-1 rounded-full">
                    {listing.tag}
                  </span>
                </div>
                <div className="p-6">
                  <p className="font-heading text-2xl font-semibold text-navy mb-1">{listing.price}</p>
                  <p className="font-body text-sm font-medium text-gray-800 mb-0.5">{listing.address}</p>
                  <p className="font-body text-xs text-gray-500 mb-4">{listing.city}</p>
                  <div className="flex items-center gap-5 font-body text-sm text-gray-500 border-t border-gray-100 pt-4">
                    <span className="flex items-center gap-1.5">
                      <FaBed className="w-4 h-4 text-gold" />
                      {listing.beds} Beds
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaBath className="w-4 h-4 text-gold" />
                      {listing.baths} Baths
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FiMaximize2 className="w-4 h-4 text-gold" />
                      {listing.sqft} sqft
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="font-body text-gray-500 mb-6">Looking for more? Search our full Atlanta Metro inventory.</p>
            <Link to="/search" className="btn-gold">
              Search All Listings
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  )
}
