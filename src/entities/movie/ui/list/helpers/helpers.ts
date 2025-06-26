'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import {useCallback} from "react";

export const usePaginationHandler = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handlePageChange = useCallback((page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', String(page))
    router.replace(`${pathname}?${params.toString()}`)
  }, [router, searchParams])

  return handlePageChange
}

export const useCardClickHandler = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleCardClick = useCallback((id: number) => {
    const params = new URLSearchParams(searchParams.toString());
    router.push(`/movie/${id}?${params.toString()}`);
  }, [router, searchParams]);

  return handleCardClick
}
