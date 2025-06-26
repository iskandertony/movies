import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export const usePaginationHandler = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', String(page))
    router.replace(`${pathname}?${params.toString()}`)
  }

  return handlePageChange
}

export const useCardClickHandler = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleCardClick = (id: number) => {
    const params = new URLSearchParams(searchParams.toString())
    router.push(`/movie/${id}?${params.toString()}`)
  }

  return handleCardClick
}
