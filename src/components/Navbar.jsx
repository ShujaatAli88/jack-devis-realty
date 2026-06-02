import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiMenu, FiX, FiPhone } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
// logo_navbar.png has transparent bg — renders perfectly on the white navbar
const LogoImg = ({ height = 44 }) => (
  <img src="/logo_navbar.png" alt="Jack Davis Realty" style={{ height }} className="w-auto object-contain" />
)

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Get Fast Cash Offer', path: '/cash-offer' },
  { label: 'Sell Your Home', path: '/selling' },
  { label: 'Buyers', path: '/search' },
  { label: 'Home Valuation', path: '/valuation' },
  { label: 'Featured Properties', path: '/featured' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [sidebarOpen])

  return (
    <>
      {/* Top Bar — always white */}
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm border-b border-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-3.5 flex items-center justify-between gap-4">

          {/* Logo — always on white, always visible */}
          <Link to="/" className="shrink-0">
            <LogoImg height={42} />
          </Link>

          {/* Phone */}
          <a
            href="tel:6789222532"
            className="hidden md:flex items-center gap-2 font-body font-semibold text-sm text-gray-600 hover:text-[#AC1E32] transition-colors"
          >
            <FiPhone className="w-4 h-4" />
            678-922-2532
          </a>

          {/* Right: CTA + Hamburger */}
          <div className="flex items-center gap-2.5">
            <Link
              to="/cash-offer"
              className="hidden sm:block bg-[#AC1E32] hover:bg-[#8B1828] text-white font-body font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm whitespace-nowrap"
            >
              Get cash offer
            </Link>
            <button
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <FiMenu className="w-6 h-6" />
            </button>
          </div>

        </div>
      </nav>

      {/* Backdrop */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[60] bg-black/50"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar Panel */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: [0.32, 0, 0.18, 1] }}
            className="fixed top-0 right-0 bottom-0 z-[70] w-80 max-w-[88vw] bg-white flex flex-col shadow-2xl"
          >
            {/* Sidebar Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <Link to="/" onClick={() => setSidebarOpen(false)}>
                <LogoImg height={36} />
              </Link>
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex-1 overflow-y-auto px-5 py-5 space-y-0.5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  onClick={() => setSidebarOpen(false)}
                  className={({ isActive }) =>
                    `block font-body text-[15px] py-3 px-4 rounded-xl transition-all duration-150 ${
                      isActive
                        ? 'bg-[#AC1E32]/8 text-[#AC1E32] font-semibold'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-[#AC1E32]'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Bottom CTAs */}
            <div className="px-5 pt-4 pb-8 border-t border-gray-100 space-y-3">
              <Link
                to="/cash-offer"
                onClick={() => setSidebarOpen(false)}
                className="block w-full text-center bg-[#AC1E32] hover:bg-[#8B1828] text-white font-body font-bold py-3.5 rounded-full transition-all duration-200 shadow-md"
              >
                Get My Fast Cash Offer
              </Link>
              <Link
                to="/selling"
                onClick={() => setSidebarOpen(false)}
                className="block w-full text-center border-2 border-[#AC1E32] text-[#AC1E32] font-body font-semibold py-3 rounded-full hover:bg-[#AC1E32] hover:text-white transition-all duration-200"
              >
                Explore Selling Options
              </Link>
              <a
                href="tel:6789222532"
                className="flex items-center justify-center gap-2 font-body text-sm text-gray-400 hover:text-[#AC1E32] transition-colors pt-1"
              >
                <FiPhone className="w-3.5 h-3.5" />
                678-922-2532
              </a>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}
