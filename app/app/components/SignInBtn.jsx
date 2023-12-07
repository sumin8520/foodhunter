'use client'

import { signIn } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

export default function SignInBtn() {
  return (
    <div className="max-w-xl mx-auto grid gap-4 mt-10">
      <button
        onClick={() => signIn('google')}
        className="flex items-center justify-center gap-4 rounded-lg pl-3 mb-4"
      >
        <Image src="/google-logo.png" height={30} width={30} alt="google" />
        <span className="bg-blue-500 text-white px-4 py-3">
          Sign In with Google
        </span>
      </button>

      <button
        onClick={() => signIn('github')}
        className="flex items-center justify-center gap-4 rounded-lg pl-3 mb-4"
      >
        <Image src="/github-logo.png" height={30} width={30} alt="github" />
        <span className="bg-blue-500 text-white px-4 py-3">
          Sign In with Github
        </span>
      </button>
    </div>
  )
}
