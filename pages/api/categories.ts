import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from '../../lib/prisma'


export default async (req:NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'GET') {
        return res.status(405);
    }

    const categories = await prisma.category.findMany()
    res.status(200).json(categories)
}