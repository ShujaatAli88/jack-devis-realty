import { Link } from 'react-router-dom'

export default function ConnectCTA() {
  return (
    <section className="bg-ivory py-24 px-4 text-center">
      <div className="max-w-2xl mx-auto">
        <p className="section-label mb-4">Ready to Begin?</p>
        <h2 className="section-heading mb-5">
          Let&apos;s Connect
        </h2>
        <p className="font-body text-gray-500 leading-relaxed mb-10">
          Whether you&apos;re buying, selling, or exploring your options in the Atlanta Metro —
          a conversation with Tomond Jack costs nothing and could change everything.
        </p>
        <Link to="/contact" className="btn-gold">
          Schedule a Consultation
        </Link>
      </div>
    </section>
  )
}
