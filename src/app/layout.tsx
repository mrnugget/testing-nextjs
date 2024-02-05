import { type Metadata } from 'next'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import LayoutSidebar from '@/components/LayoutSidebar'

export const metadata: Metadata = {
  title: 'Testing',
  description: 'testing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx('h-full scroll-smooth bg-white antialiased')}
    >
      <body className="flex min-h-full flex-col">
        <LayoutSidebar children={children} />
      </body>
    </html>
  )
}
