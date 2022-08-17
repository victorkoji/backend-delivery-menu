import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class ListRestaurantCategoryController {
  static async handle(req: Request, res: Response) {
    try {
      const restaurant_category = await prismaClient.restaurantCategory.findMany();

      return res.json(restaurant_category);
    } catch (err) {
      return res.json(err);
    }
  }
}
