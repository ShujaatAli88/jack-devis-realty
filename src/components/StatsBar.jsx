const stats = [
  { value: '20+', label: 'Years Experience' },
  { value: '6,000+', label: 'Real Estate Deals' },
  { value: '2', label: 'Team Agents' },
  { value: '10+', label: 'Communities Served' },
  { value: '100%', label: 'Client Commitment' },
]

export default function StatsBar() {
  return (
    <div className="bg-white border-t border-b border-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-heading text-4xl md:text-5xl font-semibold text-navy mb-1">
              {stat.value}
            </p>
            <p className="font-body text-sm text-gray-500 uppercase tracking-widest">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
