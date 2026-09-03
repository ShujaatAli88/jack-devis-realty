import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { FiPhone, FiMail, FiMapPin, FiArrowRight } from 'react-icons/fi'

const NAVY   = '#1A1A1A'
const GOLD   = '#796063'

const QUICK_LINKS = [
  { label: 'Sell Your Home', path: '/selling'    },
  { label: 'Buy & Invest',   path: '/search'     },
  { label: 'Solutions',      path: '/cash-offer' },
  { label: 'Resources',      path: '/blog'       },
  { label: 'About Us',       path: '/about'      },
  { label: 'Contact',        path: '/contact'    },
]

const RESOURCES = [
  { label: 'Homeowner Guide',  path: '/#faq'    },
  { label: 'Seller Checklist', path: '/selling' },
  { label: 'Market Reports',   path: '/blog'    },
  { label: 'FAQ',              path: '/#faq'    },
]

const SOCIALS = [
  { label: 'Facebook',  href: 'https://www.facebook.com/jackdavisrealty#',  Icon: FaFacebook  },
  { label: 'Instagram', href: 'https://www.instagram.com/jackdavisrealty/', Icon: FaInstagram },
  { label: 'LinkedIn',  href: '#',                                           Icon: FaLinkedin  },
  { label: 'YouTube',   href: '#',                                           Icon: FaYoutube   },
]

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <footer style={{ background: NAVY }}>

      {/* ── Main grid ── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 — Brand */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/logo.png"
              alt="Jack Davis Realty"
              className="h-24 w-auto object-contain mb-3 bg-white rounded-lg p-2 mx-auto"
            />
            <p className="font-body text-[10px] uppercase tracking-[0.22em] text-white/35 mb-7">
              Real Solutions. Real Life.
            </p>
            <div className="flex items-center justify-center gap-2.5">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-white/20 hover:text-white transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 className="font-body text-[10px] font-bold uppercase tracking-[0.2em] text-white/35 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map(l => (
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

          {/* Col 3 — Resources + Contact */}
          <div>
            <h4 className="font-body text-[10px] font-bold uppercase tracking-[0.2em] text-white/35 mb-5">
              Helpful Resources
            </h4>
            <ul className="space-y-3 mb-8">
              {RESOURCES.map(l => (
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

            <h4 className="font-body text-[10px] font-bold uppercase tracking-[0.2em] text-white/35 mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:6789628754"
                  className="flex items-center gap-2 font-body text-sm text-white/60 hover:text-white transition-colors"
                >
                  <FiPhone className="w-3.5 h-3.5 shrink-0" />
                  (678) 962-8754
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@jackdavisrealty.com"
                  className="flex items-center gap-2 font-body text-sm text-white/60 hover:text-white transition-colors"
                >
                  <FiMail className="w-3.5 h-3.5 shrink-0" />
                  hello@jackdavisrealty.com
                </a>
              </li>
              <li className="flex items-start gap-2 font-body text-sm text-white/60">
                <FiMapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span>321 Sandy Way, Suite 100<br />Marietta, GA 30060</span>
              </li>
            </ul>
          </div>

          {/* Col 4 — Stay Connected */}
          <div>
            <h4 className="font-body text-[10px] font-bold uppercase tracking-[0.2em] text-white/35 mb-5">
              Stay Connected
            </h4>
            <p className="font-body text-sm text-white/60 mb-5 leading-relaxed">
              Follow us for market updates, tips, and helpful resources.
            </p>
            <form onSubmit={handleSubscribe} className="flex items-center gap-2 mb-6">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 bg-white/10 border border-white/15 rounded-lg px-4 py-2.5 font-body text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/35 min-w-0 transition-colors"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 hover:opacity-85 transition-opacity"
                style={{ background: GOLD }}
              >
                <FiArrowRight className="w-4 h-4 text-white" />
              </button>
            </form>
            <div className="flex items-center gap-2">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/50 hover:bg-white/20 hover:text-white transition-all duration-200"
                >
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-white/30">
            © 2024 Jack Davis Realty. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 font-body text-xs text-white/30">
            <span className="hover:text-white/55 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-white/15">|</span>
            <span className="hover:text-white/55 cursor-pointer transition-colors">Terms of Use</span>
          </div>
        </div>
      </div>

    </footer>
  )
}
