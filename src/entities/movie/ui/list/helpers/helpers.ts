'use client'

import { useCallback } from 'react'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { useTransitionStore } from '@shared/model/transitionStore'

export const usePaginationHandler = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handlePageChange = useCallback(
    (page: number) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set('page', String(page))
      router.replace(`${pathname}?${params.toString()}`)
    },
    [router, searchParams],
  )

  return handlePageChange
}

export const useCardClickHandler = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleCardClick = useCallback(
    (id: number) => {
      useTransitionStore.getState().startTransition()
      const params = new URLSearchParams(searchParams.toString())
      router.push(`/movie/${id}?${params.toString()}`)
    },
    [router, searchParams],
  )

  return handleCardClick
}
