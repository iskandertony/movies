export const TMDB_ENDPOINTS = {
  POPULAR: '/movie/popular',
  SEARCH: '/search/movie',
  DETAILS: (id: string) => `/movie/${id}`,
}
