import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import PageHero from '../components/PageHero'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import AgentCard from '../components/AgentCard'
import Footer from '../components/Footer'

const specializations = [
  "Buyer's Representation", 'Home Selling & Marketing',
  'Investment Properties', 'New Construction',
  'Relocation Assistance', 'Property Management',
]

const teamMembers = [
  { name: 'Tomond Jack', title: 'Managing Broker & Founder', image: 'https://u.realgeeks.media/jackdavisrealty/jack_tomand.jpg' },
  { name: 'Jennifer Choates', title: 'Real Estate Agent', image: 'https://u.realgeeks.media/jackdavisrealty/Jennifer_Pressley_Photo.jpg' },
  { name: 'Jeannine Choates', title: 'Real Estate Agent', image: 'https://u.realgeeks.media/jackdavisrealty/Jeannine_Photo.jpg' },
]

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
        <p className="font-body text-sm text-gold/80 tracking-widest uppercase">
          Jack Davis Realty — Your Atlanta Residential &amp; Investment Specialist
        </p>
      </div>

      {/* Bio */}
      <section className="bg-ivory py-24 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="section-label mb-3">Managing Broker &amp; Founder</p>
            <h2 className="section-heading mb-1">Tomond Jack</h2>
            <p className="font-body text-gold font-medium mb-6">Jack Davis Realty</p>
            <p className="font-body text-gray-600 leading-relaxed mb-4">
              I&apos;m a Texas native who moved to metro Atlanta over 25 years ago. After graduating
              from Georgia State University, I began my real estate career as an investor in 2002
              and have been a licensed real estate professional since 2007.
            </p>
            <p className="font-body text-gray-600 leading-relaxed mb-4">
              With over 6,000 real estate deals under my belt, whether as an agent or investor,
              I prioritize understanding your needs and using my expertise to find the best solution.
              Buying or selling a home is a major financial transaction, and my goal is to make the
              process seamless for you.
            </p>
            <p className="font-body text-gray-600 leading-relaxed mb-10">
              As an affiliate with Homes for Heroes, I have the privilege of honoring military
              service members and other heroes with special savings and benefits.
            </p>
            <h3 className="font-heading text-xl font-semibold text-navy mb-4">Specializations</h3>
            <div className="grid grid-cols-2 gap-3 mb-10">
              {specializations.map((s) => (
                <div key={s} className="flex items-center gap-2 font-body text-sm text-gray-600">
                  <span className="w-2 h-2 bg-gold rounded-full shrink-0" />{s}
                </div>
              ))}
            </div>
            <Link to="/contact" className="btn-gold">Let&apos;s Connect</Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 border-2 border-gold/20 rounded-3xl transform translate-x-4 translate-y-4" />
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=80"
              alt="Tomond Jack – Managing Broker, Jack Davis Realty"
              loading="lazy"
              className="relative w-full rounded-3xl object-cover shadow-2xl"
              style={{ aspectRatio: '3/4' }}
            />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Our Team</p>
            <h2 className="section-heading">The People Behind Every Deal</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center bg-ivory rounded-3xl p-8 shadow-sm">
                <img src={member.image} alt={member.name} loading="lazy" className="w-28 h-28 rounded-full object-cover mx-auto mb-4 border-4 border-gold/30" />
                <h3 className="font-heading text-xl font-semibold text-navy mb-1">{member.name}</h3>
                <p className="font-body text-sm text-gray-500">{member.title}</p>
                <p className="font-body text-xs text-gold mt-1">Jack Davis Realty</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Homes for Heroes */}
      <section className="bg-ivory py-24 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&auto=format&fit=crop&q=80" alt="Atlanta skyline" loading="lazy" className="w-full rounded-3xl object-cover shadow-xl" style={{ aspectRatio: '4/3' }} />
          <div>
            <p className="section-label mb-3">Homes for Heroes</p>
            <h2 className="section-heading mb-6">Serving Those Who Serve</h2>
            <p className="font-body text-gray-600 leading-relaxed mb-6">
              As an affiliate with Homes for Heroes, Jack Davis Realty is proud to honor
              military service members, first responders, healthcare workers, and teachers
              with special savings and benefits on real estate transactions.
            </p>
            <p className="font-body text-gray-600 leading-relaxed mb-8">
              Real estate is personal. It&apos;s where your children grow up, where you build
              equity, where your life happens. We take that responsibility seriously and
              ensure every transaction is handled with the utmost care and transparency.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center bg-white rounded-2xl p-6 shadow-sm">
                <p className="font-heading text-4xl font-semibold text-navy mb-1">6,000+</p>
                <p className="font-body text-xs text-gray-500 uppercase tracking-widest">Real Estate Deals</p>
              </div>
              <div className="text-center bg-white rounded-2xl p-6 shadow-sm">
                <p className="font-heading text-4xl font-semibold text-navy mb-1">20+</p>
                <p className="font-body text-xs text-gray-500 uppercase tracking-widest">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="bg-ivory py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Got Questions?</p>
            <h2 className="section-heading">Frequently Asked Questions</h2>
          </div>
          <FAQ />
        </div>
      </section>

      <section className="bg-white py-24 px-4">
        <div className="max-w-4xl mx-auto"><AgentCard /></div>
      </section>

      <Footer />
    </motion.div>
  )
}
