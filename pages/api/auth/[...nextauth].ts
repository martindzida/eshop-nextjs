import NextAuth from 'next-auth';
import {PrismaAdapter} from '@next-auth/prisma-adapter';
import {prisma} from '../../../lib/prisma';

export const authOptions = {
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [],
};

export default NextAuth(authOptions);

