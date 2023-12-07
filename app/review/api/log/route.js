import connectMongoDB from '@/app/review/libs/mongodb'
import Log from '@/app/review/models/log'
import { NextResponse } from 'next/server'

export async function POST(request) {
  const { email } = await request.json()
  await connectMongoDB()
  await Log.create({ email })
  return NextResponse.json({ message: 'Login event logged' }, { status: 201 })
}
