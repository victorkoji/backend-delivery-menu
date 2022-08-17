import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class ListFavoriteProductController {
  static async handle(req: Request, res: Response) {
    try {
      const favorite_product = await prismaClient.favoriteProduct.findMany();

      return res.json(favorite_product);
    } catch (err) {
      return res.json(err);
    }
  }
}
