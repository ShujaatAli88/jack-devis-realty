import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import { MdEmail, MdPhone, MdPerson } from 'react-icons/md'
import { FaFacebook } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'
import ContactModal from './ContactModal'

function LoginModal({ onClose }) {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    // MLS_READY: wire to auth provider
  }

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[200] flex items-center justify-center px-4"
        onClick={onClose}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/50"
        />

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: -16, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -16, scale: 0.97 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className="relative bg-gray-100 rounded-lg shadow-2xl w-full max-w-sm p-6 z-10"
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close"
          >
            <FiX className="w-5 h-5" />
          </button>

          <h2 className="font-body text-base text-gray-600 mb-5">Sign in to your account</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label className="font-body text-sm font-medium text-gray-700 block mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded px-3 py-2.5 font-body text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy/30 transition-all"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="font-body text-sm font-medium text-gray-700 block mb-1">Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded px-3 py-2.5 font-body text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy/30 transition-all"
              />
              <button
                type="button"
                className="font-body text-xs text-navy hover:opacity-75 transition-opacity mt-1"
              >
                Need to reset your phone number?
              </button>
            </div>

            {/* Log In */}
            <button
              type="submit"
              className="w-full bg-navy hover:bg-navy-dark text-white font-body font-semibold text-sm py-3 rounded transition-colors"
            >
              Log In
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 h-px bg-gray-300" />
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          {/* Facebook */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 bg-[#1877F2] hover:bg-[#1664d8] text-white font-body font-semibold text-sm py-3 rounded transition-colors"
          >
            <FaFacebook className="w-5 h-5" />
            Continue with Facebook
          </button>

          {/* Sign up */}
          <p className="font-body text-xs text-gray-500 text-center mt-5">
            Don't have an account with us?{' '}
            <button
              type="button"
              className="text-navy hover:opacity-75 transition-opacity font-medium"
            >
              Click here to sign up.
            </button>
          </p>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

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
  const [loginOpen, setLoginOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

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
            <button
              onClick={() => setContactOpen(true)}
              className="hidden md:flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white hover:bg-gold hover:text-navy transition-all duration-200"
              aria-label="Contact us"
            >
              <MdEmail className="w-4 h-4" />
            </button>
            <a
              href="tel:6789222532"
              className="hidden md:flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white hover:bg-gold hover:text-navy transition-all duration-200"
              aria-label="Call us"
            >
              <MdPhone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setLoginOpen(true)}
              className="hidden md:flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white hover:bg-gold hover:text-navy transition-all duration-200"
              aria-label="Sign in"
            >
              <MdPerson className="w-4 h-4" />
            </button>
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

      {/* Modals */}
      {loginOpen && <LoginModal onClose={() => setLoginOpen(false)} />}
      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}

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
                <button
                  onClick={() => { setMobileOpen(false); setLoginOpen(true) }}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-gold hover:text-navy transition-all"
                  aria-label="Sign in"
                >
                  <MdPerson className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
