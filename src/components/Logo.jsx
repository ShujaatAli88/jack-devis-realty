export default function Logo({ height = 44 }) {
  return (
    <img
      src="/logo_navbar.png"
      alt="Jack Davis Real Estate"
      height={height}
      style={{ height: `${height}px`, width: 'auto', objectFit: 'contain' }}
    />
  )
}
