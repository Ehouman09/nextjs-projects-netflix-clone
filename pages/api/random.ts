import { NextApiRequest, NextApiResponse } from "next";
import prismadb from '@/libs/prismadb';
import ServerAuth from "@/libs/serverAuth";

export default async function handler(
    req: NextApiRequest, 
    res: NextApiResponse
    ) {
 
    if (req.method !== 'GET') {
        return res.status(405).end();
    }


    try {
        
        await ServerAuth(req);

        const mouvieCount = await prismadb.movie.count();
        
        const randomIndex = Math.floor(Math.random() * mouvieCount);


        const randomMovies = await prismadb.movie.findMany({
            take: 1,
            skip: randomIndex
        });

        return res.status(200).json(randomMovies[0]);
        
    } catch (error) {

        console.log(error);

        return res.status(400).end();

    }
}