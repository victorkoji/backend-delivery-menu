import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class GetRestaurantCategoryController {
  static async handle(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const restaurant_category = await prismaClient.restaurantCategory.findUnique({
        where: {
          id: Number(id),
        },
      });

      return res.json(restaurant_category);
    } catch (err) {
      return res.json(err);
    }
  }
}
