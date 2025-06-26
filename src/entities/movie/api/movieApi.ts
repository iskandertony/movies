import { TMDB_ENDPOINTS } from '@entities/movie/api/endpoints'

import { axiosInstance } from '@shared/api/axiosInstance'
import {MovieDetail} from "@entities/movie/model/types";

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

export const getMovieById = async (id: string): Promise<MovieDetail> => {
  const response = await axiosInstance.get(`/movie/${id}`);
  return response.data;
};
