import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

const metroAreas = [
  'Atlanta GA',      'College Park GA', 'Decatur GA',
  'East Point GA',   'Lawrenceville GA','Lilburn GA',
  'Lithonia GA',     'Mableton GA',     'Marietta GA',
  'Smyrna GA',       'Snellville GA',   'Stone Mountain GA',
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">

      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* ── Top row: logo left · social icons extreme right ── */}
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
          <Link to="/">
            <img src="/logo_red.png" alt="Jack Davis Real Estate" className="h-14 w-auto object-contain" />
          </Link>
          <div className="flex items-center gap-2.5">
            <a
              href="https://www.facebook.com/jackdavisrealty"
              target="_blank" rel="noopener noreferrer" aria-label="Facebook"
              className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110 hover:opacity-90"
              style={{ background: '#AC1E32' }}
            >
              <FaFacebook className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/phgdenver/"
              target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110 hover:opacity-90"
              style={{ background: '#AC1E32' }}
            >
              <FaInstagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* ── Main row: info left · metro areas right ── */}
        <div className="flex flex-col md:flex-row gap-10">

          {/* Left — contact info */}
          <div className="flex flex-col items-start md:w-52 shrink-0">
            <p className="font-body text-sm text-gray-500 leading-relaxed">
              2020 Howell Mill Rd NW, D422<br />Atlanta, GA 30318<br />678-922-2532
            </p>
            <img
              src="https://u.realgeeks.media/jackdavisrealty/R-EH.png"
              alt="Realtor Equal Housing"
              className="h-10 object-contain mt-5 opacity-70"
            />
            <p className="font-body text-xs text-gray-400 mt-3">©2024 All Rights Reserved</p>
          </div>

          {/* Right — metro areas */}
          <div className="flex-1">
            <h3 className="font-heading text-lg font-bold text-gray-800 mb-5">
              Search Atlanta Metro Areas
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3">
              {metroAreas.map(area => (
                <Link
                  key={area}
                  to={`/search?location=${encodeURIComponent(area)}`}
                  className="font-body text-sm font-medium transition-colors duration-200 hover:opacity-70"
                  style={{ color: '#AC1E32' }}
                >
                  {area}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-gray-100 bg-gray-50 py-4 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-1 text-gray-400 font-body text-xs">
          <span>•</span>
          <a href="#" className="px-2 hover:text-gray-600 transition-colors">Accessibility</a>
          <span>•</span>
          <a href="#" className="px-2 hover:text-gray-600 transition-colors">Terms</a>
          <span>•</span>
          <a href="#" className="px-2 hover:text-gray-600 transition-colors">Privacy</a>
        </div>
      </div>

    </footer>
  )
}
