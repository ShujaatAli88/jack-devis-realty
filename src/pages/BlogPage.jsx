import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import PageHero from '../components/PageHero'
import BlogCard from '../components/BlogCard'
import Footer from '../components/Footer'
import { posts } from '../data/posts'

export default function BlogPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <Helmet>
        <title>Blog | Jack Davis Realty – Atlanta Real Estate Insights</title>
        <meta name="description" content="Atlanta Metro real estate insights, market updates, buyer guides, and seller tips from Jack Davis Realty." />
      </Helmet>

      <Navbar />
      <PageHero title="Blog" breadcrumb="Blog" />

      <section className="bg-slate-dark py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label text-gold mb-3">Expert Insights</p>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white">Latest Articles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&auto=format&fit=crop&q=80" alt="Atlanta estate" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative z-10 text-center py-24 px-4">
          <p className="section-label text-gold mb-4">Ready to Make a Move?</p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white mb-6">Find Your Perfect Atlanta Metro Home</h2>
          <p className="font-body text-white/60 max-w-lg mx-auto mb-10">Browse our curated collection of Atlanta Metro properties — from Decatur condos to Lawrenceville family homes.</p>
          <Link to="/search" className="btn-gold">View All Listings</Link>
        </div>
      </section>

      <Footer />
    </motion.div>
  )
}
