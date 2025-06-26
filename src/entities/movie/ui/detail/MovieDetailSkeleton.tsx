'use client'

import { Skeleton } from 'antd'

import styles from './MovieDetailSkeleton.module.scss'

export const MovieDetailSkeleton = () => (
  <div className={styles.content}>
    <Skeleton.Image active style={{ width: 300, height: 450, borderRadius: 8 }} />
    <div className={styles.info}>
      <Skeleton active paragraph={{ rows: 3 }} />
    </div>
  </div>
)
