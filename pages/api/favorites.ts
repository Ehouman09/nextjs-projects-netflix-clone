import { NextApiRequest, NextApiResponse } from "next";
import prismadb from '@/libs/prismadb';
import ServerAuth from "@/libs/serverAuth";
import { without } from 'lodash';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    
    if (req.method !== 'GET') {
        return res.status(405).end()
    }

    try {

        const { currentUser } = await ServerAuth(req);

        const favoriteMovies = await prismadb.movie.findMany({
            where: {
                id: {
                    in: currentUser?.favoriteIds
                }
            }
        });

        return res.status(200).json(favoriteMovies);

    } catch (error) {

        console.log();
        return res.status(400).end()
    }
}