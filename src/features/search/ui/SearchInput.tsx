'use client'

import { useEffect, useState } from 'react'

import { Input } from 'antd'

import { useDebouncedCallback } from '@shared/lib/debounce'

import { useSearchStore } from '../model/searchStore'

export const SearchInput = () => {
  const [localValue, setLocalValue] = useState('')

  const setQuery = useSearchStore((state) => state.setQuery)
  const resetPage = useSearchStore((state) => state.resetPage)

  const debouncedSetQuery = useDebouncedCallback((val: string) => {
    setQuery(val)
    resetPage()
  }, 500)

  useEffect(() => {
    debouncedSetQuery(localValue)
  }, [localValue, debouncedSetQuery])

  return (
    <Input
      placeholder="Поиск по названию"
      value={localValue}
      onChange={(e) => setLocalValue(e.target.value)}
      style={{ maxWidth: 400, marginBottom: 20 }}
    />
  )
}
