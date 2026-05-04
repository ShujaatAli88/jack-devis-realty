import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiCheck } from 'react-icons/fi'
import Navbar from '../components/Navbar'
import PageHero from '../components/PageHero'
import Footer from '../components/Footer'

const benefits = [
  'No need to make repairs — sell your home as-is',
  'No showings or open houses',
  'Close in 14 days or on your own timeframe',
  'Pay no closing costs',
]

const steps = [
  {
    number: '01',
    title: 'Provide Information',
    description: 'Provide some information about your home and situation. It only takes a few minutes.',
  },
  {
    number: '02',
    title: 'Meet a Specialist',
    description: 'Set up an appointment to meet with one of our specialists at a time that works for you.',
  },
  {
    number: '03',
    title: 'Receive Your Offer',
    description: 'Receive your no-obligation cash offer and choose your own closing date.',
  },
]

export default function CashOffer() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Helmet>
        <title>Cash Offer | Jack Davis Realty – Sell Fast in Atlanta</title>
        <meta
          name="description"
          content="Sell your Atlanta Metro home in as little as 14 days. No repairs, no showings, no closing costs. Get a fast cash offer from Jack Davis Realty today."
        />
      </Helmet>

      <Navbar />
      <PageHero
        title="Cash Offer"
        breadcrumb="Cash Offer"
        image="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&auto=format&fit=crop&q=80"
      />

      {/* Hero copy */}
      <section className="bg-ivory py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-4">Sell Fast, Sell Easy</p>
              <h2 className="section-heading mb-5">
                Receive a Fast Cash Offer
              </h2>
              <p className="font-body text-gray-500 leading-relaxed text-lg mb-8">
                Sell your home in as little as 14 days. We work with cash buyers who are ready
                to purchase your home today — no matter the condition.
              </p>

              {/* Benefits */}
              <ul className="space-y-3 mb-10">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 font-body text-gray-700 text-sm">
                    <span className="w-6 h-6 bg-gold rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <FiCheck className="w-3.5 h-3.5 text-navy" strokeWidth={3} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              <Link to="/contact" className="btn-gold">
                Get My Cash Offer
              </Link>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1600047508788-786f3865b4c6?w=600&auto=format&fit=crop&q=80"
                alt="Sell your home fast"
                loading="lazy"
                className="w-full rounded-3xl object-cover shadow-2xl"
                style={{ aspectRatio: '4/5' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section className="bg-navy py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label text-gold mb-3">Simple Process</p>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="font-heading text-6xl font-semibold text-gold/30 mb-4 leading-none">
                  {step.number}
                </div>
                <h3 className="font-heading text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-white/60 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link to="/contact" className="btn-gold">
              Get My Cash Offer
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ strip */}
      <section className="bg-ivory py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-gray-500 leading-relaxed mb-8">
            Have questions about the cash offer process? Our team is happy to walk you through
            every detail with no pressure and no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:6789222532" className="btn-gold">
              Call 678-922-2532
            </a>
            <Link to="/contact" className="btn-outline-navy">
              Send a Message
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  )
}
