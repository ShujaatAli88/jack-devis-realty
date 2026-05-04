import { Link } from 'react-router-dom'
import { useListings } from '../hooks/useListings'
import ListingCard from './ListingCard'

export default function Listings() {
  // MLS_READY: Replace with FMLS IDX live data
  const { listings } = useListings()
  const featured = listings.slice(0, 3)

  return (
    <section className="bg-ivory py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Curated For You</p>
          <h2 className="section-heading">Exclusive Listings</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featured.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/search" className="btn-gold">View All Listings</Link>
        </div>
      </div>
    </section>
  )
}
