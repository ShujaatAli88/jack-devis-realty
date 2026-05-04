import { services } from '../data/services'
import StatsBar from './StatsBar'

export default function Services() {
  return (
    <section className="relative">
      <div className="relative bg-slate-dark overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&auto=format&fit=crop&q=80"
          alt="Atlanta real estate"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="section-label text-gold mb-3">What We Offer</p>
              <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white mb-4">Our Services</h2>
              <p className="font-body text-white/60 max-w-xl mx-auto">
                Serving the Atlanta Metro area with 20+ years of combined experience helping clients buy, sell, and invest.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((svc) => (
                <div
                  key={svc.id}
                  className="relative overflow-hidden rounded-2xl group cursor-pointer"
                  style={{ aspectRatio: '4/3' }}
                >
                  <img
                    src={svc.image}
                    alt={svc.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="font-heading text-2xl font-semibold text-white mb-2 group-hover:text-gold transition-colors">
                      {svc.title}
                    </h3>
                    <p className="font-body text-white/0 group-hover:text-white/80 text-sm leading-relaxed transition-all duration-300 max-h-0 group-hover:max-h-24 overflow-hidden">
                      {svc.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <StatsBar />
    </section>
  )
}
