import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiSend, FiMail, FiPhone, FiMapPin, FiClock, FiChevronDown } from 'react-icons/fi'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const TIMELINES = [
  'Not Sure',
  'Within the next 3 months',
  'Within the next 6 months',
  'Now',
]

function Field({ label, error, children }) {
  return (
    <div>
      <label className="font-body text-xs font-semibold text-gray-400 uppercase tracking-widest block mb-2">
        {label}
      </label>
      {children}
      {error && <p className="font-body text-xs text-red-500 mt-1.5">{error}</p>}
    </div>
  )
}

const inputClass = (err) =>
  `w-full bg-white border rounded-xl px-4 py-3.5 font-body text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gold/40 transition-all ${
    err ? 'border-red-400' : 'border-gray-200 focus:border-gold'
  }`

function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    timeline: 'Not Sure',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function set(key) {
    return (e) => setForm((p) => ({ ...p, [key]: e.target.value }))
  }

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.phone.trim()) e.phone = 'Phone is required'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  function handleSubmit(ev) {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length > 0) { setErrors(e); return }
    setSubmitted(true)
    setErrors({})
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-16"
      >
        <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-5">
          <FiSend className="w-7 h-7 text-gold" />
        </div>
        <h3 className="font-heading text-3xl font-semibold text-navy mb-2">Message Received!</h3>
        <p className="font-body text-gray-500 text-base">
          Thank you, {form.name}. We'll be in touch within 24 hours.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Full Name *" error={errors.name}>
          <input
            type="text"
            value={form.name}
            onChange={set('name')}
            placeholder="Jane Smith"
            className={inputClass(errors.name)}
          />
        </Field>
        <Field label="Email Address *" error={errors.email}>
          <input
            type="email"
            value={form.email}
            onChange={set('email')}
            placeholder="you@example.com"
            className={inputClass(errors.email)}
          />
        </Field>
      </div>

      <Field label="Phone Number *" error={errors.phone}>
        <input
          type="tel"
          value={form.phone}
          onChange={set('phone')}
          placeholder="(678) 000-0000"
          className={inputClass(errors.phone)}
        />
      </Field>

      <Field label="How soon are you looking to buy or sell?">
        <div className="relative">
          <select
            value={form.timeline}
            onChange={set('timeline')}
            className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3.5 font-body text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all cursor-pointer"
          >
            {TIMELINES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
      </Field>

      <Field label="Message *" error={errors.message}>
        <textarea
          rows={5}
          value={form.message}
          onChange={set('message')}
          placeholder="Tell us about your real estate goals..."
          className={`${inputClass(errors.message)} resize-none`}
        />
      </Field>

      <button
        type="submit"
        className="btn-gold w-full flex items-center justify-center gap-2 py-4 text-base font-semibold tracking-wide"
      >
        <FiSend className="w-4 h-4" />
        Send Message
      </button>
    </form>
  )
}

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Helmet>
        <title>Contact Us | Jack Davis Realty – Atlanta, GA</title>
        <meta
          name="description"
          content="Get in touch with Jack Davis Realty — Atlanta's residential and investment specialist."
        />
      </Helmet>

      <Navbar />

      {/* Hero banner */}
      <div
        className="relative pt-28"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&auto=format&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative z-10 text-center py-20 px-4">
          <p className="section-label text-gold mb-3">We'd Love to Hear From You</p>
          <h1 className="font-heading text-5xl md:text-6xl font-semibold text-white mb-4">
            Contact Us
          </h1>
          <p className="font-body text-white/60 text-lg max-w-xl mx-auto">
            Reach out anytime — our team responds within 24 hours.
          </p>
        </div>
      </div>

      {/* Main grid */}
      <section className="bg-ivory py-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-10 items-start">

          {/* Left panel — info */}
          <div className="lg:col-span-2 space-y-8">

            {/* Agent card */}
            <div className="bg-navy rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=80"
                alt="Tomond Jack"
                className="w-full h-52 object-cover object-top"
              />
              <div className="p-7">
                <p className="font-body text-xs text-gold uppercase tracking-widest mb-1">Your Agent</p>
                <h3 className="font-heading text-2xl font-semibold text-white mb-0.5">Tomond Jack</h3>
                <p className="font-body text-white/40 text-xs mb-5">Managing Broker &amp; Founder</p>
                <div className="space-y-3.5 mb-6">
                  <a href="mailto:tomond@jackdavisrealty.com" className="flex items-center gap-3 font-body text-sm text-white/75 hover:text-gold transition-colors">
                    <FiMail className="w-4 h-4 text-gold shrink-0" />
                    tomond@jackdavisrealty.com
                  </a>
                  <a href="tel:6789222532" className="flex items-center gap-3 font-body text-sm text-white/75 hover:text-gold transition-colors">
                    <FiPhone className="w-4 h-4 text-gold shrink-0" />
                    678-922-2532
                  </a>
                  <div className="flex items-start gap-3 font-body text-sm text-white/75">
                    <FiMapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    2020 Howell Mill Rd NW, Suite D422<br />Atlanta, GA 30318
                  </div>
                </div>
                <div className="flex gap-3">
                  {[
                    { icon: <FaFacebook className="w-4 h-4" />, label: 'Facebook' },
                    { icon: <FaInstagram className="w-4 h-4" />, label: 'Instagram' },
                  ].map(({ icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      aria-label={label}
                      className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-navy text-white transition-all"
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Office hours */}
            <div className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center">
                  <FiClock className="w-5 h-5 text-gold" />
                </div>
                <h4 className="font-heading text-lg font-semibold text-navy">Office Hours</h4>
              </div>
              <div className="space-y-2.5 font-body text-sm">
                {[
                  ['Mon – Fri', '9:00 AM – 6:00 PM'],
                  ['Saturday', '10:00 AM – 4:00 PM'],
                  ['Sunday', 'By Appointment'],
                ].map(([day, hours]) => (
                  <div key={day} className="flex justify-between text-gray-600">
                    <span className="font-medium text-gray-800">{day}</span>
                    <span>{hours}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right panel — form */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
            <div className="mb-8">
              <p className="section-label mb-2">Get in Touch</p>
              <h2 className="font-heading text-4xl font-semibold text-navy mb-2">
                Send Us a Message
              </h2>
              <p className="font-body text-gray-400 text-sm">
                Fill out the form and we'll get back to you within 24 hours — usually much sooner.
              </p>
            </div>
            <ContactForm />
          </div>

        </div>
      </section>

      {/* Map strip */}
      <section className="h-72 w-full">
        <iframe
          title="Jack Davis Realty Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.1!2d-84.4113!3d33.7942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f504b4e1c2f0a1%3A0x1!2s2020+Howell+Mill+Rd+NW%2C+Atlanta%2C+GA+30318!5e0!3m2!1sen!2sus!4v1"
          width="100%"
          height="100%"
          style={{ border: 0, display: 'block' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <Footer />
    </motion.div>
  )
}
