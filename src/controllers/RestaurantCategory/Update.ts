import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

type TUpdateRestaurantCategory = {
  id: number;
  name: string;
  order: number;
  user_created_id: number;
  user_updated_id: number;
};

export class UpdateRestaurantCategoryController {
  static async handle(req: Request, res: Response) {
    const {
      id,
      name,
      order,
      user_created_id,
      user_updated_id,
    }: TUpdateRestaurantCategory = req.body;

    try {
      const restaurant_category = await prismaClient.restaurantCategory.update({
        where: {
          id,
        },
        data: {
          name,
          order,
          user_created_id,
          user_updated_id,
        },
      });

      return res.json(restaurant_category);
    } catch (err) {
      return res.json(err);
    }
  }
}
