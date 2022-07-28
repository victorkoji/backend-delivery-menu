import {Request, Response} from 'express';
import { prismaClient } from '../../database/prismaClient';

type Product = {
  name: string;
  price: number;
  restaurant_id: number;
  user_created_id: number;
  user_updated_id: number;
};

export class CreateProductController{
  async handle(req: Request, res: Response) {

    const {name, price, restaurant_id, user_created_id, user_updated_id}: Product = req.body;

    // const product = await prismaClient.product.create({
    //   data:{
    //     name,
    //     price,
    //     restaurant_id,
    //     user_created_id,
    //     user_updated_id
    //   }
    // })

    return res.json();
  }
}