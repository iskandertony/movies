'use client'

import { Button } from 'antd'

import styles from './ErrorBlock.module.scss'

interface ErrorBlockProps {
  message?: string
  onRetry?: () => void
  onBack?: () => void
}

export const ErrorBlock = ({ message = 'Произошла ошибка', onRetry, onBack }: ErrorBlockProps) => (
  <div className={styles.wrapper}>
    {onBack && (
      <Button onClick={onBack} style={{ marginBottom: 10 }}>
        Назад
      </Button>
    )}

    <p className={styles.message}>{message}</p>

    {onRetry && (
      <Button type="primary" onClick={onRetry} style={{ marginTop: 10 }}>
        Повторить
      </Button>
    )}
  </div>
)
