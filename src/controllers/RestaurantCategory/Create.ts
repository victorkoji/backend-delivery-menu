import {
  Request,
  Response,
} from 'express';
import { prismaClient } from '../../database/prismaClient';

type TCreateRestaurantCategory = {
  name: string;
  order: number;
  user_created_id: number;
  user_updated_id: number;
};

export class CreateRestaurantCategoryController {
  static async handle(req: Request, res: Response) {
    const {
      name,
      order,
      user_created_id,
      user_updated_id,
    }: TCreateRestaurantCategory = req.body;

    const restaurant_category = await prismaClient.restaurantCategory.create({
      data: {
        name,
        order,
        user_created_id,
        user_updated_id,
        user_created: {
          connect: {
            id: user_created_id,
          },
        },
        user_updated: {
          connect: {
            id: user_updated_id,
          },
        },
      },
    });

    return res.json(restaurant_category);
  }
}
