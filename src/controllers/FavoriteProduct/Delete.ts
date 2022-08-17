import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class DeleteFavoriteProductController {
  static async handle(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const favorite_product = await prismaClient.favoriteProduct.update({
        where: {
          id: Number(id),
        },
        data: {
          deleted_at: new Date(),
        },
      });

      return res.json(favorite_product);
    } catch (err) {
      return res.json(err);
    }
  }
}
