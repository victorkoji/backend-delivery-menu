import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class GetRestaurantController {
  static async handle(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const restaurant = await prismaClient.restaurant.findUnique({
        where: { id: Number(id) },
      });

      return res.json(restaurant);
    } catch (err) {
      return res.json(err);
    }
  }
}
