'use client'

import { Spin } from 'antd'
import { motion } from 'framer-motion'

import styles from './FullPageLoader.module.scss'

export const FullPageLoader = () => (
  <motion.div
    className={styles.loader}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <Spin size="large" />
    <p>Загружаем контент...</p>
  </motion.div>
)
