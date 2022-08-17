import {
  Request,
  Response,
} from 'express';
import { prismaClient } from '../../database/prismaClient';

type TCreateFavoriteRestaurant = {
  restaurant_id: number;
  user_created_id: number;
};

export class CreateFavoriteRestaurantController {
  static async handle(req: Request, res: Response) {
    const {
      restaurant_id,
      user_created_id,
    }: TCreateFavoriteRestaurant = req.body;

    const favorite_restaurant = await prismaClient.favoriteRestaurant.create({
      data: {
        restaurant_id,
        user_created_id,
      },
    });

    return res.json(favorite_restaurant);
  }
}
