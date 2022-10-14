import {NextApiRequest, NextApiResponse} from 'next';
import {prisma} from '../../../../lib/prisma';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    return res.status(405);
  }

  const {id} = req.query;

  if (typeof id !== 'string') {
    return res.status(404);
  }

  const crystal = await prisma.order.findMany({
    where: {
      userId: id,
    },
  });
  res.status(200).json(crystal);
};

