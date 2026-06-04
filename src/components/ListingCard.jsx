import { useState } from 'react'
import { FiMaximize2, FiHeart } from 'react-icons/fi'
import { IoBedOutline, IoWaterOutline } from 'react-icons/io5'

const statusColors = {
  Active: 'bg-emerald-500',
  Pending: 'bg-amber-500',
  Sold: 'bg-red-500',
  New: 'bg-blue-500',
}

function formatPrice(price) {
  if (price == null) return 'Price Upon Request'
  if (price >= 1000000) {
    return '$' + (price / 1000000).toFixed(2).replace(/\.?0+$/, '') + 'M'
  }
  return '$' + price.toLocaleString()
}

export default function ListingCard({ listing }) {
  const [saved, setSaved] = useState(false)

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md card-hover group">
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
        <img
          src={listing.images[0]}
          alt={listing.address}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Status badge */}
        <div className="absolute top-3 left-3">
          <span
            className={`${
              statusColors[listing.status] || 'bg-gray-500'
            } text-white font-body text-xs font-semibold px-3 py-1 rounded-full`}
          >
            {listing.status}
          </span>
        </div>
        {/* Save button */}
        <button
          onClick={() => setSaved((s) => !s)}
          className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md transition-all hover:scale-110"
          aria-label="Save listing"
        >
          <FiHeart
            className={`w-4 h-4 transition-colors ${
              saved ? 'text-red-500 fill-red-500' : 'text-gray-600'
            }`}
          />
        </button>
      </div>

      {/* Info */}
      <div className="p-5">
        <p className="font-heading text-2xl font-semibold text-navy mb-1">
          {formatPrice(listing.price)}
        </p>
        <p className="font-body text-gray-600 text-sm mb-3 truncate">
          {listing.address}, {listing.city}, {listing.state} {listing.zip}
        </p>

        <div className="flex items-center gap-4 font-body text-sm text-gray-500 mb-4">
          <span className="flex items-center gap-1.5">
            <IoBedOutline className="w-4 h-4 text-gray-400" />
            {listing.beds} Beds
          </span>
          <span className="flex items-center gap-1.5">
            <IoWaterOutline className="w-4 h-4 text-gray-400" />
            {listing.baths} Baths
          </span>
          {listing.sqft != null && (
            <span className="flex items-center gap-1.5">
              <FiMaximize2 className="w-4 h-4 text-gray-400" />
              {listing.sqft.toLocaleString()} sqft
            </span>
          )}
        </div>

        <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
          <span className="font-body text-xs text-gray-400 uppercase tracking-wider bg-ivory px-3 py-1 rounded-full">
            {listing.propertyType}
          </span>
          <span className="font-body text-xs text-gray-400">
            Listed {listing.listedDate}
          </span>
        </div>
      </div>
    </div>
  )
}
