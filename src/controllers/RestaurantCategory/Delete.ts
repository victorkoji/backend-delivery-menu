import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class DeleteRestaurantCategoryController {
  static async handle(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const restaurant_category = await prismaClient.restaurantCategory.update({
        where: {
          id: Number(id),
        },
        data: {
          deleted_at: new Date(),
        },
      });

      return res.json(restaurant_category);
    } catch (err) {
      return res.json(err);
    }
  }
}
