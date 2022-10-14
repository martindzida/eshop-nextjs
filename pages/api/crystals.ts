import {NextApiRequest, NextApiResponse} from 'next';
import {prisma} from '../../lib/prisma';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    return res.status(405);
  }

  const crystals = await prisma.crystal.findMany({
    include: {categories: true},
  });
  res.status(200).json(crystals);
};

