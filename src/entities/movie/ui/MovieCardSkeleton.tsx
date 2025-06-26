import { Skeleton } from 'antd'
import { motion } from 'framer-motion'

import styles from './MovieCard.module.scss'

export const MovieCardSkeleton = () => (
  <motion.div
    className={`${styles.card} ${styles.skeleton}`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <Skeleton.Image
      active
      style={{
        width: '100%',
        height: '100%',
        borderRadius: '8px',
        backgroundColor: '#f0f0f0',
      }}
    />
  </motion.div>
)
