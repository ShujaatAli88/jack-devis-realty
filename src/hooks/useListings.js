import { useState, useMemo } from 'react'
import { listings as mockListings } from '../data/listings'

// MLS_READY: Replace mock data with SimplyRETS / Spark API / IDX Broker call
// Example: const { data } = await axios.get('https://api.simplyrets.com/properties', { params: filters, auth: {...} })

export function useListings(filters = {}) {
  const [loading] = useState(false)
  const [error] = useState(null)

  const filtered = useMemo(() => {
    let result = [...mockListings]

    if (filters.location) {
      const q = filters.location.toLowerCase()
      result = result.filter(
        (l) =>
          l.address.toLowerCase().includes(q) ||
          l.city.toLowerCase().includes(q) ||
          l.zip.includes(q)
      )
    }

    if (filters.minPrice) {
      result = result.filter((l) => l.price >= Number(filters.minPrice))
    }

    if (filters.maxPrice) {
      result = result.filter((l) => l.price <= Number(filters.maxPrice))
    }

    if (filters.beds && filters.beds !== 'any') {
      result = result.filter((l) => l.beds >= Number(filters.beds))
    }

    if (filters.baths && filters.baths !== 'any') {
      result = result.filter((l) => l.baths >= Number(filters.baths))
    }

    if (filters.propertyType && filters.propertyType !== 'any') {
      result = result.filter((l) =>
        l.propertyType.toLowerCase().includes(filters.propertyType.toLowerCase())
      )
    }

    return result
  }, [filters])

  return { listings: filtered, loading, error }
}
