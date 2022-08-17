import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

type TUpdateRestaurant = {
  id: number;
  name: string;
  description: string;
  address_id: number;
  restaurant_category_id: number;
  user_created_id: number;
  user_updated_id: number;
};

export class UpdateRestaurantController {
  static async handle(req: Request, res: Response) {
    const {
      id,
      name,
      description,
      address_id,
      restaurant_category_id,
      user_created_id,
      user_updated_id,
    } : TUpdateRestaurant = req.body;

    try {
      const restaurant = await prismaClient.restaurant.update({
        where: {
          id,
        },
        data: {
          name,
          description,
          address_id,
          restaurant_category_id,
          user_created_id,
          user_updated_id,
        },
      });

      return res.json(restaurant);
    } catch (err) {
      return res.json(err);
    }
  }
}
