import { Suspense, lazy } from 'react'

import { Spin } from 'antd'

const MovieDetailContent = lazy(() => import('@entities/movie/ui/detail/MovieDetailContent'))

export default function MovieDetailPage() {
  return (
    <Suspense fallback={<Spin size="large" />}>
      <MovieDetailContent />
    </Suspense>
  )
}
