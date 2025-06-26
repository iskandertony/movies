import { TMDB_ENDPOINTS } from '@entities/movie/api/endpoints'

import { axiosInstance } from '@shared/api/axiosInstance'

export const getPopularMovies = async (page = 1) => {
  const response = await axiosInstance.get(TMDB_ENDPOINTS.POPULAR, {
    params: { page },
  })
  return response.data
}

export const searchMovies = async (query: string, page = 1) => {
  if (!query.trim()) return { results: [], total_pages: 0 }
  const response = await axiosInstance.get(TMDB_ENDPOINTS.SEARCH, {
    params: { query, page },
  })
  return response.data
}

export const getMovieById = async (id: string) => {
  const response = await axiosInstance.get(TMDB_ENDPOINTS.DETAILS(id), {
    params: { append_to_response: 'credits' },
  })
  return response.data
}
