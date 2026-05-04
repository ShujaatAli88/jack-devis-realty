import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const PROPERTY_TYPES = [
  'Single Family Home',
  'Condo/Townhome',
  'Multi-Family',
  'Vacant Land',
  'Other',
]

const CONDITIONS = [
  'Excellent (move-in ready)',
  'Good (minor repairs needed)',
  'Fair (some updates/repairs needed)',
  'Needs Work (major repairs or updates needed)',
]

const TIMELINES = [
  'As soon as possible',
  'Within 30 days',
  '1-3 months',
  '3-6 months',
  '6+ months',
]

function RadioGroup({ name, options, value, onChange, required }) {
  return (
    <div className="space-y-2.5">
      {options.map((opt) => (
        <label key={opt} className="flex items-center gap-3 cursor-pointer">
          <input
            type="radio"
            name={name}
            value={opt}
            checked={value === opt}
            onChange={onChange}
            required={required}
            className="w-4 h-4 accent-[#C8A96E]"
          />
          <span className="font-body text-sm text-gray-700">{opt}</span>
        </label>
      ))}
    </div>
  )
}

function FieldLabel({ children, required }) {
  return (
    <label className="font-body text-sm font-semibold text-navy block mb-1.5">
      {children}
      {required && <span className="text-red-500 ml-0.5">*</span>}
    </label>
  )
}

function TextInput({ value, onChange, required, placeholder, type = 'text', className = '' }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      className={`w-full border border-gray-300 rounded-lg px-4 py-3 font-body text-sm text-gray-800 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all ${className}`}
    />
  )
}

function SectionDivider({ title }) {
  return (
    <div className="border-t border-gray-300 pt-6 mb-6 text-center">
      <h2 className="font-heading text-xl font-semibold text-navy">{title}</h2>
    </div>
  )
}

export default function CashOfferForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    street: '',
    street2: '',
    city: '',
    state: '',
    zip: '',
    propertyType: '',
    bedrooms: '',
    bathrooms: '',
    condition: '',
    timeline: '',
    reason: '',
  })

  function field(key) {
    return (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Helmet>
        <title>Request a Cash Offer | Jack Davis Realty</title>
        <meta
          name="description"
          content="Request a fast, no-obligation cash offer for your home from Jack Davis Realty."
        />
      </Helmet>

      <Navbar />

      <section className="bg-ivory min-h-screen pt-28 pb-16 px-4">
        <div className="max-w-2xl mx-auto">

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="font-heading text-3xl font-semibold text-navy mb-3">
                Thank You!
              </h2>
              <p className="font-body text-gray-500 text-lg">
                We received your request and will be in touch with your cash offer shortly.
              </p>
            </motion.div>
          ) : (
            <>
              {/* Page header */}
              <div className="text-center mb-10">
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-navy mb-3">
                  Request a Cash Offer for Your Home
                </h1>
                <p className="font-body text-gray-500 text-base">
                  Tell us about your property and situation to receive a fast, no-obligation cash offer.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-10">

                {/* ── Seller Contact Information ── */}
                <div>
                  <SectionDivider title="Seller Contact Information" />
                  <div className="space-y-6">

                    {/* Full Name */}
                    <div>
                      <FieldLabel required>Full Name</FieldLabel>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <TextInput value={form.firstName} onChange={field('firstName')} required />
                          <p className="font-body text-xs text-gold mt-1">First Name</p>
                        </div>
                        <div>
                          <TextInput value={form.lastName} onChange={field('lastName')} required />
                          <p className="font-body text-xs text-gold mt-1">Last Name</p>
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <FieldLabel required>Email Address</FieldLabel>
                      <TextInput
                        type="email"
                        value={form.email}
                        onChange={field('email')}
                        required
                        className="max-w-sm"
                      />
                      <p className="font-body text-xs text-gold mt-1">example@example.com</p>
                    </div>

                    {/* Phone */}
                    <div>
                      <FieldLabel required>Phone Number</FieldLabel>
                      <TextInput
                        type="tel"
                        value={form.phone}
                        onChange={field('phone')}
                        required
                        placeholder="(000) 000-0000"
                        className="max-w-xs"
                      />
                      <p className="font-body text-xs text-gold mt-1">Please enter a valid phone number.</p>
                    </div>

                    {/* Property Address */}
                    <div>
                      <FieldLabel required>Property Address</FieldLabel>
                      <div className="space-y-3">
                        <div>
                          <TextInput value={form.street} onChange={field('street')} required />
                          <p className="font-body text-xs text-gold mt-1">Street Address</p>
                        </div>
                        <div>
                          <TextInput value={form.street2} onChange={field('street2')} />
                          <p className="font-body text-xs text-gold mt-1">Street Address Line 2</p>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                          <div>
                            <TextInput value={form.city} onChange={field('city')} required />
                            <p className="font-body text-xs text-gold mt-1">City</p>
                          </div>
                          <div>
                            <TextInput value={form.state} onChange={field('state')} required />
                            <p className="font-body text-xs text-gold mt-1">State / Province</p>
                          </div>
                          <div>
                            <TextInput value={form.zip} onChange={field('zip')} required />
                            <p className="font-body text-xs text-gold mt-1">Postal / Zip Code</p>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* ── Property Details ── */}
                <div>
                  <SectionDivider title="Property Details" />
                  <div className="space-y-8">

                    {/* Property Type */}
                    <div>
                      <FieldLabel required>What type of property is it?</FieldLabel>
                      <RadioGroup
                        name="propertyType"
                        options={PROPERTY_TYPES}
                        value={form.propertyType}
                        onChange={field('propertyType')}
                        required
                      />
                    </div>

                    {/* Bedrooms */}
                    <div>
                      <FieldLabel required>Number of Bedrooms</FieldLabel>
                      <TextInput
                        type="number"
                        value={form.bedrooms}
                        onChange={field('bedrooms')}
                        required
                        placeholder="e.g., 3"
                        className="max-w-xs"
                      />
                    </div>

                    {/* Bathrooms */}
                    <div>
                      <FieldLabel required>Number of Bathrooms</FieldLabel>
                      <TextInput
                        type="number"
                        value={form.bathrooms}
                        onChange={field('bathrooms')}
                        required
                        placeholder="e.g., 2"
                        className="max-w-xs"
                      />
                    </div>

                    {/* Condition */}
                    <div>
                      <FieldLabel required>
                        How would you describe the current condition of the property?
                      </FieldLabel>
                      <RadioGroup
                        name="condition"
                        options={CONDITIONS}
                        value={form.condition}
                        onChange={field('condition')}
                        required
                      />
                    </div>

                    {/* Timeline */}
                    <div>
                      <FieldLabel required>How soon are you looking to sell?</FieldLabel>
                      <RadioGroup
                        name="timeline"
                        options={TIMELINES}
                        value={form.timeline}
                        onChange={field('timeline')}
                        required
                      />
                    </div>

                    {/* Reason */}
                    <div>
                      <FieldLabel>What's the reason you want to sell your home?</FieldLabel>
                      <textarea
                        value={form.reason}
                        onChange={field('reason')}
                        rows={5}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 font-body text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all resize-y"
                      />
                    </div>

                  </div>
                </div>

                {/* Submit */}
                <div className="border-t border-gray-300 pt-8 text-center">
                  <button
                    type="submit"
                    className="btn-gold px-12 py-3.5 text-base font-semibold"
                  >
                    Request My Cash Offer
                  </button>
                </div>

              </form>
            </>
          )}
        </div>
      </section>

      <Footer />
    </motion.div>
  )
}
