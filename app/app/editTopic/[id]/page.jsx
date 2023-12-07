import { authOptions } from '@/app/app/api/auth/[...nextauth]/route'
import EditTopicForm from '@/app/app/components/EditTopicForm'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

const getTopicById = async (id) => {
  const apiUrl = process.env.API_URL
  try {
    const res = await fetch(`${apiUrl}/api/topics/${id}`, {
      cache: 'no-store',
      method: 'GET',
    })
    if (!res.ok) {
      throw new Error('Failed to fetch topic.')
    }
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export default async function EditTopicPage({ params }) {
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect('/signIn')
  }

  const { id } = params
  const { topic } = await getTopicById(id)
  const { title, description } = topic

  return <EditTopicForm id={id} title={title} description={description} />
}
