import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaPhone, FaEnvelope, FaArrowRight } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import PageHero from '../components/PageHero'
import Footer from '../components/Footer'
import { agents } from '../data/agents'

export default function About() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <Helmet>
        <title>Meet The Team | Jack Davis Realty – Atlanta, GA</title>
        <meta name="description" content="Meet Tomond Jack, Managing Broker & Founder of Jack Davis Realty. Over 6,000 real estate deals and 20+ years serving the Atlanta Metro area." />
      </Helmet>

      <Navbar />
      <PageHero title="Meet The Team" breadcrumb="About" />

      <div className="bg-navy py-5 px-4 text-center">
        <p className="font-body text-sm text-white/90 tracking-widest uppercase">
          Jack Davis Realty — Your Atlanta Residential &amp; Investment Specialist
        </p>
      </div>

      {/* Team */}
      <section id="team" className="bg-navy pt-10 pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-body text-xs uppercase tracking-[0.25em] text-white/80 mb-3">Our Team</p>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white leading-tight">
              The People Behind Every Deal
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {agents.map((member, i) => (
              <motion.div
                key={member.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >
                {/* Portrait photo */}
                <Link to={`/agents/${member.slug}`}>
                  <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="font-heading text-xl font-semibold text-white leading-tight">
                        {member.name}
                      </h3>
                      <p className="font-body text-xs text-gold mt-0.5">{member.title}</p>
                    </div>
                  </div>
                </Link>

                {/* Contact info */}
                <div className="px-5 py-4 space-y-2.5">
                  <p className="font-body text-[10px] uppercase tracking-widest text-gray-400 text-center pb-2 border-b border-gray-100">
                    Jack Davis Realty
                  </p>
                  <a
                    href={`tel:${member.phone.replace(/\D/g, '')}`}
                    className="flex items-center gap-3 group/link"
                  >
                    <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center shrink-0 group-hover/link:bg-gold/20 transition-colors">
                      <FaPhone className="text-gold text-xs" />
                    </span>
                    <span className="font-body text-sm text-gray-600 group-hover/link:text-gold transition-colors">
                      {member.phone}
                    </span>
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-3 group/link"
                  >
                    <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center shrink-0 group-hover/link:bg-gold/20 transition-colors">
                      <FaEnvelope className="text-gold text-xs" />
                    </span>
                    <span className="font-body text-sm text-gray-600 group-hover/link:text-gold transition-colors truncate">
                      {member.email}
                    </span>
                  </a>
                  <Link
                    to={`/agents/${member.slug}`}
                    className="flex items-center justify-center gap-1.5 font-body text-xs text-gold hover:text-navy transition-colors pt-1"
                  >
                    View Profile <FaArrowRight className="text-[10px]" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  )
}
