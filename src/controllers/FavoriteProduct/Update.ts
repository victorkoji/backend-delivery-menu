import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

type TUpdateFavoriteProduct = {
  id: number;
  product_id: number;
  user_created_id: number;
};

export class UpdateFavoriteProductController {
  static async handle(req: Request, res: Response) {
    const {
      id,
      product_id,
      user_created_id,
    } : TUpdateFavoriteProduct = req.body;

    try {
      const favorite_product = await prismaClient.favoriteProduct.update({
        where: {
          id,
        },
        data: {
          product_id,
          user_created_id,
        },
      });

      return res.json(favorite_product);
    } catch (err) {
      return res.json(err);
    }
  }
}
