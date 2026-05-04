import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { serviceSplit } from '../data/services'

export default function ServicesSplit() {
  return (
    <section className="bg-white py-0 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2">
        <div className="relative min-h-[400px] lg:min-h-[600px]">
          <img
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&auto=format&fit=crop&q=80"
            alt="Atlanta real estate lifestyle"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/30" />
        </div>

        <div className="bg-ivory py-16 px-8 lg:px-16 flex flex-col justify-center">
          <p className="section-label mb-3">Why Choose Jack Davis Realty</p>
          <h2 className="section-heading mb-12">Our Service</h2>

          <div className="space-y-10">
            {serviceSplit.map((item) => (
              <div key={item.id} className="border-b border-gray-200 pb-8 last:border-0 last:pb-0">
                <h3 className="font-heading text-xl font-semibold text-navy mb-3">{item.title}</h3>
                <p className="font-body text-gray-600 leading-relaxed mb-4">{item.description}</p>
                <Link
                  to="/about"
                  className="font-body text-sm font-semibold text-gold hover:text-gold-dark flex items-center gap-2 transition-colors group"
                >
                  Learn More
                  <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
