import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import { MdEmail, MdPhone, MdPerson } from 'react-icons/md'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'
import ContactModal from './ContactModal'

// --- Login Modal Component ---
function LoginModal({ onClose }) {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-center justify-center px-4" onClick={onClose}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/50" />
        <motion.div
          initial={{ opacity: 0, y: -16, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -16, scale: 0.97 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className="relative bg-gray-100 rounded-lg shadow-2xl w-full max-w-sm p-6 z-10"
        >
          <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors">
            <FiX className="w-5 h-5" />
          </button>
          <h2 className="font-body text-base text-gray-600 mb-5">Sign in to your account</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="font-body text-sm font-medium text-gray-700 block mb-1">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-white border border-gray-300 rounded px-3 py-2.5 font-body text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy/30 transition-all" />
            </div>
            <div>
              <label className="font-body text-sm font-medium text-gray-700 block mb-1">Phone Number</label>
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full bg-white border border-gray-300 rounded px-3 py-2.5 font-body text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy/30 transition-all" />
            </div>
            <button type="submit" className="w-full bg-navy hover:bg-navy-dark text-white font-body font-semibold text-sm py-3 rounded transition-colors">Log In</button>
          </form>
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

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 border-b border-gray-100 ${
          scrolled ? 'py-3 shadow-md' : 'py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="shrink-0">
            <Logo height={46} />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `font-body text-sm font-medium tracking-wide transition-colors duration-200 relative group ${
                    isActive ? 'text-[#AC1E32]' : 'text-gray-600 hover:text-[#AC1E32]'
                  }`
                }
              >
                {link.label}
                <span className={`absolute -bottom-1.5 left-0 w-full h-0.5 rounded-full transition-transform duration-300 ${window.location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} style={{ background: '#AC1E32' }} />
              </NavLink>
            ))}
          </div>

          {/* Icon actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setContactOpen(true)}
              className="hidden md:flex items-center justify-center w-9 h-9 rounded-full text-gray-500 hover:text-[#AC1E32] hover:bg-red-50 transition-all duration-200"
            >
              <MdEmail className="w-4 h-4" />
            </button>
            <a
              href="tel:6789222532"
              className="hidden md:flex items-center justify-center w-9 h-9 rounded-full text-gray-500 hover:text-[#AC1E32] hover:bg-red-50 transition-all duration-200"
            >
              <MdPhone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setLoginOpen(true)}
              className="hidden md:flex items-center justify-center w-9 h-9 rounded-full text-gray-500 hover:text-[#AC1E32] hover:bg-red-50 transition-all duration-200"
            >
              <MdPerson className="w-4 h-4" />
            </button>
            <button onClick={() => setMobileOpen(true)} className="lg:hidden text-gray-600 p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <FiMenu className="w-6 h-6" />
            </button>
          </div>

        </div>
      </nav>

      {loginOpen && <LoginModal onClose={() => setLoginOpen(false)} />}
      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'tween', duration: 0.3 }} className="fixed inset-0 z-[60] bg-navy flex flex-col">
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <Link to="/" onClick={() => setMobileOpen(false)}>
                <div className="bg-white rounded-lg px-3 py-1.5">
                  <Logo height={40} />
                </div>
              </Link>
              <button onClick={() => setMobileOpen(false)} className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors">
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
                    `font-body text-xl font-medium py-2 border-b border-white/10 transition-all ${
                      isActive ? 'text-gold' : 'text-white hover:text-white hover:font-bold hover:underline underline-offset-4'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}