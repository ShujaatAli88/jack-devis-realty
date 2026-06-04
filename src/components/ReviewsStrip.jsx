import { FiStar } from 'react-icons/fi'

const reviews = [
  {
    id: 1,
    name: 'The Murrays',
    role: 'Home Seller',
    quote: 'Mr. Jack has been outstanding in helping me. With me he was more than a Realtor — he assisted me in other areas of the sale. I will gladly use Mr. Jack again.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'C. Coleman',
    role: 'Home Buyer',
    quote: "Tomond was willing to work around my schedule. I don't think I could have worked with someone more wonderful — highly recommend!",
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
  },
]

export default function ReviewsStrip() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '4/3' }}>
          <img
            src="https://images.unsplash.com/photo-1600047508788-786f3865b4c6?w=800&auto=format&fit=crop&q=80"
            alt="Happy clients in their new Atlanta Metro home"
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-6 left-6 bg-navy/90 backdrop-blur-sm text-white px-5 py-3 rounded-xl">
            <p className="font-body text-xs text-white uppercase tracking-widest mb-0.5">Client Satisfaction</p>
            <p className="font-heading text-3xl font-semibold">100%</p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="section-heading mb-2">What Clients Say</h2>
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex gap-4 bg-ivory rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <img
                src={review.avatar}
                alt={review.name}
                className="w-14 h-14 rounded-full object-cover shrink-0 border-2 border-gray-200"
              />
              <div>
                <div className="flex mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FiStar key={i} className="w-4 h-4 text-[#374151]" style={{ fill: '#374151' }} />
                  ))}
                </div>
                <p className="font-body text-gray-600 text-sm leading-relaxed mb-2">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <p className="font-body text-xs font-semibold text-navy">{review.name}</p>
                <p className="font-body text-xs text-gray-400">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
