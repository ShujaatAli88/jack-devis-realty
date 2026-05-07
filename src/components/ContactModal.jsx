import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiSend, FiUser, FiMail, FiPhone, FiMessageSquare, FiChevronDown } from 'react-icons/fi'

const TIMELINES = ['Not Sure', 'Within the next 3 months', 'Within the next 6 months', 'Now']

function FloatingInput({ id, label, type = 'text', value, onChange, error, icon: Icon, placeholder }) {
  const [focused, setFocused] = useState(false)
  const active = focused || value.length > 0

  return (
    <div className="relative">
      <div
        className={`relative border-2 rounded-xl transition-all duration-300 ${
          error
            ? 'border-red-400 bg-red-50'
            : focused
            ? 'border-navy shadow-[0_0_0_4px_rgba(172,30,50,0.08)]'
            : 'border-gray-200 bg-white hover:border-gray-300'
        }`}
      >
        {/* Icon */}
        <div className={`absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
          focused ? 'text-navy' : 'text-gray-300'
        }`}>
          <Icon className="w-4 h-4" />
        </div>

        {/* Floating label */}
        <label
          htmlFor={id}
          className={`absolute left-9 transition-all duration-200 pointer-events-none font-body ${
            active
              ? 'top-2 text-[10px] font-semibold uppercase tracking-widest text-navy'
              : 'top-1/2 -translate-y-1/2 text-sm text-gray-400'
          }`}
        >
          {label}
        </label>

        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={focused ? placeholder : ''}
          className="w-full pt-6 pb-2.5 pl-9 pr-4 bg-transparent font-body text-sm text-gray-800 placeholder-gray-300 focus:outline-none rounded-xl"
        />
      </div>
      {error && (
        <p className="font-body text-xs text-red-500 mt-1 ml-1">{error}</p>
      )}
    </div>
  )
}

function FloatingTextarea({ id, label, value, onChange, error, icon: Icon }) {
  const [focused, setFocused] = useState(false)
  const active = focused || value.length > 0
  const MAX = 500

  return (
    <div className="relative">
      <div
        className={`relative border-2 rounded-xl transition-all duration-300 ${
          error
            ? 'border-red-400 bg-red-50'
            : focused
            ? 'border-navy shadow-[0_0_0_4px_rgba(172,30,50,0.08)]'
            : 'border-gray-200 bg-white hover:border-gray-300'
        }`}
      >
        <div className={`absolute left-3.5 top-4 transition-colors duration-300 ${
          focused ? 'text-navy' : 'text-gray-300'
        }`}>
          <Icon className="w-4 h-4" />
        </div>

        <label
          htmlFor={id}
          className={`absolute left-9 transition-all duration-200 pointer-events-none font-body ${
            active
              ? 'top-2 text-[10px] font-semibold uppercase tracking-widest text-navy'
              : 'top-4 text-sm text-gray-400'
          }`}
        >
          {label}
        </label>

        <textarea
          id={id}
          rows={4}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          maxLength={MAX}
          placeholder={focused ? 'Tell us about your real estate goals...' : ''}
          className="w-full pt-7 pb-3 pl-9 pr-4 bg-transparent font-body text-sm text-gray-800 placeholder-gray-300 focus:outline-none resize-none rounded-xl"
        />

        {/* Character count */}
        <div className={`absolute bottom-2.5 right-3 font-body text-[10px] transition-opacity duration-200 ${
          focused ? 'opacity-100' : 'opacity-0'
        } ${value.length > MAX * 0.9 ? 'text-red-400' : 'text-gray-300'}`}>
          {value.length}/{MAX}
        </div>
      </div>
      {error && <p className="font-body text-xs text-red-500 mt-1 ml-1">{error}</p>}
    </div>
  )
}

function SelectField({ id, label, value, onChange, icon: Icon }) {
  const [focused, setFocused] = useState(false)

  return (
    <div
      className={`relative border-2 rounded-xl transition-all duration-300 ${
        focused
          ? 'border-navy shadow-[0_0_0_4px_rgba(172,30,50,0.08)]'
          : 'border-gray-200 bg-white hover:border-gray-300'
      }`}
    >
      <div className={`absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
        focused ? 'text-navy' : 'text-gray-300'
      }`}>
        <Icon className="w-4 h-4" />
      </div>

      <label
        htmlFor={id}
        className="absolute left-9 top-2 text-[10px] font-semibold uppercase tracking-widest text-navy font-body pointer-events-none"
      >
        {label}
      </label>

      <select
        id={id}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full appearance-none pt-6 pb-2.5 pl-9 pr-9 bg-transparent font-body text-sm text-gray-800 focus:outline-none rounded-xl cursor-pointer"
      >
        {TIMELINES.map((t) => <option key={t} value={t}>{t}</option>)}
      </select>

      <FiChevronDown className={`absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none transition-all duration-300 ${
        focused ? 'text-navy rotate-180' : 'text-gray-300'
      }`} />
    </div>
  )
}

export default function ContactModal({ onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', timeline: 'Not Sure', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function set(key) { return (e) => setForm((p) => ({ ...p, [key]: e.target.value })) }

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.phone.trim()) e.phone = 'Phone is required'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setSubmitted(true)
  }

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center px-4 py-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Modal card */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.96 }}
        transition={{ type: 'spring', stiffness: 300, damping: 28 }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-ivory rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden z-10"
      >
        {/* Top accent bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-navy via-gold to-navy" />

        <div className="p-8">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-all"
          >
            <FiX className="w-4 h-4" />
          </button>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-5">
                  <FiSend className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-navy mb-2">Message Sent!</h3>
                <p className="font-body text-gray-500 text-sm">
                  Thank you, {form.name}. We'll be in touch within 24 hours.
                </p>
              </motion.div>
            ) : (
              <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <p className="font-body text-xs font-semibold text-gold uppercase tracking-widest mb-1">
                  Get in Touch
                </p>
                <h2 className="font-heading text-3xl font-semibold text-navy mb-1">
                  Send Us a Message
                </h2>
                <p className="font-body text-gray-400 text-xs mb-7">
                  Fill out the form and we'll get back to you within 24 hours — usually much sooner.
                </p>

                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FloatingInput
                      id="cm-name"
                      label="Full Name *"
                      icon={FiUser}
                      value={form.name}
                      onChange={set('name')}
                      error={errors.name}
                      placeholder="Jane Smith"
                    />
                    <FloatingInput
                      id="cm-email"
                      label="Email Address *"
                      type="email"
                      icon={FiMail}
                      value={form.email}
                      onChange={set('email')}
                      error={errors.email}
                      placeholder="you@example.com"
                    />
                  </div>

                  <FloatingInput
                    id="cm-phone"
                    label="Phone Number *"
                    type="tel"
                    icon={FiPhone}
                    value={form.phone}
                    onChange={set('phone')}
                    error={errors.phone}
                    placeholder="(678) 000-0000"
                  />

                  <SelectField
                    id="cm-timeline"
                    label="How soon are you looking to buy or sell?"
                    icon={FiChevronDown}
                    value={form.timeline}
                    onChange={set('timeline')}
                  />

                  <FloatingTextarea
                    id="cm-message"
                    label="Message *"
                    icon={FiMessageSquare}
                    value={form.message}
                    onChange={set('message')}
                    error={errors.message}
                  />

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 bg-navy hover:bg-navy-dark text-white font-body font-semibold text-sm py-4 rounded-xl transition-colors"
                  >
                    <FiSend className="w-4 h-4" />
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  )
}
