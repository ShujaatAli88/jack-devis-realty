import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiMenu, FiX, FiPhone, FiSearch } from 'react-icons/fi'
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
  { label: 'Contact Us', path: '/contact' },
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
              Get My Cash Offer
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
            className="fixed inset-0 z-[60] bg-black/60"
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
            className="fixed top-0 right-0 bottom-0 z-[70] w-80 max-w-[88vw] flex flex-col"
            style={{ background: 'linear-gradient(160deg, rgba(160,160,160,0.92) 0%, rgba(110,110,110,0.97) 100%)', backdropFilter: 'blur(14px)' }}
          >
            {/* X button — top right only, no logo */}
            <div className="flex justify-end px-5 pt-5 pb-2">
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-2 text-white/80 hover:text-white transition-colors"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>

            {/* Nav Links — no dividers, generous spacing */}
            <nav className="flex-1 overflow-y-auto px-7 py-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  onClick={() => setSidebarOpen(false)}
                  className={({ isActive }) =>
                    `block font-body text-xl font-semibold py-[14px] transition-colors duration-150 ${
                      isActive ? 'text-[#C81230]' : 'text-white hover:text-[#C81230]'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              {/* Phone number below nav links — matches SS2 layout */}
              <a
                href="tel:6789222532"
                className="block font-body text-xl font-semibold text-white hover:text-white/60 transition-colors pt-6 pb-2"
              >
                678-922-2532
              </a>
            </nav>

            {/* Bottom CTAs */}
            <div className="px-6 pb-8 pt-4 space-y-3">
              <Link
                to="/cash-offer"
                onClick={() => setSidebarOpen(false)}
                className="block w-full text-center bg-[#AC1E32] hover:bg-[#8B1828] text-white font-body font-bold py-4 rounded-full transition-all duration-200"
              >
                Get My Cash Offer
              </Link>
              <Link
                to="/search"
                onClick={() => setSidebarOpen(false)}
                className="flex items-center justify-center gap-2 w-full text-center border border-white/40 text-white font-body font-semibold py-3.5 rounded-full hover:border-white/70 hover:bg-white/10 transition-all duration-200"
              >
                <FiSearch className="w-4 h-4" />
                Search Properties
              </Link>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}
