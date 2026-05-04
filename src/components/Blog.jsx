import { Link } from 'react-router-dom'
import { posts } from '../data/posts'
import BlogCard from './BlogCard'

export default function Blog() {
  const featured = posts.slice(0, 3)

  return (
    <section className="bg-slate-dark py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-label text-gold mb-3">Stay Informed</p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white mb-4">
            News &amp; Blog
          </h2>
          <p className="font-body text-white/50 max-w-xl mx-auto">
            Expert insights on Atlanta Metro&apos;s real estate market, buying and selling strategies, and neighborhood guides.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featured.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/blog" className="btn-outline-white">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  )
}
