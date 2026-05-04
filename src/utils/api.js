import axios from 'axios'

// MLS_READY: Configure your IDX provider credentials here
// Supported providers: SimplyRETS, Spark API, IDX Broker, Homejunction
const MLS_CONFIG = {
  provider: 'simplyrets', // 'simplyrets' | 'spark' | 'idxbroker'
  baseURL: 'https://api.simplyrets.com',
  apiKey: import.meta.env.VITE_MLS_API_KEY || '',
  apiSecret: import.meta.env.VITE_MLS_API_SECRET || '',
}

export const mlsClient = axios.create({
  baseURL: MLS_CONFIG.baseURL,
  auth: {
    username: MLS_CONFIG.apiKey,
    password: MLS_CONFIG.apiSecret,
  },
})

// MLS_READY: Wire filters to IDX API query params
export async function fetchListings(params = {}) {
  const response = await mlsClient.get('/properties', { params })
  return response.data
}

export async function fetchListingById(mlsId) {
  const response = await mlsClient.get(`/properties/${mlsId}`)
  return response.data
}
