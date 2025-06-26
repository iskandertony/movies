'use client'

import { useQuery } from '@tanstack/react-query'
import { motion } from 'framer-motion'

import { getPopularMovies, searchMovies } from '@entities/movie/api/movieApi'
import { useMovieListParams } from '@entities/movie/ui/list/helpers/useMovieListParams'

import { ErrorBlock } from '@shared/ui/ErrorBlock/ErrorBlock'

import styles from './MovieList.module.scss'
import { MovieListContent } from './components/MovieListContent'
import { MoviePagination } from './components/MoviePagination'
import { useCardClickHandler, usePaginationHandler } from './helpers/helpers'
import { containerVariants } from './helpers/variants'

export const MovieList = () => {
  const { query, currentPage } = useMovieListParams()
  const handlePageChange = usePaginationHandler()
  const handleCardClick = useCardClickHandler()

  const { data, isError } = useQuery({
    queryKey: ['movies', { query, page: currentPage }],
    queryFn: () => (query ? searchMovies(query, currentPage) : getPopularMovies(currentPage)),
  })

  const movies = data?.results ?? []
  const totalPages = data?.total_pages ?? 0

  if (isError) {
    return <ErrorBlock message="Ошибка загрузки фильмов" />
  }

  return (
    <>
      <motion.div className={styles.list} initial="hidden" animate="visible" variants={containerVariants}>
        <MovieListContent movies={movies} handleCardClick={handleCardClick} />
      </motion.div>

      {totalPages > 1 && (
        <MoviePagination currentPage={currentPage} totalPages={totalPages} onChange={handlePageChange} />
      )}
    </>
  )
}
