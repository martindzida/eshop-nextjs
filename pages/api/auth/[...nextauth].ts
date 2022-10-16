import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import {PrismaAdapter} from '@next-auth/prisma-adapter';
import {prisma} from '../../../lib/prisma';

export const authOptions = {
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      //@ts-ignore
      clientId: process.env.GITHUB_ID,
      //@ts-ignore
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
};

export default NextAuth(authOptions);

