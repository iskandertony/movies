'use client'

import { useSearchStore } from '@features/search/model/searchStore'

export const useMovieListParams = () => {
  const query = useSearchStore((state) => state.query)
  return { query }
}
