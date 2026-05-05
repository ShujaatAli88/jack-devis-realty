import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaStar, FaArrowLeft, FaQuoteLeft } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { agents } from '../data/agents'

function StarRow({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <FaStar key={i} className="text-gold text-sm" />
      ))}
    </div>
  )
}

export default function AgentProfile() {
  const { slug } = useParams()
  const agent = agents.find((a) => a.slug === slug)

  if (!agent) return <Navigate to="/about" replace />

  const stats = [
    agent.dealsCount && { label: 'Real Estate Deals', value: agent.dealsCount },
    agent.yearsExp && { label: 'Years Experience', value: agent.yearsExp },
    agent.licensedSince && { label: 'Licensed Since', value: agent.licensedSince },
  ].filter(Boolean)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Helmet>
        <title>{agent.name} | Jack Davis Realty</title>
        <meta
          name="description"
          content={`Meet ${agent.name}, ${agent.title} at Jack Davis Realty. ${agent.bio[0]?.slice(0, 120) || 'Serving the Atlanta Metro area.'}`}
        />
      </Helmet>

      <Navbar />

      {/* ── Top strip ── */}
      <div className="bg-navy pt-28 pb-10 px-4">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/about#team"
            className="inline-flex items-center gap-2 font-body text-sm text-gold/70 hover:text-gold transition-colors mb-8"
          >
            <FaArrowLeft className="text-xs" /> Back to Team
          </Link>

          <div className="flex flex-wrap items-end gap-3">
            <div>
              <p className="font-body text-xs uppercase tracking-[0.25em] text-gold/60 mb-2">
                Jack Davis Realty
              </p>
              <h1 className="font-heading text-5xl md:text-6xl font-semibold text-white leading-tight">
                {agent.name}
              </h1>
              <p className="font-body text-gold mt-2 text-lg">{agent.title}</p>
              {agent.subtitle && (
                <p className="font-body text-white/50 text-sm mt-0.5">{agent.subtitle}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Main content ── */}
      <section className="bg-ivory py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[340px_1fr] gap-12">

          {/* ── Left column: photo + contact card ── */}
          <div className="space-y-6">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
              style={{ aspectRatio: '3/4' }}
            >
              <img
                src={agent.image}
                alt={agent.name}
                className="w-full h-full object-cover object-top"
              />
            </motion.div>

            {/* Stats */}
            {stats.length > 0 && (
              <div className="grid grid-cols-3 gap-3">
                {stats.map((s) => (
                  <div key={s.label} className="bg-white rounded-2xl p-4 text-center shadow-sm">
                    <p className="font-heading text-2xl font-semibold text-navy">{s.value}</p>
                    <p className="font-body text-[10px] text-gray-400 uppercase tracking-widest leading-tight mt-1">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Contact card */}
            <div className="bg-navy rounded-3xl p-6 space-y-4">
              <p className="font-body text-xs uppercase tracking-widest text-gold/60 mb-4">
                Get In Touch
              </p>
              <a
                href={`tel:${agent.phone.replace(/\D/g, '')}`}
                className="flex items-center gap-4 group"
              >
                <span className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center shrink-0 group-hover:bg-gold/30 transition-colors">
                  <FaPhone className="text-gold text-sm" />
                </span>
                <span className="font-body text-white group-hover:text-gold transition-colors">
                  {agent.phone}
                </span>
              </a>
              <a
                href={`mailto:${agent.email}`}
                className="flex items-center gap-4 group"
              >
                <span className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center shrink-0 group-hover:bg-gold/30 transition-colors">
                  <FaEnvelope className="text-gold text-sm" />
                </span>
                <span className="font-body text-white group-hover:text-gold transition-colors break-all text-sm">
                  {agent.email}
                </span>
              </a>
            </div>
          </div>

          {/* ── Right column: bio + reviews ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Bio */}
            {agent.bio.length > 0 && (
              <div className="mb-14">
                <p className="font-body text-xs uppercase tracking-[0.25em] text-gold mb-3">
                  About {agent.name.split(' ')[0]}
                </p>
                <h2 className="font-heading text-3xl font-semibold text-navy mb-6">
                  {agent.subtitle || agent.title}
                </h2>
                <div className="space-y-5">
                  {agent.bio.map((para, i) => (
                    <p key={i} className="font-body text-gray-600 leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Reviews */}
            {agent.reviews.length > 0 && (
              <div>
                <p className="font-body text-xs uppercase tracking-[0.25em] text-gold mb-3">
                  Client Reviews
                </p>
                <h2 className="font-heading text-3xl font-semibold text-navy mb-8">
                  What Clients Are Saying
                </h2>

                <div className="space-y-6">
                  {agent.reviews.map((review, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 relative"
                    >
                      <FaQuoteLeft className="text-gold/20 text-5xl absolute top-6 right-6" />
                      <StarRow count={review.stars} />
                      <p className="font-body text-gray-600 leading-relaxed mt-4 mb-5 relative z-10">
                        "{review.text}"
                      </p>
                      <p className="font-heading text-navy font-semibold">— {review.author}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Placeholder when no bio/reviews yet */}
            {agent.bio.length === 0 && agent.reviews.length === 0 && (
              <div className="flex items-center justify-center h-64 rounded-3xl border-2 border-dashed border-gray-200">
                <p className="font-body text-gray-400 text-center">
                  Agent bio and reviews coming soon.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  )
}
