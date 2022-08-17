import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

type TUpdateProduct = {
  id: number;
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

export class UpdateProductController {
  static async handle(req: Request, res: Response) {
    const {
      id,
      name,
      description,
      price,
      order,
      highlight,
      restaurant_id,
      product_category_id,
      user_created_id,
      user_updated_id,
    }: TUpdateProduct = req.body;

    try {
      const product = await prismaClient.product.update({
        where: {
          id,
        },
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
        },
      });

      return res.json(product);
    } catch (err) {
      return res.json(err);
    }
  }
}
