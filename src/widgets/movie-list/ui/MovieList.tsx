'use client';

import { Suspense, lazy } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import styles from './MovieList.module.scss';
import { useQuery } from '@tanstack/react-query';
import { getPopularMovies, searchMovies } from '@entities/movie/api/movieApi';
import { motion } from 'framer-motion';
import { useSearchStore } from '@features/search/model/searchStore';
import { MovieCardSkeleton } from '@entities/movie/ui/MovieCardSkeleton';
import { Pagination } from 'antd';

const MovieCard = lazy(() => import('@entities/movie/ui/MovieCard').then(mod => ({ default: mod.MovieCard })));

export const MovieList = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const query = useSearchStore((state) => state.query);
    const setQuery = useSearchStore((state) => state.setQuery);

    const currentPage = Number(searchParams.get('page')) || 1;

    const handlePageChange = (page: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('page', String(page));
        router.replace(`${pathname}?${params.toString()}`);
    };

    const { data, isLoading, isError } = useQuery({
        queryKey: ['movies', query, currentPage],
        queryFn: () =>
            query ? searchMovies(query, currentPage) : getPopularMovies(currentPage),
    });

    const movies = data?.results || [];
    const totalPages = data?.total_pages || 0;

    return (
        <>
            <motion.div
                className={styles.list}
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.1 } },
                }}
            >
                {movies.length === 0 ? (
                    <p>Фильмы не найдены</p>
                ) : (
                    movies.map((movie) => (
                        <Suspense key={movie.id} fallback={<MovieCardSkeleton />}>
                            <MovieCard
                                id={movie.id}
                                title={movie.title}
                                releaseDate={movie.release_date}
                                overview={movie.overview}
                                posterPath={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                onClick={() => {
                                    const params = new URLSearchParams(searchParams.toString());
                                    router.push(`/movie/${movie.id}?${params.toString()}`);
                                }}
                            />
                        </Suspense>
                    ))
                )}
            </motion.div>

            {totalPages > 1 && (
                <div className={styles.pagination}>
                    <Pagination
                        current={currentPage}
                        total={totalPages * 10}
                        pageSize={10}
                        onChange={handlePageChange}
                        showSizeChanger={false}
                    />
                </div>
            )}
        </>
    );
};
