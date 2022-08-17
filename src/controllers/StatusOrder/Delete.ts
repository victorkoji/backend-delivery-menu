import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class DeleteStatusOrderController {
  static async handle(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const status_order = await prismaClient.statusOrder.update({
        where: {
          id: Number(id),
        },
        data: {
          deleted_at: new Date(),
        },
      });

      return res.json(status_order);
    } catch (err) {
      return res.json(err);
    }
  }
}
