import axios from 'axios'

const API_KEY = '5a29c5104b81c2e5f3031f3afdf9f619'
const BASE_URL = 'https://api.themoviedb.org/3'
// NEXT_PUBLIC_TMDB_API_KEY=5a29c5104b81c2e5f3031f3afdf9f619
// NEXT_PUBLIC_TMDB_BASE_URL=https://api.themoviedb.org/3

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'ru-RU',
  },
})
