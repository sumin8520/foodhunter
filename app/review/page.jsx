'use client'

import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/review/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import TopicList from '@/app/review/components/TopicList'

export default async function Home() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/signIn')
  }

  return (
    <>
      <h1 className="text-2xl font-bold">WebDev Topics</h1>
      <p>MongoDB CRUD Examples</p>
      <TopicList />
    </>
  )
}
