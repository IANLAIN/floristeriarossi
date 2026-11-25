import type { ReactNode } from 'react'
import Navbar from '../components/layout/Navbar'

interface MainLayoutProps {
  children: ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-dvh w-full flex-col overflow-x-clip bg-background font-sans text-neutral-800">
      <Navbar />
      <main className="flex-1 w-full">{children}</main>
    </div>
  )
}

export default MainLayout
