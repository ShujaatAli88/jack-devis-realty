import { useListings } from '../hooks/useListings'

function formatPrice(price) {
  if (price == null) return 'Price Upon Request'
  return '$' + price.toLocaleString()
}

function FmlsLogo() {
  return (
    <img
      src="https://www.jackdavisrealty.com/static/default/fmls_logo.png"
      alt="FMLS IDX"
      className="h-6 object-contain"
    />
  )
}

function ListingRow({ listing }) {
  return (
    <div className="flex gap-4 py-5 border-b border-gray-200 last:border-0">
      {/* Thumbnail */}
      <div className="shrink-0 w-40 h-28 rounded overflow-hidden">
        <img
          src={listing.images[0]}
          alt={listing.address}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        {/* Address + Price */}
        <div className="flex items-start justify-between gap-2 mb-1">
          <p className="font-body font-semibold text-[#AC1E32] leading-snug">
            {listing.address}, {listing.city}
            {listing.neighborhood && (
              <span className="text-gray-400 font-normal"> — {listing.neighborhood}</span>
            )}
          </p>
          <p className="font-body font-bold text-gray-900 whitespace-nowrap text-base">
            {formatPrice(listing.price)}
          </p>
        </div>

        {/* Description */}
        <p className="font-body text-sm text-gray-600 leading-relaxed mb-3 line-clamp-2">
          {listing.description}
        </p>

        {/* Stats + Logo */}
        <div className="flex items-center justify-between">
          <div className="flex gap-2 flex-wrap">
            <StatBox value={listing.beds} label="Beds" />
            <StatBox value={listing.baths} label="Baths" />
            <StatBox value={listing.mls} label="MLS" />
            {listing.neighborhood && (
              <StatBox value={listing.neighborhood} label="Bldg." />
            )}
          </div>
          <FmlsLogo />
        </div>
      </div>
    </div>
  )
}

function StatBox({ value, label }) {
  return (
    <div className="border border-gray-300 rounded px-3 py-1 text-center min-w-[52px]">
      <p className="font-body text-sm font-semibold text-gray-800 leading-none">{value}</p>
      <p className="font-body text-[10px] uppercase tracking-wider text-gray-500 mt-0.5">{label}</p>
    </div>
  )
}

export default function Listings() {
  const { listings } = useListings()

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-body text-xl font-bold text-gray-900 mb-1">
          Newest Listings in the Atlanta Metro Area
        </h2>
        <hr className="border-gray-300 mb-4" />

        {listings.map((listing) => (
          <ListingRow key={listing.id} listing={listing} />
        ))}

        {/* FMLS Disclaimer */}
        <div className="mt-6 flex items-start gap-3 text-xs text-gray-500 leading-relaxed border-t border-gray-200 pt-5">
          <FmlsLogo />
          <p>
            Listings on this website come from the FMLS IDX Compilation and may be held by brokerage
            firms other than the owner of this website. The listing brokerage is identified in any
            listing details. Information is deemed reliable but is not guaranteed. If you believe any
            FMLS listing contains material that infringes your copyrighted work, please{' '}
            <a href="#" className="text-[#AC1E32] hover:underline font-medium">click here</a> to
            review our DMCA policy and learn how to submit a takedown request. © 2026 FMLS. Last
            updated 2026-05-04 at 11:32 pm
          </p>
        </div>

      </div>
    </section>
  )
}
