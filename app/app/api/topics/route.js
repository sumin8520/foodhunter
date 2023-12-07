import connectMongoDB from '@/app/app/libs/mongodb'
import Topic from '@/app/app/models/topic'
import { NextResponse } from 'next/server'

export async function POST(request) {
  const { title, description } = await request.json()
  await connectMongoDB()
  await Topic.create({ title, description })
  return NextResponse.json({ message: 'Topic created!' }, { status: 201 })
}

export async function GET() {
  await connectMongoDB()
  const topics = await Topic.find()
  return NextResponse.json({ topics })
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get('id')
  await connectMongoDB()
  await Topic.findByIdAndDelete(id)
  return NextResponse.json({ message: 'Topic deleted!' }, { status: 200 })
}

export async function PUT(request, { params }) {
  const { id } = params
  const { newTitle: title, newDescription: description } = await request.json()
  await connectMongoDB()
  await Topic.findByIdAndUpdate(id, { title, description })
  return NextResponse.json({ message: 'Topic updated' }, { status: 200 })
}
