import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class GetFavoriteRestaurantController {
  static async handle(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const favorite_restaurant = await prismaClient.favoriteRestaurant.findUnique({
        where: { id: Number(id) },
      });

      return res.json(favorite_restaurant);
    } catch (err) {
      return res.json(err);
    }
  }
}
