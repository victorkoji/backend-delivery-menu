import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class ListFavoriteRestaurantController {
  static async handle(req: Request, res: Response) {
    try {
      const favorite_restaurant = await prismaClient.favoriteRestaurant.findMany();

      return res.json(favorite_restaurant);
    } catch (err) {
      return res.json(err);
    }
  }
}
