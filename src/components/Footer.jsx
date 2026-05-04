import { Link } from 'react-router-dom'

const metroAreas = [
  'Atlanta GA',
  'College Park GA',
  'Decatur GA',
  'East Point GA',
  'Lawrenceville GA',
  'Lilburn GA',
  'Lithonia GA',
  'Mableton GA',
  'Marietta GA',
  'Smyrna GA',
  'Snellville GA',
  'Stone Mountain GA',
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">

      {/* Main body */}
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-0">

        {/* Left column – logo + contact */}
        <div className="md:w-72 shrink-0 flex flex-col items-center text-center border-r border-gray-200 pr-10 pb-8 md:pb-0">
          <Link to="/" className="block mb-6">
            <img
              src="/logo_red.png"
              alt="Jack Davis Real Estate"
              style={{ height: '90px', width: 'auto', objectFit: 'contain' }}
            />
          </Link>

          <p className="font-body text-sm text-gray-600 leading-7">
            2020 Howell Mill Rd NW, D422
          </p>
          <p className="font-body text-sm text-gray-600 leading-7">
            Atlanta, GA 30318
          </p>
          <p className="font-body text-sm text-gray-600 leading-7 mb-4">
            678-922-2532
          </p>

          <img
            src="https://u.realgeeks.media/jackdavisrealty/R-EH.png"
            alt="Realtor Equal Housing"
            className="h-12 object-contain mb-4"
          />

          {/* Equal Housing + Realtor badge */}
          <div className="flex items-center justify-center gap-1 mb-5">
            <img
              src="https://www.nar.realtor/sites/default/files/images/logos/fair-housing-logo-small.jpg"
              alt="Equal Housing Opportunity"
              className="h-10 object-contain"
              onError={(e) => { e.target.style.display = 'none' }}
            />
            <img
              src="https://www.nar.realtor/sites/default/files/images/logos/realtor-logo-small.jpg"
              alt="Realtor"
              className="h-10 object-contain"
              onError={(e) => { e.target.style.display = 'none' }}
            />
          </div>

          <p className="font-body text-xs text-gray-500">©2021 All Rights Reserved</p>
        </div>

        {/* Right column – metro areas */}
        <div className="flex-1 md:pl-12">
          <h3 className="font-body text-lg font-semibold text-gray-800 mb-5">
            Search Atlanta Metro Areas
          </h3>
          <div className="grid grid-cols-3 gap-x-6 gap-y-3">
            {metroAreas.map((area) => (
              <Link
                key={area}
                to={`/search?location=${encodeURIComponent(area)}`}
                className="font-body text-sm text-[#AC1E32] hover:opacity-70 transition-opacity"
              >
                {area}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-gray-100 border-t border-gray-200 py-3 px-4 text-center">
        <p className="font-body text-xs text-gray-500">
          <span className="mx-2">•</span>
          <a href="#" className="hover:underline">Accessibility</a>
          <span className="mx-2">•</span>
          <a href="#" className="hover:underline">Terms</a>
          <span className="mx-2">•</span>
          <a href="#" className="hover:underline">Privacy</a>
        </p>
      </div>

    </footer>
  )
}
