import {
  Request,
  Response,
} from 'express';
import { prismaClient } from '../../database/prismaClient';

type TCreateFavoriteProduct = {
  product_id: number;
  user_created_id: number;
};

export class CreateFavoriteProductController {
  static async handle(req: Request, res: Response) {
    const {
      product_id,
      user_created_id,
    }: TCreateFavoriteProduct = req.body;

    const favorite_product = await prismaClient.favoriteProduct.create({
      data: {
        product_id,
        user_created_id,
      },
    });

    return res.json(favorite_product);
  }
}
