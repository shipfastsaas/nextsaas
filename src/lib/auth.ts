import type { DefaultSession, NextAuthConfig } from "next-auth"
import GoogleProvider from 'next-auth/providers/google'

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string
      email: string
      name: string
      image?: string
    }
  }
}

export const authOptions: NextAuthConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    session: ({ session, token }) => ({
      ...session,
      user: {
        ...session.user,
        id: token.sub,
      },
    }),
    jwt: ({ token }) => token,
  },
  pages: {
    signIn: '/auth/signin',
  },
}
