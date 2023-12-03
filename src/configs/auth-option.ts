import { zodResolver } from '@hookform/resolvers/zod';
import { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const NEXT_AUTH_OPTIONS: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        identifier: {
          label: 'Email',
          type: 'text',
          placeholder: 'email@email.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_REST_API}/auth/local`,
          {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { 'Content-Type': 'application/json' },
          }
        );

        const { user, jwt } = await res.json();

        if (res.ok && user) {
          return { ...user, accessToken: jwt };
        }
        return null;
      },
    }),
  ],
  // pages: {
  //   signIn: "/"
  // },
  callbacks: {
    async jwt({ token, user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
};
