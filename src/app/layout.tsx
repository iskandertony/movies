import { ReactNode } from 'react'

import 'antd/dist/reset.css'

import { QueryProvider } from '@shared/providers/QueryProvider'
import { PageTransitionOverlay } from '@shared/ui/PageTransitionOverlay/PageTransitionOverlay'

export const metadata = {
  title: 'Movies App',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <QueryProvider>
          {children}
          <PageTransitionOverlay />
        </QueryProvider>
      </body>
    </html>
  )
}
