import { useMemo } from 'react'

export function debounce<T extends (...args: any[]) => void>(func: T, delay: number) {
  let timer: NodeJS.Timeout

  return (...args: Parameters<T>) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func(...args)
    }, delay)
  }
}

export function useDebouncedCallback<T extends (...args: any[]) => void>(callback: T, delay: number) {
  return useMemo(() => debounce(callback, delay), [callback, delay])
}
