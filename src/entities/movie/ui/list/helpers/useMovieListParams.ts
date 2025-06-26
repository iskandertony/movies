import { useSearchParams } from 'next/navigation'

import { useSearchStore } from '@features/search/model/searchStore'

export const useMovieListParams = () => {
  const searchParams = useSearchParams()
  const query = useSearchStore((state) => state.query)
  const currentPage = Number(searchParams.get('page')) || 1

  return { query, currentPage, searchParams }
}
