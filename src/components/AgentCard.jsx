import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

export default function AgentCard() {
  return (
    <div className="bg-navy rounded-3xl overflow-hidden shadow-2xl">
      <div className="grid md:grid-cols-3">
        {/* Photo */}
        <div className="relative md:col-span-1">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80"
            alt="Tomond Jack – Managing Broker"
            loading="lazy"
            className="w-full h-64 md:h-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="md:col-span-2 p-8 md:p-10 flex flex-col justify-center">
          <p className="section-label text-gold mb-2">Your Agent</p>
          <h3 className="font-heading text-3xl font-semibold text-white mb-1">Tomond Jack</h3>
          <p className="font-body text-white/50 text-sm mb-6">
            Managing Broker &amp; Founder — Jack Davis Realty
          </p>

          <div className="space-y-3 mb-8">
            <a
              href="mailto:info@jackdavisrealty.com"
              className="flex items-center gap-3 font-body text-sm text-white/80 hover:text-gold transition-colors"
            >
              <FiMail className="w-4 h-4 text-gold shrink-0" />
              info@jackdavisrealty.com
            </a>
            <a
              href="tel:6789222532"
              className="flex items-center gap-3 font-body text-sm text-white/80 hover:text-gold transition-colors"
            >
              <FiPhone className="w-4 h-4 text-gold shrink-0" />
              678-922-2532
            </a>
            <div className="flex items-center gap-3 font-body text-sm text-white/80">
              <FiMapPin className="w-4 h-4 text-gold shrink-0" />
              2020 Howell Mill Rd NW, Suite D422, Atlanta, GA 30318
            </div>
          </div>

          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-navy text-white transition-all"
            >
              <FaFacebook className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-navy text-white transition-all"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
