import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

export default function BlogCard({ post }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden group card-hover">
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <span className="font-body text-xs font-semibold text-gold uppercase tracking-widest bg-gold/10 px-3 py-1 rounded-full">
          {post.category}
        </span>
        <h3 className="font-heading text-xl font-semibold text-white mt-3 mb-2 leading-snug group-hover:text-gold transition-colors">
          {post.title}
        </h3>
        <p className="font-body text-white/50 text-sm leading-relaxed mb-4 line-clamp-2">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-body text-xs text-white/30">{post.date}</span>
          <Link
            to={`/blog/${post.slug}`}
            className="flex items-center gap-2 font-body text-sm font-semibold text-gold hover:text-gold-light transition-colors group/link"
          >
            Read More
            <FiArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  )
}
