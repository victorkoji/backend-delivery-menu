import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class ListRestaurantController {
  static async handle(req: Request, res: Response) {
    try {
      const restaurant = await prismaClient.restaurant.findMany();

      return res.json(restaurant);
    } catch (err) {
      return res.json(err);
    }
  }
}
