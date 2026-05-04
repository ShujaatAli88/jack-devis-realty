import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiCheck } from 'react-icons/fi'

const PROPERTY_TYPES = ['Single Family Home', 'Condo/Townhome', 'Multi-Family', 'Vacant Land', 'Other']
const CONDITIONS = [
  'Excellent (move-in ready)',
  'Good (minor repairs needed)',
  'Fair (some updates/repairs needed)',
  'Needs Work (major repairs or updates needed)',
]
const TIMELINES = ['As soon as possible', 'Within 30 days', '1-3 months', '3-6 months', '6+ months']

const inp = 'w-full border border-gray-200 rounded-xl px-4 py-3 font-body text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all'

function FormBody({ onClose }) {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    street: '', street2: '', city: '', state: '', zip: '',
    propertyType: '', bedrooms: '', bathrooms: '', condition: '', timeline: '', reason: '',
  })

  function field(key) { return (e) => setForm((p) => ({ ...p, [key]: e.target.value })) }

  if (submitted) return (
    <div className="bg-ivory rounded-3xl p-10 text-center">
      <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-5">
        <FiCheck className="w-8 h-8 text-gold" strokeWidth={2.5} />
      </div>
      <h3 className="font-heading text-3xl font-semibold text-navy mb-2">Thank You!</h3>
      <p className="font-body text-gray-500">We received your request and will be in touch with your cash offer shortly.</p>
      <button onClick={onClose} className="mt-6 font-body text-sm text-gold hover:underline">Close</button>
    </div>
  )

  return (
    <div className="bg-ivory rounded-3xl overflow-hidden shadow-2xl">
      <div className="h-1.5 bg-gradient-to-r from-navy via-gold to-navy" />
      <div className="p-8 md:p-10">
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="font-body text-xs text-gold uppercase tracking-widest font-semibold mb-1">Fast Cash Offer</p>
            <h2 className="font-heading text-3xl font-semibold text-navy">Request a Cash Offer</h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition-all text-lg leading-none"
          >
            ×
          </button>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }} className="space-y-5">
          {/* Contact info */}
          <div className="border-t border-gray-200 pt-5">
            <p className="font-heading text-base font-semibold text-navy text-center mb-5">Seller Contact Information</p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input type="text" value={form.firstName} onChange={field('firstName')} required placeholder="First Name" className={inp} />
              <input type="text" value={form.lastName} onChange={field('lastName')} required placeholder="Last Name" className={inp} />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input type="email" value={form.email} onChange={field('email')} required placeholder="Email Address" className={inp} />
              <input type="tel" value={form.phone} onChange={field('phone')} required placeholder="(000) 000-0000" className={inp} />
            </div>
            <div className="space-y-3">
              <input type="text" value={form.street} onChange={field('street')} required placeholder="Street Address" className={inp} />
              <input type="text" value={form.street2} onChange={field('street2')} placeholder="Street Address Line 2" className={inp} />
              <div className="grid grid-cols-3 gap-3">
                <input type="text" value={form.city} onChange={field('city')} required placeholder="City" className={inp} />
                <input type="text" value={form.state} onChange={field('state')} required placeholder="State" className={inp} />
                <input type="text" value={form.zip} onChange={field('zip')} required placeholder="Zip Code" className={inp} />
              </div>
            </div>
          </div>

          {/* Property details */}
          <div className="border-t border-gray-200 pt-5">
            <p className="font-heading text-base font-semibold text-navy text-center mb-5">Property Details</p>

            <div className="mb-4">
              <p className="font-body text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Property Type *</p>
              <div className="grid grid-cols-2 gap-2">
                {PROPERTY_TYPES.map((t) => (
                  <label key={t} className={`flex items-center gap-2 cursor-pointer rounded-xl border px-4 py-2.5 transition-all font-body text-sm ${
                    form.propertyType === t ? 'border-navy bg-navy/5 text-navy font-medium' : 'border-gray-200 text-gray-600 hover:border-gray-300'
                  }`}>
                    <input type="radio" name="pt" value={t} checked={form.propertyType === t} onChange={field('propertyType')} required className="accent-[#AC1E32] w-3.5 h-3.5" />
                    {t}
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="font-body text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Bedrooms *</p>
                <input type="number" value={form.bedrooms} onChange={field('bedrooms')} required min={0} placeholder="e.g. 3" className={inp} />
              </div>
              <div>
                <p className="font-body text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Bathrooms *</p>
                <input type="number" value={form.bathrooms} onChange={field('bathrooms')} required min={0} placeholder="e.g. 2" className={inp} />
              </div>
            </div>

            <div className="mb-4">
              <p className="font-body text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Condition *</p>
              <div className="space-y-2">
                {CONDITIONS.map((c) => (
                  <label key={c} className="flex items-center gap-3 cursor-pointer font-body text-sm text-gray-700">
                    <input type="radio" name="cond" value={c} checked={form.condition === c} onChange={field('condition')} required className="accent-[#AC1E32] w-4 h-4" />
                    {c}
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <p className="font-body text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">How soon are you looking to sell? *</p>
              <div className="space-y-2">
                {TIMELINES.map((t) => (
                  <label key={t} className="flex items-center gap-3 cursor-pointer font-body text-sm text-gray-700">
                    <input type="radio" name="tl" value={t} checked={form.timeline === t} onChange={field('timeline')} required className="accent-[#AC1E32] w-4 h-4" />
                    {t}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <p className="font-body text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Reason for selling</p>
              <textarea value={form.reason} onChange={field('reason')} rows={4} placeholder="Tell us your situation..." className={`${inp} resize-none`} />
            </div>
          </div>

          <button type="submit" className="w-full bg-navy hover:bg-navy-dark text-white font-body font-bold text-sm py-4 rounded-xl transition-colors flex items-center justify-center gap-2">
            <FiCheck className="w-4 h-4" /> Request My Cash Offer
          </button>
        </form>
      </div>
    </div>
  )
}

export default function CashOfferModal({ onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[300] bg-black/60 backdrop-blur-sm flex items-start justify-center overflow-y-auto py-8 px-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 280, damping: 26 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-2xl"
        >
          <FormBody onClose={onClose} />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
