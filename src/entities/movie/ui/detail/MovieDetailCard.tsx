import { MovieDetail } from '@entities/movie/model/types'

import styles from './MovieDetailCard.module.scss'

interface Props {
  movie: MovieDetail
}

export const MovieDetailCard = ({ movie }: Props) => (
    <>
        <div
            className={styles.background}
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path || movie.poster_path})`,
            }}
        />

        <div className={styles.content}>
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                loading="lazy"
                className={styles.poster}
            />

            <div className={styles.info}>
                <h2 className={styles.title}>{movie.title}</h2>
                <p className={styles.date}>Дата выхода: {movie.release_date}</p>
                <p className={styles.overview}>{movie.overview}</p>
            </div>
        </div>
    </>
)
