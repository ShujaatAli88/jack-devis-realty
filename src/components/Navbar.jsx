import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import { MdEmail, MdPhone, MdPerson } from 'react-icons/md'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Search', path: '/search' },
  { label: 'Sellers', path: '/selling' },
  { label: 'Home Valuation', path: '/valuation' },
  { label: 'Fast Cash Offer', path: '/cash-offer' },
  { label: 'Featured Properties', path: '/featured' },
  { label: 'About Us', path: '/about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-navy shadow-2xl py-3' : 'bg-red-950/40 backdrop-blur-sm py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="shrink-0">
            <Logo height={38} />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `font-body text-sm font-medium tracking-wide transition-colors duration-200 ${
                    isActive ? 'text-gold' : 'text-white/90 hover:text-gold'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Icon actions + mobile trigger */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:tomond@jackdavisrealty.com"
              className="hidden md:flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white hover:bg-gold hover:text-navy transition-all duration-200"
              aria-label="Email us"
            >
              <MdEmail className="w-4 h-4" />
            </a>
            <a
              href="tel:6789222532"
              className="hidden md:flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white hover:bg-gold hover:text-navy transition-all duration-200"
              aria-label="Call us"
            >
              <MdPhone className="w-4 h-4" />
            </a>
            <Link
              to="/contact"
              className="hidden md:flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white hover:bg-gold hover:text-navy transition-all duration-200"
              aria-label="Contact"
            >
              <MdPerson className="w-4 h-4" />
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Open menu"
            >
              <FiMenu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-navy flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <Link to="/" onClick={() => setMobileOpen(false)}>
                <Logo height={34} />
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close menu"
              >
                <FiX className="w-7 h-7" />
              </button>
            </div>
            <div className="flex flex-col px-6 py-8 gap-6 flex-1 overflow-y-auto">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `font-body text-xl font-medium py-2 border-b border-white/10 transition-colors ${
                      isActive ? 'text-gold' : 'text-white hover:text-gold'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="flex items-center gap-4 mt-4">
                <a
                  href="mailto:tomond@jackdavisrealty.com"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-gold hover:text-navy transition-all"
                  aria-label="Email us"
                >
                  <MdEmail className="w-5 h-5" />
                </a>
                <a
                  href="tel:6789222532"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-gold hover:text-navy transition-all"
                  aria-label="Call us"
                >
                  <MdPhone className="w-5 h-5" />
                </a>
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-gold hover:text-navy transition-all"
                  aria-label="Contact"
                >
                  <MdPerson className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
