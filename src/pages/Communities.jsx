import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import PageHero from '../components/PageHero'
import Footer from '../components/Footer'
import { communities } from '../data/services'

function CommunityCard({ community }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md card-hover group">
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
        <img src={community.image} alt={community.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="font-body text-xs font-semibold text-white bg-[#8D2222] px-3 py-1 rounded-full">Avg. {community.avgPrice}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-heading text-xl font-semibold text-navy mb-2">{community.name}</h3>
        <p className="font-body text-gray-500 text-sm leading-relaxed mb-4">{community.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {community.highlights.map((h) => (
            <span key={h} className="font-body text-xs text-navy bg-ivory border border-gray-200 px-3 py-1 rounded-full">{h}</span>
          ))}
        </div>
        <Link to="/search" className="font-body text-sm font-semibold text-[#8D2222] hover:text-[#6E1A1A] transition-colors">
          View Homes in {community.name} →
        </Link>
      </div>
    </div>
  )
}

export default function Communities() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <Helmet>
        <title>Communities | Jack Davis Realty – Atlanta Metro, GA</title>
        <meta name="description" content="Explore Atlanta Metro communities — Decatur, Lithonia, Snellville, Mableton, Lawrenceville, East Point, Stone Mountain, Lilburn, and more." />
      </Helmet>

      <Navbar />
      <PageHero title="Communities" breadcrumb="Communities" image="https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?w=1600&auto=format&fit=crop&q=80" />

      <section className="bg-ivory py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Explore Atlanta Metro</p>
            <h2 className="section-heading mb-4">Atlanta Metro Communities</h2>
            <p className="font-body text-gray-500 max-w-xl mx-auto">
              Every community in the Atlanta Metro has a distinct personality. Let Tomond Jack guide you to the neighborhood that matches your lifestyle and goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communities.map((community) => (
              <CommunityCard key={community.id} community={community} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 px-4 text-center">
        <p className="section-label text-white mb-4">Ready to Explore?</p>
        <h2 className="font-heading text-4xl font-semibold text-white mb-6">Let Tomond Jack Be Your Local Guide</h2>
        <p className="font-body text-white/60 max-w-lg mx-auto mb-10">
          With 20+ years of living and working across Atlanta Metro, Tomond knows every street, school, and opportunity in each of these communities.
        </p>
        <Link to="/contact" className="btn-gold">Schedule a Neighborhood Tour</Link>
      </section>

      <Footer />
    </motion.div>
  )
}
