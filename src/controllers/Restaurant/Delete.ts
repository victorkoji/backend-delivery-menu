import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class DeleteRestaurantController {
  static async handle(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const restaurant = await prismaClient.restaurant.update({
        where: {
          id: Number(id),
        },
        data: {
          deleted_at: new Date(),
        },
      });

      return res.json(restaurant);
    } catch (err) {
      return res.json(err);
    }
  }
}
