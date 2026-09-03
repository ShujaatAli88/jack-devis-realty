import { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiMenu, FiX, FiPhone, FiChevronDown } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'

const MAROON  = '#8D2222'

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  {
    label: 'Sell Your Home',
    path: '/selling',
    children: [
      { label: 'Home Selling Options', path: '/selling' },
      { label: 'Fast Cash Offer',      path: '/cash-offer' },
    ],
  },
  { label: 'Buy A Home', path: '/search' },
  { label: 'About Us',   path: '/about' },
  { label: 'Contact Us', path: '/contact' },
  {
    label: 'Resources',
    path: '/blog',
    children: [
      { label: 'Blog', path: '/blog' },
    ],
  },
]

export default function Navbar() {
  const [scrolled,      setScrolled]      = useState(false)
  const [mobileOpen,    setMobileOpen]    = useState(false)
  const [openDropdown,  setOpenDropdown]  = useState(null)
  const [mobileExpanded,setMobileExpanded]= useState(null)
  const closeTimer = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const openMenu = (label) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenDropdown(label)
  }

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120)
  }

  return (
    <>
      {/* ── Top bar ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? 'shadow-lg' : 'shadow-sm border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0">
              <img
                src="/logo_navbar.png"
                alt="Jack Davis Realty"
                className="h-14 w-auto object-contain"
              />
            </Link>

            {/* Center nav — desktop (lg+) */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && openMenu(item.label)}
                  onMouseLeave={() => item.children && scheduleClose()}
                >
                  <NavLink
                    to={item.path}
                    end={item.path === '/'}
                    className={({ isActive }) =>
                      `flex items-center gap-0.5 font-body text-[13px] font-medium px-3 py-2 rounded-md transition-colors duration-150 ${
                        isActive
                          ? 'text-[#8D2222]'
                          : 'text-gray-600 hover:text-[#8D2222]'
                      }`
                    }
                  >
                    {item.label}
                    {item.children && (
                      <FiChevronDown
                        className={`w-3.5 h-3.5 opacity-40 ml-0.5 transition-transform duration-150 ${
                          openDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </NavLink>

                  {/* Dropdown panel */}
                  {item.children && (
                    <AnimatePresence>
                      {openDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 pt-2 w-56"
                        >
                          <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden">
                            {item.children.map((child) => (
                              <NavLink
                                key={child.path}
                                to={child.path}
                                onClick={() => setOpenDropdown(null)}
                                className={({ isActive }) =>
                                  `block font-body text-sm px-4 py-2.5 transition-colors duration-150 ${
                                    isActive
                                      ? 'text-[#8D2222] bg-[#8D2222]/5 font-semibold'
                                      : 'text-gray-600 hover:text-[#8D2222] hover:bg-gray-50'
                                  }`
                                }
                              >
                                {child.label}
                              </NavLink>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* Right: CTA stack + hamburger */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2.5">
                <a
                  href="tel:6789628754"
                  aria-label="Call (678) 962-8754"
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 text-gray-500 hover:text-white hover:border-transparent transition-colors duration-200"
                  onMouseEnter={(e) => { e.currentTarget.style.background = MAROON }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent' }}
                >
                  <FiPhone className="w-4 h-4" />
                </a>
                <Link
                  to="/cash-offer"
                  className="font-body font-bold text-xs text-white px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
                  style={{ background: MAROON }}
                >
                  Get My Fast Cash Offer
                </Link>
              </div>

              {/* Hamburger */}
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                className="lg:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <FiMenu className="w-6 h-6" />
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* ── Backdrop ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-black/60"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: [0.32, 0, 0.18, 1] }}
            className="fixed top-0 right-0 bottom-0 z-[70] w-80 max-w-[90vw] bg-white flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <img
                src="/logo_navbar.png"
                alt="Jack Davis Realty"
                className="h-11 w-auto object-contain"
              />
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="p-2 text-gray-400 hover:text-gray-700 rounded-md transition-colors"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            {/* Links */}
            <nav className="flex-1 overflow-y-auto px-6 py-2">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="border-b border-gray-50">
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                        className="w-full flex items-center justify-between font-body text-lg font-semibold py-4 text-gray-700"
                      >
                        {item.label}
                        <FiChevronDown
                          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                            mobileExpanded === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {mobileExpanded === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pb-3 pl-3 flex flex-col gap-1">
                              {item.children.map((child) => (
                                <NavLink
                                  key={child.path}
                                  to={child.path}
                                  onClick={() => setMobileOpen(false)}
                                  className={({ isActive }) =>
                                    `font-body text-base py-2.5 transition-colors ${
                                      isActive ? '' : 'text-gray-500 hover:text-gray-800'
                                    }`
                                  }
                                  style={({ isActive }) => (isActive ? { color: MAROON, fontWeight: 600 } : {})}
                                >
                                  {child.label}
                                </NavLink>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <NavLink
                      to={item.path}
                      end={item.path === '/'}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) =>
                        `block font-body text-lg font-semibold py-4 transition-colors ${
                          isActive ? '' : 'text-gray-700 hover:text-gray-900'
                        }`
                      }
                      style={({ isActive }) => (isActive ? { color: MAROON } : {})}
                    >
                      {item.label}
                    </NavLink>
                  )}
                </div>
              ))}
              <a
                href="tel:6789628754"
                className="flex items-center gap-2 font-body text-base font-semibold py-4 text-gray-600 border-b border-gray-50"
                onClick={() => setMobileOpen(false)}
              >
                <FiPhone className="w-4 h-4" />
                (678) 962-8754
              </a>
            </nav>

            {/* Bottom CTA */}
            <div className="px-6 pb-10 pt-4">
              <Link
                to="/cash-offer"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center text-white font-body font-bold py-4 rounded-lg hover:opacity-90 transition-opacity"
                style={{ background: MAROON }}
              >
                Get My Fast Cash Offer
              </Link>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}
