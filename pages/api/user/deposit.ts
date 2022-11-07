import {NextApiRequest, NextApiResponse} from 'next';
import {prisma} from '../../../lib/prisma';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'PUT') {
    return res.status(405);
  }

  const {userId, amount} = req.body;

  const user = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      balance: amount,
    },
  });
  res.status(200).json({message: 'Success'});
};

