import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlus, FiMinus } from 'react-icons/fi'

const faqs = [
  {
    id: 1,
    question: 'What areas does Jack Davis Realty serve?',
    answer:
      'We serve the entire Atlanta Metro area including Decatur, Lithonia, Snellville, Mableton, Lawrenceville, East Point, Stone Mountain, Lilburn, and Atlanta.',
  },
  {
    id: 2,
    question: 'How do I get a free home valuation?',
    answer:
      'Simply contact us or click the Home Valuation button anywhere on our site. We provide a fast, free, and accurate assessment of your home\'s current market value with no obligation.',
  },
  {
    id: 3,
    question: 'How does the Cash Offer program work?',
    answer:
      'Provide some basic info about your home, schedule a quick appointment with one of our specialists, and receive a no-obligation cash offer. Close in as little as 14 days with no repairs, showings, or closing costs.',
  },
  {
    id: 4,
    question: 'How experienced is Tomond Jack?',
    answer:
      'Tomond Jack has been a licensed real estate professional since 2007, with over 6,000 real estate deals as both an agent and investor. A Georgia State University graduate, he has been investing in Atlanta Metro real estate since 2002.',
  },
]

export default function FAQ({ dark = false }) {
  const [open, setOpen] = useState(null)

  return (
    <div className="space-y-3">
      {faqs.map((faq) => (
        <div
          key={faq.id}
          className={`rounded-2xl overflow-hidden border transition-colors ${
            dark
              ? 'border-white/10 bg-white/5'
              : 'border-gray-200 bg-white'
          }`}
        >
          <button
            onClick={() => setOpen(open === faq.id ? null : faq.id)}
            className={`w-full flex items-center justify-between px-6 py-5 text-left transition-colors ${
              dark ? 'hover:bg-white/5' : 'hover:bg-gray-50'
            }`}
          >
            <span
              className={`font-body font-semibold text-sm md:text-base pr-4 ${
                dark ? 'text-white' : 'text-navy'
              }`}
            >
              {faq.question}
            </span>
            <span className="shrink-0 w-8 h-8 bg-[#8D2222] rounded-full flex items-center justify-center">
              {open === faq.id ? (
                <FiMinus className="w-4 h-4 text-navy" />
              ) : (
                <FiPlus className="w-4 h-4 text-navy" />
              )}
            </span>
          </button>

          <AnimatePresence initial={false}>
            {open === faq.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <p
                  className={`px-6 pb-5 font-body text-sm leading-relaxed ${
                    dark ? 'text-white/60' : 'text-gray-500'
                  }`}
                >
                  {faq.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
