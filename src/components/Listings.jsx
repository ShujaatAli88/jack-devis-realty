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

function StatBox({ value, label }) {
  return (
    <div className="border border-gray-300 rounded px-3 py-1 text-center min-w-[52px]">
      <p className="font-body text-sm font-semibold text-gray-800 leading-none">{value}</p>
      <p className="font-body text-[10px] uppercase tracking-wider text-gray-500 mt-0.5">{label}</p>
    </div>
  )
}

function ListingRow({ listing }) {
  return (
    <div>

      {/* ── Mobile card (< sm) ── */}
      <div className="sm:hidden py-2.5">
        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">

          {/* Full-width image */}
          <div className="w-full h-44 overflow-hidden">
            <img
              src={listing.images[0]}
              alt={listing.address}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Card body */}
          <div className="p-4">
            {/* Address + Price */}
            <div className="flex items-start justify-between gap-3 mb-2">
              <p className="font-body font-semibold text-sm leading-snug flex-1" style={{ color: '#8D2222' }}>
                {listing.address}, {listing.city}
              </p>
              <p className="font-body font-bold text-sm text-gray-900 whitespace-nowrap shrink-0">
                {formatPrice(listing.price)}
              </p>
            </div>

            {/* Description */}
            <p className="font-body text-xs text-gray-500 leading-relaxed line-clamp-2 mb-3">
              {listing.description}
            </p>

            {/* Stats row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="font-body text-xs font-semibold text-gray-800">
                  {listing.beds}{' '}
                  <span className="font-normal text-[11px] text-gray-400">Beds</span>
                </span>
                <span className="h-3 w-px bg-gray-200 block shrink-0" />
                <span className="font-body text-xs font-semibold text-gray-800">
                  {listing.baths}{' '}
                  <span className="font-normal text-[11px] text-gray-400">Baths</span>
                </span>
                <span className="h-3 w-px bg-gray-200 block shrink-0" />
                <span className="font-body text-[10px] text-gray-400 uppercase tracking-wide">
                  {listing.mls}
                </span>
              </div>
              <FmlsLogo />
            </div>
          </div>
        </div>
      </div>

      {/* ── Desktop row (sm+) — unchanged ── */}
      <div className="hidden sm:flex gap-4 py-5 border-b border-gray-200 last:border-0">
        <div className="shrink-0 w-40 h-28 rounded overflow-hidden">
          <img
            src={listing.images[0]}
            alt={listing.address}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <p className="font-body font-semibold text-navy leading-snug">
              {listing.address}, {listing.city}
              {listing.neighborhood && (
                <span className="text-gray-400 font-normal"> — {listing.neighborhood}</span>
              )}
            </p>
            <p className="font-body font-bold text-gray-900 whitespace-nowrap text-base">
              {formatPrice(listing.price)}
            </p>
          </div>
          <p className="font-body text-sm text-gray-600 leading-relaxed mb-3 line-clamp-2">
            {listing.description}
          </p>
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
        <hr className="border-gray-300 mb-2 sm:mb-4" />

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
            <a href="https://www.fmls.com/dmca" className="text-navy hover:underline font-medium">click here</a> to
            review our DMCA policy and learn how to submit a takedown request. © 2026 FMLS. Last
            updated 2026-05-04 at 11:32 pm
          </p>
        </div>
      </div>
    </section>
  )
}
