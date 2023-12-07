import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'
import connectMongoDB from '@/app/review/libs/mongodb'
import User from '@/app/review/models/user'

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: '/signIn',
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account }) {
      const apiUrl = process.env.API_URL
      const { name, email } = user

      if (account.provider === 'google' || account.provider === 'github') {
        try {
          await connectMongoDB()
          const res1 = await fetch(`${apiUrl}/api/log`, {
            method: 'POST',
            headers: {
              'Contyent-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
          })

          const userExists = await User.findOne({ email })

          if (!userExists) {
            const res = await fetch(`${apiUrl}/api/user`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ name, email }),
            })
            if (res.ok) {
              return user
            }
          }
        } catch (error) {
          console.log(error)
        }
      }
      return user
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
