import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link, useParams, Navigate } from 'react-router-dom'
import { FiCheck, FiAlertCircle } from 'react-icons/fi'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import Testimonials from '../components/Testimonials'
import { getSituation, situations } from '../data/situations'

const RED = '#8D2222'

export default function SituationPage() {
  const { slug } = useParams()
  const situation = getSituation(slug)

  if (!situation) return <Navigate to="/" replace />

  const otherSituations = situations.filter((s) => s.slug !== slug).slice(0, 4)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Helmet>
        <title>{situation.metaTitle}</title>
        <meta name="description" content={situation.intro} />
      </Helmet>

      <Navbar />
      <PageHero
        title={situation.label}
        breadcrumb={situation.label}
        image={situation.heroImage}
      />

      {/* Intro */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-label mb-4">We Can Help</p>
          <h2 className="section-heading mb-6">{situation.headline}</h2>
          <p className="font-body text-gray-500 text-lg leading-relaxed mb-10">
            {situation.intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/cash-offer" className="btn-gold">
              Get My Fast Cash Offer
            </Link>
            <Link to="/contact" className="btn-outline-navy">
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Pain points + how we help */}
      <section className="bg-ivory py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-sm">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: `${RED}1A` }}>
              <FiAlertCircle className="w-6 h-6" style={{ color: RED }} />
            </div>
            <h3 className="font-heading text-2xl font-semibold text-navy mb-5">
              What Makes This Hard
            </h3>
            <ul className="space-y-4">
              {situation.painPoints.map((point) => (
                <li key={point} className="font-body text-gray-600 leading-relaxed flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: RED }} />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
              <FiCheck className="w-6 h-6 text-gold" />
            </div>
            <h3 className="font-heading text-2xl font-semibold text-navy mb-5">
              How Jack Davis Realty Helps
            </h3>
            <ul className="space-y-4">
              {situation.howWeHelp.map((point) => (
                <li key={point} className="font-body text-gray-600 leading-relaxed flex items-start gap-3">
                  <FiCheck className="w-5 h-5 shrink-0 mt-0.5 text-gold" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="section-label mb-3">Our Process</p>
          <h2 className="section-heading mb-14">Three Simple Steps</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { n: '01', title: 'Tell Us About the Property', desc: 'Share the address, condition, and your timeline — takes just a couple minutes.' },
              { n: '02', title: 'Receive Your Offer', desc: 'Get a fair, no-obligation cash offer within 24–48 hours.' },
              { n: '03', title: 'Choose Your Closing Date', desc: 'Close in as little as 14 days, or whenever works best for you.' },
            ].map((s) => (
              <div key={s.n} className="text-left">
                <p className="font-heading text-4xl font-bold mb-3" style={{ color: RED }}>{s.n}</p>
                <h3 className="font-heading text-lg font-semibold text-navy mb-2">{s.title}</h3>
                <p className="font-body text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Other situations */}
      <section className="bg-ivory py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="section-label mb-3">Other Situations We Help With</p>
          <h2 className="section-heading mb-12">Every Situation Is Different</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {otherSituations.map((s) => (
              <Link
                key={s.slug}
                to={`/sell/${s.slug}`}
                className="bg-white rounded-2xl px-4 py-6 font-body text-sm font-semibold text-navy border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  )
}
