import { Link } from 'react-router-dom'

export default function AboutPreview() {
  return (
    <section className="bg-ivory py-24 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <p className="section-label mb-3">Managing Broker — 20+ Years Experience</p>
          <h2 className="section-heading mb-1">Tomond Jack</h2>
          <p className="font-body text-[#796063] font-medium mb-5">Jack Davis Realty</p>
          <p className="font-body text-gray-600 leading-relaxed mb-8">
            With over 6,000 real estate deals and 20+ years of experience, I prioritize
            understanding your needs and using my expertise to find the best solution.
            Buying or selling a home is a major financial transaction — my goal is to make
            the process seamless for you.
          </p>
          <Link to="/about" className="btn-gold">Meet The Team</Link>
        </div>

        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 border-2 border-gray-200 rounded-3xl transform translate-x-4 translate-y-4" />
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=80"
              alt="Tomond Jack – Managing Broker, Jack Davis Realty"
              loading="lazy"
              className="relative w-full max-w-md rounded-3xl object-cover shadow-2xl"
              style={{ aspectRatio: '4/5' }}
            />
            <div className="absolute -bottom-6 -left-6 bg-navy text-white px-6 py-4 rounded-2xl shadow-xl">
              <p className="font-body text-xs text-white uppercase tracking-widest mb-1">Licensed Since</p>
              <p className="font-heading text-3xl font-semibold">2007</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
