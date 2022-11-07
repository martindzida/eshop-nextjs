import {NextApiRequest, NextApiResponse} from 'next';
import {prisma} from '../../../lib/prisma';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {current} = req.query;

  if (req.method !== 'GET') {
    return res.status(405);
  }

  if (typeof current !== 'string') {
    return res.status(400);
  }

  const currentUser = await prisma.user.findFirst({
    where: {
      name: current,
    },
  });
  res.status(200).json(currentUser);
};

