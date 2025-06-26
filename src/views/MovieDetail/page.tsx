import { Suspense, lazy } from 'react'

import { Spin } from 'antd'

const MovieDetailContent = lazy(() => import('./ui/MovieDetailContent'))

export default function MovieDetailPage() {
  return (
    <Suspense fallback={<Spin size="large" />}>
      <MovieDetailContent />
    </Suspense>
  )
}
