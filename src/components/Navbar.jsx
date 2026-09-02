import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiMenu, FiX, FiPhone, FiChevronDown } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'

const MAROON  = '#C42535'
const GOLD    = '#C1912E'
const CHARCOAL = '#262626'

const NAV_ITEMS = [
  { label: 'Home',            path: '/',            dropdown: false },
  { label: 'Sell Your Home',  path: '/selling',     dropdown: true  },
  { label: 'Buy & Invest',    path: '/search',      dropdown: true  },
  { label: 'Solutions',       path: '/cash-offer',  dropdown: true  },
  { label: 'About Us',        path: '/about',       dropdown: false },
  { label: 'Resources',       path: '/blog',        dropdown: true  },
  { label: 'Contact',         path: '/contact',     dropdown: false },
]

const MOBILE_LINKS = [
  { label: 'Home',                path: '/'           },
  { label: 'Sell Your Home',      path: '/selling'    },
  { label: 'Get Fast Cash Offer', path: '/cash-offer' },
  { label: 'Buy & Invest',        path: '/search'     },
  { label: 'About Us',            path: '/about'      },
  { label: 'Contact',             path: '/contact'    },
]

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      {/* ── Top bar ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? 'shadow-lg' : 'shadow-sm border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-[72px]">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <span className="font-heading text-2xl font-bold" style={{ color: GOLD }}>JD</span>
              <div className="w-px h-7 bg-gray-200" />
              <div
                className="font-body text-[11px] font-extrabold tracking-[0.15em] leading-tight hidden sm:block"
                style={{ color: CHARCOAL }}
              >
                <span className="block">JACK DAVIS</span>
                <span className="block" style={{ color: GOLD }}>REALTY</span>
              </div>
            </Link>

            {/* Center nav — desktop (lg+) */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `flex items-center gap-0.5 font-body text-[13px] font-medium px-3 py-2 rounded-md border-b-2 transition-colors duration-150 ${
                      isActive
                        ? 'text-[#C42535] border-[#C42535]'
                        : 'text-gray-600 hover:text-gray-900 border-transparent'
                    }`
                  }
                >
                  {item.label}
                  {item.dropdown && <FiChevronDown className="w-3.5 h-3.5 opacity-40 ml-0.5" />}
                </NavLink>
              ))}
            </nav>

            {/* Right: CTA stack + hamburger */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex flex-col items-end gap-0.5">
                <Link
                  to="/cash-offer"
                  className="font-body font-bold text-xs text-white px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
                  style={{ background: MAROON }}
                >
                  Get My Fast Cash Offer
                </Link>
                <a
                  href="tel:6789628754"
                  className="flex items-center gap-1.5 font-body text-[11px] text-gray-400 hover:text-gray-700 transition-colors"
                >
                  <FiPhone className="w-3 h-3" />
                  (678) 962-8754
                </a>
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
              <div className="flex items-center gap-2.5">
                <span className="font-heading text-xl font-bold" style={{ color: GOLD }}>JD</span>
                <div className="w-px h-5 bg-gray-200" />
                <span
                  className="font-body text-[10px] font-extrabold tracking-[0.15em]"
                  style={{ color: CHARCOAL }}
                >
                  JACK DAVIS REALTY
                </span>
              </div>
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
              {MOBILE_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `block font-body text-lg font-semibold py-4 border-b border-gray-50 transition-colors ${
                      isActive ? '' : 'text-gray-700 hover:text-gray-900'
                    }`
                  }
                  style={({ isActive }) => (isActive ? { color: MAROON } : {})}
                >
                  {link.label}
                </NavLink>
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
