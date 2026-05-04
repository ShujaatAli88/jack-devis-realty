import { Link } from 'react-router-dom'
import { FiPhone } from 'react-icons/fi'

export default function CTABanner() {
  return (
    <section className="bg-navy-dark overflow-hidden">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[360px]">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&auto=format&fit=crop&q=80"
            alt="Atlanta Metro real estate"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/50" />
          <div className="absolute bottom-8 left-8">
            <span className="bg-gold text-navy font-body text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full">
              Exclusive Service, Best Results
            </span>
          </div>
        </div>

        <div className="bg-slate-dark px-10 py-16 flex flex-col justify-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-4 leading-tight">
            Want to ask about a property or anything else?
          </h2>
          <p className="font-body text-white/60 mb-8 leading-relaxed">
            Our team is available to answer your questions, schedule showings,
            and guide you through every step of your Atlanta Metro real estate journey.
          </p>
          <Link to="/contact" className="btn-gold self-start mb-8">Contact Us</Link>
          <div>
            <p className="font-body text-xs text-white/40 uppercase tracking-widest mb-2">Direct Call Us By</p>
            <a
              href="tel:6789222532"
              className="flex items-center gap-3 font-heading text-3xl font-semibold text-gold hover:text-gold-light transition-colors"
            >
              <FiPhone className="w-6 h-6" />
              678-922-2532
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
