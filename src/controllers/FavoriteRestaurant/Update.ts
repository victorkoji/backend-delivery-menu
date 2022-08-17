import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

type TUpdateFavoriteRestaurant = {
  id: number;
  restaurant_id: number;
  user_created_id: number;
};

export class UpdateFavoriteRestaurantController {
  static async handle(req: Request, res: Response) {
    const {
      id,
      restaurant_id,
      user_created_id,
    } : TUpdateFavoriteRestaurant = req.body;

    try {
      const favorite_restaurant = await prismaClient.favoriteRestaurant.update({
        where: {
          id,
        },
        data: {
          restaurant_id,
          user_created_id,
        },
      });

      return res.json(favorite_restaurant);
    } catch (err) {
      return res.json(err);
    }
  }
}
