import NextAuth from 'next-auth';
import {PrismaAdapter} from '@next-auth/prisma-adapter';
import {prisma} from '../../../lib/prisma';
import Credentials from 'next-auth/providers/credentials';

export const authOptions = {
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  sesssion: {
    strategy: 'jwt',
  },
  providers: [],
};

export default NextAuth(authOptions);

