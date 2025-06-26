'use client';

import { SearchInput } from '@features/search/ui/SearchInput';
import { MovieList } from '@entities/movie/ui/list/MovieList';
import { AnimatedTitle } from './components/AnimatedTitle';

import styles from './Home.module.scss';

export default function HomePage() {
    return (
        <div className={styles.container}>
            <AnimatedTitle title="Популярные фильмы" />
            <SearchInput />
            <MovieList />
        </div>
    );
}
