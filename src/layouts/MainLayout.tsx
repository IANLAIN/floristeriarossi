import type { ReactNode } from 'react'
import Navbar from '../components/layout/Navbar'

interface MainLayoutProps {
  children: ReactNode
  footer?: ReactNode
}

function MainLayout({ children, footer }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-neutral-800">
      <Navbar />
      <main className="flex-1">{children}</main>
      {footer}
    </div>
  )
}

export default MainLayout
