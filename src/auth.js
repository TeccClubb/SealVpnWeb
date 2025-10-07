import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      type: "credentials",

      authorize: (credentials) => {
        return {
          id: credentials.id,
          email: credentials.email,
          name: credentials.name,
          isVerified: credentials.isVerified,
          access_token: credentials.access_token,
        };
      },
    }),
  ],

  callbacks: {
    signIn: ({ credentials }) => {
      if(credentials){
        return true;
      }
      return false;
    },
  },

  jwt: ({ token, user }) => {
    if (user) {
      token.id = user.id;
      token.email = user.email;
      token.name = user.name;
      token.isVerified = user.isVerified;
      token.access_token = user.access_token;
    }
    return token;
  },

  session: ({ session, token }) => {
    if (token) {
      session.user.id = token.id;
      session.user.email = token.email;
      session.user.name = token.name;
      session.user.isVerified = token.isVerified;
      session.user.access_token = token.access_token;
    }

    return session;
  },
});
