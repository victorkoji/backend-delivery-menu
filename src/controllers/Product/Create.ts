import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

type TCreateProduct = {
  name: string;
  description: string;
  price: number;
  order: number;
  highlight: boolean;
  restaurant_id: number;
  product_category_id: number;
  user_created_id: number;
  user_updated_id: number;
};

export class CreateProductController {
  static async handle(req: Request, res: Response) {
    const {
      name,
      description,
      price,
      order,
      highlight,
      restaurant_id,
      product_category_id,
      user_created_id,
      user_updated_id,
    }: TCreateProduct = req.body;

    const product = await prismaClient.product.create({
      data: {
        name,
        description,
        price,
        order,
        highlight,
        restaurant_id,
        product_category_id,
        user_created_id,
        user_updated_id,
        user_created: {
          connect: {
            id: user_created_id,
          },
        },
        user_updated: {
          connect: {
            id: user_updated_id,
          },
        },
      },
    });

    return res.json(product);
  }
}
