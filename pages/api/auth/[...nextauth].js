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
      authorizationUrl:
        'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
      scope:
        'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email',
    }),
  ],
  database: process.env.NEXT_PUBLIC_DATABASE_URL,
  session: {
    jwt: true,
  },
  debug: true,
  secret: process.env.SECRET,
  callbacks: {
    session: async (session, user, account) => {
      console.log('poon');
      session.jwt = user.jwt;
      session.id = user.id;
      session.accessToken = session.jwt;
      // session.check = account.provider;
      return Promise.resolve(session);
    },
    jwt: async (token, user, account, profile, isNewUser) => {
      // if (account.accessToken) {
      //   token.accessToken = account.accessToken
      // }
      // return token
      const isSignIn = user ? true : false;

      if (isSignIn) {
        const { accessToken, refreshToken } = account
        
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/${account.provider}/callback?access_token=${account.accessToken}`
        );

        const data = await response.json();
        
        token.jwt = data.jwt;
        token.accessToken = account.accessToken;

        if(data.user.id){
          token.id = data.user.id;
        } else {
          token.id = data.id;
        }
      }

      return Promise.resolve(token);
    },
    encryption: true,
  },
};

const Auth = (req, res) => NextAuth(req, res, options);

export default Auth;


