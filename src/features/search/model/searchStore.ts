'use client'

import { create } from 'zustand'

interface SearchState {
  query: string
  page: number
  setQuery: (value: string) => void
  setPage: (page: number) => void
  resetPage: () => void
}

export const useSearchStore = create<SearchState>((set) => ({
  query: '',
  page: 1,
  setQuery: (value) => set({ query: value }),
  setPage: (page) => set({ page }),
  resetPage: () => set({ page: 1 }),
}))
