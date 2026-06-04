import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function PageHero({ title, breadcrumb, image }) {
  const bgImage = image || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&auto=format&fit=crop&q=80'

  return (
    <section className="relative pt-32 pb-20 flex items-end min-h-[340px]">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={bgImage}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(0,0,0,0.85))' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-heading text-5xl md:text-6xl font-semibold text-white mb-4">
            {title}
          </h1>
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 font-body text-sm text-white/50">
            <Link to="/" className="hover:text-[#AC1E32] transition-colors">
              Home
            </Link>
            <span className="text-gray-400">›</span>
            <span className="text-white/70">{breadcrumb || title}</span>
          </nav>
        </motion.div>
      </div>
    </section>
  )
}
