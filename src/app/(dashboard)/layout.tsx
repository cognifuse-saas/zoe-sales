'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { TopNavbar } from '@/components/layout/top-navbar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()

  // Add authentication check here later
  useEffect(() => {
    // Check auth status
    // if (!authenticated) router.push('/')
  }, [])

  return (
    <div>
      <TopNavbar />
      <main className="pt-16">
        {children}
      </main>
    </div>
  )
}
