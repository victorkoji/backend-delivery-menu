import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class DeleteFavoriteRestaurantController {
  static async handle(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const favorite_restaurant = await prismaClient.favoriteRestaurant.update({
        where: {
          id: Number(id),
        },
        data: {
          deleted_at: new Date(),
        },
      });

      return res.json(favorite_restaurant);
    } catch (err) {
      return res.json(err);
    }
  }
}
