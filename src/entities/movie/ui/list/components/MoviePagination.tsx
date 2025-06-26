'use client'
import { Pagination } from 'antd'

import styles from './MoviePagination.module.scss'

interface MoviePaginationProps {
  currentPage: number
  totalPages: number
  onChange: (page: number) => void
}

export const MoviePagination = ({ currentPage, totalPages, onChange }: MoviePaginationProps) => (
  <div className={styles.wrapper}>
    <Pagination
      current={currentPage}
      total={totalPages * 10}
      pageSize={10}
      onChange={onChange}
      showSizeChanger={false}
    />
  </div>
)
