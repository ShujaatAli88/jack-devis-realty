import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

const BG = '#141414'

const COLS = [
  {
    heading: 'Sell Your Home',
    links: [
      { label: 'Sell Your Home',        path: '/selling' },
      { label: 'Get a Fast Cash Offer',  path: '/cash-offer' },
      { label: 'Free Home Valuation',    path: '/valuation' },
      { label: 'Sell As-Is',             path: '/cash-offer' },
    ],
  },
  {
    heading: 'Find Your Home',
    links: [
      { label: 'Search Listings',        path: '/search' },
      { label: 'Featured Properties',    path: '/featured' },
      { label: 'Communities',            path: '/communities' },
      { label: 'Buyers Guide',           path: '/buying' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us',               path: '/about' },
      { label: 'Our Team',               path: '/about' },
      { label: 'Blog & Insights',        path: '/blog' },
      { label: 'Contact Us',             path: '/contact' },
    ],
  },
  {
    heading: 'Help Center',
    links: [
      { label: 'Contact Us',             path: '/contact' },
      { label: 'FAQ',                    path: '/#faq' },
      { label: 'Metro Atlanta Areas',    path: '/search' },
      { label: 'Cash Offer Form',        path: '/cash-offer-form' },
    ],
  },
]

const SOCIALS = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/jackdavisrealty#',
    icon: <FaFacebook size={18} />,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/jackdavisrealty/',
    icon: <FaInstagram size={18} />,
  },
  {
    label: 'Email',
    href: 'mailto:info@jackdavisrealty.com',
    icon: <FiMail size={18} />,
  },
]

export default function Footer() {
  return (
    <footer style={{ background: BG }}>

      {/* ── 4-Column Links ── */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 pt-16 pb-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
          {COLS.map(col => (
            <div key={col.heading}>
              <h3 className="font-body text-base font-bold text-white mb-2 pb-3 border-b border-white/20">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map(l => (
                  <li key={l.label}>
                    <Link
                      to={l.path}
                      className="font-body text-sm text-white/60 hover:text-white transition-colors duration-150"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="border-t border-white/10" />

      {/* ── Centered Bottom Block ── */}
      <div className="pt-12 pb-28 md:pb-14 px-4 flex flex-col items-center text-center gap-5">

        {/* Logo */}
        <Link to="/">
          <img
            src="/logo_navbar.png"
            alt="Jack Davis Realty"
            className="h-44 w-auto object-contain rounded-2xl"
          />
        </Link>

        {/* Phone */}
        <a
          href="tel:6789222532"
          className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-white hover:text-white/80 transition-colors tracking-wide"
        >
          678-922-2532
        </a>

        {/* Primary CTA — required by brand document in footer */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Link
            to="/cash-offer"
            className="font-body font-bold text-sm text-white px-8 py-3.5 rounded-full transition-all duration-200 hover:opacity-90"
            style={{ background: '#AC1E32' }}
          >
            Get My Fast Cash Offer
          </Link>
          <Link
            to="/selling"
            className="font-body font-semibold text-sm text-white/70 hover:text-white border border-white/25 px-8 py-3.5 rounded-full transition-all duration-200 hover:border-white/50"
          >
            Explore Selling Options
          </Link>
        </div>

        {/* Address */}
        <p className="font-body text-sm text-white/40 leading-relaxed">
          2020 Howell Mill Rd NW, D422 · Atlanta, GA 30318
        </p>

        {/* Copyright + Legal */}
        <p className="font-body text-sm text-white/40">
          © 2024 Jack Davis Realty. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-body text-sm text-white/40">
          <span className="hover:text-white cursor-pointer transition-colors">Terms of Use</span>
          <span className="text-white/20">·</span>
          <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
          <span className="text-white/20">·</span>
          <p className="font-body text-sm text-white/40">Licensed Georgia Real Estate Brokerage</p>
        </div>

        {/* Social Icons — white circles */}
        <div className="flex items-center gap-3 mt-1">
          {SOCIALS.map(s => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-gray-900 hover:bg-white/80 transition-colors duration-200 shadow-sm"
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Equal Housing */}
        <div className="bg-white rounded-lg px-4 py-2 mt-1">
          <img
            src="https://u.realgeeks.media/jackdavisrealty/R-EH.png"
            alt="Equal Housing Opportunity"
            className="h-10 w-auto object-contain"
          />
        </div>

      </div>
    </footer>
  )
}
