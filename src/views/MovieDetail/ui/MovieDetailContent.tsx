'use client'

import { useQuery } from '@tanstack/react-query'
import { Button } from 'antd'
import { motion } from 'framer-motion'
import {useParams, useRouter, useSearchParams} from 'next/navigation'

import { getMovieById } from '@entities/movie/api/movieApi'

import { FullPageLoader } from '@shared/ui/FullPageLoader/FullPageLoader'

import styles from './MovieDetailContent.module.scss'

export default function MovieDetailContent() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const searchParams = useSearchParams();
  const pageFromParams = searchParams.get('page') || '1';
  const { data: movie, isLoading, isError } = useQuery({
    queryKey: ['movie', params.id],
    queryFn: () => getMovieById(params.id),
    enabled: !!params.id,
  });



  if (isLoading) return <FullPageLoader />;
  if (isError || !movie) return <p>Ошибка загрузки фильма</p>;

  return (
    <motion.div
      className={styles.wrapper}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Button onClick={() => {
        router.push(`/?page=${pageFromParams}`);
      }}>
        Назад
      </Button>

      <div className={styles.content}>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className={styles.poster} />

        <div className={styles.info}>
          <h2 className={styles.title}>{movie.title}</h2>
          <p className={styles.date}>Дата выхода: {movie.release_date}</p>
          <p className={styles.overview}>{movie.overview}</p>
        </div>
      </div>
    </motion.div>
  )
}
