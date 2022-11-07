import {NextApiRequest, NextApiResponse} from 'next';
import {prisma} from '../../../lib/prisma';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405);
  }

  const {userId, products} = req.body;

  const transaction = await prisma.transaction.create({
    data: {
      userId: userId,
      products: {
        create: [
          {
            createdAt: new Date(),
            crystal: {
              connect: products,
            },
          },
        ],
      },
    },
  });
  res.status(200).json({message: 'Success'});
};

