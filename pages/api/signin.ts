import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from '../../lib/prisma'


export default async (req:NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
        return res.status(405);
    }
    
    const { username, email } = req.body
    const todo = await prisma.user.create({
        data:{
            username: username,
            email: email,
        }
    })
    res.status(200).json({message: 'Success'})
}