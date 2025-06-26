'use client'

import { Suspense } from 'react'

import HomePage from '@views/Home/page'

export const dynamic = 'force-dynamic'

export default function Page() {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <HomePage />
    </Suspense>
  )
}
