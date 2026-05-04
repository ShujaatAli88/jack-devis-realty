import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiSend } from 'react-icons/fi'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import Navbar from '../components/Navbar'
import PageHero from '../components/PageHero'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

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
    if (Object.keys(e).length > 0) {
      setErrors(e)
      return
    }
    setSubmitted(true)
    setErrors({})
  }

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <FiSend className="w-7 h-7 text-gold" />
        </div>
        <h3 className="font-heading text-2xl font-semibold text-navy mb-2">
          Message Received!
        </h3>
        <p className="font-body text-gray-500">
          Thank you, {form.name}. Jack will be in touch within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="font-body text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Jack Smith"
            className={`w-full bg-ivory border rounded-xl px-4 py-3 font-body text-sm text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all ${
              errors.name ? 'border-red-400' : 'border-gray-200 focus:border-gold'
            }`}
          />
          {errors.name && (
            <p className="font-body text-xs text-red-500 mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <label className="font-body text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">
            Email Address *
          </label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@example.com"
            className={`w-full bg-ivory border rounded-xl px-4 py-3 font-body text-sm text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all ${
              errors.email ? 'border-red-400' : 'border-gray-200 focus:border-gold'
            }`}
          />
          {errors.email && (
            <p className="font-body text-xs text-red-500 mt-1">{errors.email}</p>
          )}
        </div>
      </div>

      <div>
        <label className="font-body text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">
          Phone Number *
        </label>
        <input
          type="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          placeholder="(678) 000-0000"
          className={`w-full bg-ivory border rounded-xl px-4 py-3 font-body text-sm text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all ${
            errors.phone ? 'border-red-400' : 'border-gray-200 focus:border-gold'
          }`}
        />
        {errors.phone && (
          <p className="font-body text-xs text-red-500 mt-1">{errors.phone}</p>
        )}
      </div>

      <div>
        <label className="font-body text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">
          Message *
        </label>
        <textarea
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tell us about your real estate goals..."
          className={`w-full bg-ivory border rounded-xl px-4 py-3 font-body text-sm text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all resize-none ${
            errors.message ? 'border-red-400' : 'border-gray-200 focus:border-gold'
          }`}
        />
        {errors.message && (
          <p className="font-body text-xs text-red-500 mt-1">{errors.message}</p>
        )}
      </div>

      <button type="submit" className="btn-gold w-full flex items-center justify-center gap-2">
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
          content="Get in touch with Jack Davis Realty — Atlanta's residential and investment specialist. Schedule a consultation or request a free home valuation."
        />
      </Helmet>

      <Navbar />
      <PageHero title="Contact Us" breadcrumb="Contact" />

      {/* Main content */}
      <section className="bg-ivory py-24 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Left: form */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
            <p className="section-label mb-3">Get in Touch</p>
            <h2 className="section-heading mb-2">Send Us a Message</h2>
            <p className="font-body text-gray-500 text-sm mb-8">
              We respond to all inquiries within 24 hours, usually much sooner.
            </p>
            <ContactForm />
          </div>

          {/* Right: FAQ */}
          <div>
            <p className="section-label mb-3">Quick Answers</p>
            <h2 className="section-heading mb-8">FAQ</h2>
            <FAQ />
          </div>
        </div>
      </section>

      {/* Agent info card */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-navy rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-3">
              <div className="relative md:col-span-1">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80"
                  alt="Jack Davis"
                  loading="lazy"
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:col-span-2 p-8 md:p-10 flex flex-col justify-center">
                <p className="section-label text-gold mb-2">Your Agent</p>
                <h3 className="font-heading text-3xl font-semibold text-white mb-1">Tomond Jack</h3>
                <p className="font-body text-white/50 text-sm mb-6">
                  Managing Broker &amp; Founder — Jack Davis Realty
                </p>
                <div className="space-y-3 mb-8">
                  <a href="mailto:info@jackdavisrealty.com" className="flex items-center gap-3 font-body text-sm text-white/80 hover:text-gold transition-colors">
                    <FiMail className="w-4 h-4 text-gold shrink-0" />
                    info@jackdavisrealty.com
                  </a>
                  <a href="tel:6789222532" className="flex items-center gap-3 font-body text-sm text-white/80 hover:text-gold transition-colors">
                    <FiPhone className="w-4 h-4 text-gold shrink-0" />
                    678-922-2532
                  </a>
                  <div className="flex items-center gap-3 font-body text-sm text-white/80">
                    <FiMapPin className="w-4 h-4 text-gold shrink-0" />
                    2020 Howell Mill Rd NW, Suite D422, Atlanta, GA 30318
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
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-navy text-white transition-all"
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  )
}
