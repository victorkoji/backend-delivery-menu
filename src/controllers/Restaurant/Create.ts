import {Request, Response} from 'express';
import { prismaClient } from '../../database/prismaClient';

type TRestaurant = {
  name: string;
  description: string;
  user_created: number;
  user_updated: number;
};

export class CreateUserController{
  async handle(req: Request, res: Response) {

    const {name, description, user_created, user_updated}: TRestaurant = req.body;

    // const user = await prismaClient.restaurant.create({
    //   data:{
    //     name,
    //     description,
    //   }
    // })

    // return res.json(user);
  }
}
