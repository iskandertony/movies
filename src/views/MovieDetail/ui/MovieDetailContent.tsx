'use client';

import { useParams, useRouter } from 'next/navigation';
import { getMovieById } from '@entities/movie/api/movieApi';
import { useQuery } from '@tanstack/react-query';
import { Button, Card, Spin } from 'antd';
import styles from './MovieDetailContent.module.scss';
import {FullPageLoader} from "@shared/ui/FullPageLoader/FullPageLoader";

export default function MovieDetailContent() {
    const router = useRouter();
    const params = useParams<{ id: string }>();

    const { data: movie, isLoading, isError } = useQuery({
        queryKey: ['movie', params.id],
        queryFn: () => getMovieById(params.id),
        enabled: !!params.id,
    });

    if (isLoading) return <FullPageLoader />;
    if (isError || !movie) return <p>Ошибка загрузки фильма</p>;

    return (
        <div className={styles.wrapper}>
            <Button onClick={() => router.back()}>Назад</Button>
            <Card
                title={movie.title}
                cover={<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />}
            >
                <p>{movie.release_date}</p>
                <p>{movie.overview}</p>
            </Card>
        </div>
    );
}
