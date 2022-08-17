import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class DeleteOrderController {
  static async handle(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const order = await prismaClient.order.update({
        where: {
          id: Number(id),
        },
        data: {
          deleted_at: new Date(),
        },
      });

      return res.json(order);
    } catch (err) {
      return res.json(err);
    }
  }
}
