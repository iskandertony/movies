'use client'

import { motion } from 'framer-motion'

import styles from '../Home.module.scss'
import { containerVariants, letterVariants } from '../helpers/variants'

interface AnimatedTitleProps {
  title: string
}

export const AnimatedTitle = ({ title }: AnimatedTitleProps) => (
  <motion.h1 className={styles.title} initial="hidden" animate="visible" variants={containerVariants}>
    {title.split('').map((letter, index) => (
      <motion.span key={index} variants={letterVariants} transition={{ duration: 0.4 }}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.h1>
)
