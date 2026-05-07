import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

const metroAreas = [
  'Atlanta GA', 'College Park GA', 'Decatur GA',
  'East Point GA', 'Lawrenceville GA', 'Lilburn GA',
  'Lithonia GA', 'Mableton GA', 'Marietta GA',
  'Smyrna GA', 'Snellville GA', 'Stone Mountain GA',
]

export default function Footer() {
  return (
    <footer className="bg-white py-12 px-6 border-t border-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-12">

        {/* ── Col 1: Logo + Info ── */}
        <div className="w-full md:w-[26%] flex flex-col items-center text-center shrink-0">
          <Link to="/" className="block mb-5">
            <img
              src="/logo.png"
              alt="Jack Davis Realty"
              className="h-auto w-36 object-contain"
            />
          </Link>

          <div className="font-body text-sm text-gray-600 leading-relaxed mb-5">
            <p>2020 Howell Mill Rd NW, D422</p>
            <p>Atlanta, GA 30318</p>
            <p>678-922-2532</p>
          </div>

          <img
            src="https://u.realgeeks.media/jackdavisrealty/R-EH.png"
            alt="Realtor Equal Housing"
            className="h-10 object-contain mb-5"
          />

          <p className="font-body text-xs text-gray-400">©2021 All Rights Reserved</p>
        </div>

        {/* ── Col 2: Metro Links ── */}
        <div className="w-full md:flex-1">
          <h3 className="font-heading text-lg font-bold text-gray-800 mb-5 text-center md:text-left">
            Search Atlanta Metro Areas
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-3">
            {metroAreas.map(area => (
              <Link
                key={area}
                to={`/search?location=${encodeURIComponent(area)}`}
                className="font-body text-sm font-normal transition-opacity duration-200 hover:opacity-70 text-center md:text-left"
                style={{ color: '#AC1E32' }}
              >
                {area}
              </Link>
            ))}
          </div>
        </div>

        {/* ── Col 3: Follow Us (far right) ── */}
        <div className="w-full md:w-auto flex flex-col items-center md:items-start shrink-0">
          <h3 className="font-heading text-lg font-bold text-gray-800 mb-5 text-center md:text-left">
            Follow Us
          </h3>
          <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-3">

            {/* Facebook */}
            <a
              href="https://www.facebook.com/jackdavisrealty#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5"
            >
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                style={{ background: '#1877F2' }}
              >
                <FaFacebook size={14} color="white" />
              </span>
              <span className="font-body text-sm text-gray-600">Facebook</span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/jackdavisrealty/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5"
            >
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                style={{ background: 'linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)' }}
              >
                <FaInstagram size={14} color="white" />
              </span>
              <span className="font-body text-sm text-gray-600">Instagram</span>
            </a>

          </div>
        </div>

      </div>
    </footer>
  )
}
