import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class GetFavoriteProductController {
  static async handle(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const favorite_product = await prismaClient.favoriteProduct.findUnique({
        where: { id: Number(id) },
      });

      return res.json(favorite_product);
    } catch (err) {
      return res.json(err);
    }
  }
}
