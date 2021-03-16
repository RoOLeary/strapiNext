import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: 'Iv1.c827cc7979700200',
      clientSecret: '739d2a3a6e10a366414fa0680759b1598c902ade'
    }),
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        password: { label: 'Password', type: 'password' }
      },
      async authorize (credentials) {
        if (credentials.password === 'password') {
          return {
            id: 1,
            name: 'Fill Murray',
            email: 'bill@fillmurray.com',
            image: 'https://www.fillmurray.com/64/64'
          }
        }
        return null
      }
    })
  ],

  // A database is optional, but required to persist accounts in a database
  //database: process.env.DATABASE_URL,
})

