import {
  Request,
  Response,
} from 'express';
import { prismaClient } from '../../database/prismaClient';

type TCreateRestaurant = {
  name: string;
  description: string;
  address_id: number;
  restaurant_category_id: number;
  user_created_id: number;
  user_updated_id: number;
};

export class CreateRestaurantController {
  static async handle(req: Request, res: Response) {
    const {
      name,
      description,
      address_id,
      restaurant_category_id,
      user_created_id,
      user_updated_id,
    }: TCreateRestaurant = req.body;

    const restaurant = await prismaClient.restaurant.create({
      data: {
        name,
        description,
        address_id,
        restaurant_category_id,
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

    return res.json(restaurant);
  }
}
