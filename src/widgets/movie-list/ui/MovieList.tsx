'use client';

import {lazy } from 'react';
import { useRouter } from 'next/navigation';
import styles from './MovieList.module.scss';
import { useQuery } from '@tanstack/react-query';
import { getPopularMovies } from '@entities/movie/api/movieApi';
import { motion } from 'framer-motion';
import { useSearchStore } from '@features/search/model/searchStore';
import { FullPageLoader } from '@shared/ui/FullPageLoader/FullPageLoader';

const MovieCard = lazy(() => import('@entities/movie/ui/MovieCard').then(mod => ({ default: mod.MovieCard })));

export const MovieList = () => {
    const router = useRouter();
    const query = useSearchStore((state) => state.query);

    const { data: movies = [], isLoading, isError } = useQuery({
        queryKey: ['popular-movies', query],
        queryFn: getPopularMovies,
    });

    if (isLoading) return <FullPageLoader />;
    if (isError) return <p>Ошибка загрузки</p>;

    return (
        <motion.div
            className={styles.list}
            initial="hidden"
            animate="visible"
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: 0.1,
                    },
                },
            }}
        >
            {movies.map((movie) => (
                    <MovieCard
                        id={movie.id}
                        title={movie.title}
                        releaseDate={movie.release_date}
                        overview={movie.overview}
                        posterPath={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        onClick={() => router.push(`/movie/${movie.id}`)}
                    />
            ))}
        </motion.div>
    );
};
