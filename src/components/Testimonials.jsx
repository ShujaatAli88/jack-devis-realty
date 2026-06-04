import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { FiStar } from 'react-icons/fi'
import { testimonials } from '../data/testimonials'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Testimonials() {
  return (
    <section className="bg-slate-dark py-24 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <div className="flex justify-center mb-6">
            <span className="font-heading text-3xl font-semibold text-white italic">JD</span>
          </div>
          <p className="section-label text-white mb-3">Client Stories</p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white mb-4">Success Stories</h2>
          <p className="font-body text-white/50 max-w-xl mx-auto">
            Real experiences from clients who trusted Jack Davis Realty with their most important investment.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={32}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="testimonials-swiper pb-14"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 text-center mx-4">
                <div className="flex justify-center mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <FiStar key={i} className="w-5 h-5 text-white" style={{ fill: 'white' }} />
                  ))}
                </div>
                <p className="font-heading text-xl md:text-2xl text-white/90 italic leading-relaxed mb-8 max-w-2xl mx-auto">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-white/40"
                  />
                  <div className="text-left">
                    <p className="font-body font-semibold text-white text-sm">{t.name}</p>
                    <p className="font-body text-white/80 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
