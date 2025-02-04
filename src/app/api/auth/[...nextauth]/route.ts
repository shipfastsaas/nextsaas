import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { MongoDBAdapter } from '@auth/mongodb-adapter'
import clientPromise from '@/lib/mongodb'
import dbConnect from '@/lib/db'
import User from '@/models/User'

const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null
        
        await dbConnect()
        const user = await User.findOne({ email: credentials.email }).select('+password')
        
        return user && await user.comparePassword(credentials.password)
          ? { id: user._id.toString(), email: user.email, name: user.name }
          : null
      }
    })
  ],
  callbacks: {
    async session({ session, token }) {
      if (session.user && token.sub) session.user.id = token.sub
      return session
    }
  },
  pages: {
    signIn: '/signin',
    error: '/signin'
  },
  session: {
    strategy: 'jwt'
  }
})

export { GET, POST }
