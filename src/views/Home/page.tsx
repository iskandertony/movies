'use client'

import { motion } from 'framer-motion'

import { MovieList } from '@widgets/movie-list/ui/MovieList'

import { SearchInput } from '@features/search/ui/SearchInput'

import styles from './Home.module.scss'

const title = 'Популярные фильмы'

export default function HomePage() {
  return (
    <div className={styles.container}>
      <motion.h1
        className={styles.title}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.05,
            },
          },
        }}
      >
        {title.split('').map((letter, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </motion.h1>

      <SearchInput />
      <MovieList />
    </div>
  )
}
