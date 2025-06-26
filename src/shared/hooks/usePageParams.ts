import { useSearchParams } from 'next/navigation'

export const usePageParams = () => {
  const params = useSearchParams()
  return params.get('page') || '1'
}
