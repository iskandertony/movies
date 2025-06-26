'use client'

import { Suspense } from 'react'

import { MovieCardSkeleton } from '@entities/movie/ui/list/components/MovieCardSkeleton'

import styles from '../MovieList.module.scss'

interface MovieListContentProps {
  movies: Array<any>
  handleCardClick: (id: number) => void
}

const MovieCard = (await import('@entities/movie/ui/list/components/MovieCard')).MovieCard

export const MovieListContent = ({ movies, handleCardClick }: MovieListContentProps) => {
  if (movies.length === 0) {
    return <p className={styles.empty}>Фильмы не найдены</p>
  }

  return movies.map((movie) => (
    <Suspense key={movie.id} fallback={<MovieCardSkeleton />}>
      <MovieCard
        id={movie.id}
        title={movie.title}
        releaseDate={movie.release_date}
        overview={movie.overview}
        posterPath={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        onClick={() => handleCardClick(movie.id)}
      />
    </Suspense>
  ))
}
