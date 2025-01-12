import axios from 'axios'

const baseURL =
  import.meta.env.VITE_API_URL_DEVELOPMENT ||
  import.meta.env.VITE_API_URL_PRODUCTION

const api = axios.create({
  baseURL: `${baseURL}/api`
  // timeout: 10000
})

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token')
    }
    return Promise.reject(error)
  }
)

export default api
