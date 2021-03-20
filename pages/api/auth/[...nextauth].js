import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  providers: [
     Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Providers.Credentials({
    //   name: 'Credentials',
    //   credentials: {
    //     password: { label: 'Password', type: 'password' }
    //   },
    //   async authorize (credentials) {
    //     if (credentials.password === 'password') {
    //       return {
    //         id: 1,
    //         name: 'Fill Murray',
    //         email: 'bill@fillmurray.com',
    //         image: 'https://www.fillmurray.com/64/64'
    //       }
    //     }
    //   }
    // })
  ],
  database: process.env.NEXT_PUBLIC_DATABASE_URL,
  session: {
    jwt: true,
  },
  debug: true,
  callbacks: {
    session: async (session, user) => {
      session.jwt = user.jwt;
      session.id = user.id;

      return Promise.resolve(session);
    },
    jwt: async (token, user, account) => {
      const isSignIn = user ? true : false;

      if (isSignIn) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/${account.provider}/callback?access_token=${account.accessToken}`
        );

        const data = await response.json();
        
        token.jwt = data.jwt;
        
        console.log(token.id);
        if(data.user.id){
          token.id = data.user.id;
        } else {
          token.id = data.id;
        }
      }

      return Promise.resolve(token);
    },
  },
};

const Auth = (req, res) => NextAuth(req, res, options);

export default Auth;


