'use client'

import {useCallback, useEffect} from 'react'

import { useQuery } from '@tanstack/react-query'
import { Button } from 'antd'
import { motion } from 'framer-motion'
import { useParams, useRouter } from 'next/navigation'

import { getMovieById } from '@entities/movie/api/movieApi'
import { MovieDetailCard } from '@entities/movie/ui/detail/MovieDetailCard'
import { MovieDetailSkeleton } from '@entities/movie/ui/detail/MovieDetailSkeleton'

import { usePageParams } from '@shared/hooks/usePageParams'
import { ErrorBlock } from '@shared/ui/ErrorBlock/ErrorBlock'

import styles from './MovieDetailContent.module.scss'
import {useTransitionStore} from "@shared/model/transitionStore";

export default function MovieDetailContent() {
  const router = useRouter()
  const { id } = useParams<{ id: string }>()
  const { endTransition } = useTransitionStore.getState();
  const page = usePageParams()
  const {
    data: movie,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['movie', id],
    queryFn: () => getMovieById(id),
    enabled: !!id,
  });

  useEffect(() => {
    if (!isLoading) {
      endTransition();
    }
  }, [isLoading, endTransition]);


  const handleBack = useCallback(() => {
    router.push(`/?page=${page}`)
  }, [router, page])

  if (isError) {
    return <ErrorBlock message="Ошибка загрузки фильма" onBack={() => router.push(`/?page=${page}`)} />
  }

  return (
    <motion.div
      className={styles.wrapper}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Button onClick={handleBack}>Назад</Button>

      {isLoading || !movie ? <MovieDetailSkeleton /> : <MovieDetailCard movie={movie} />}
    </motion.div>
  )
}
