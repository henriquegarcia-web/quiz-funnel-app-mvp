import axios from 'axios'

const baseURL =
  import.meta.env.VITE_API_URL_DEVELOPMENT ||
  import.meta.env.VITE_API_URL_PRODUCTION

export default axios.create({
  baseURL: `${baseURL}/api`
})
