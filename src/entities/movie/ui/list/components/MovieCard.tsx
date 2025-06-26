import { useState } from 'react'

import { Skeleton } from 'antd'
import { motion } from 'framer-motion'

import styles from './MovieCard.module.scss'
import {useTransitionStore} from "@shared/model/transitionStore";

interface MovieCardProps {
  id: number
  title: string
  releaseDate: string
  overview: string
  posterPath: string
  onClick?: () => void
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export const MovieCard = ({ title, posterPath, onClick }: MovieCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const startTransition = useTransitionStore(state => state.startTransition);

  const handleClick = () => {
    startTransition();
    onClick?.();
  };
  return (
    <motion.div
      className={styles.card}
      onClick={handleClick}
      variants={cardVariants}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {!imageLoaded && <Skeleton.Image active className={styles.skeleton} />}

      <img
        src={posterPath}
        alt={title}
        className={styles.image}
        style={{ display: imageLoaded ? 'block' : 'none' }}
        onLoad={() => setImageLoaded(true)}
      />

      <div className={styles.overlay}>
        <p className={styles.title}>{title}</p>
      </div>
    </motion.div>
  )
}
