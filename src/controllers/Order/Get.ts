import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class GetOrderController {
  static async handle(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const order = await prismaClient.order.findUnique({
        where: { id: Number(id) },
      });

      return res.json(order);
    } catch (err) {
      return res.json(err);
    }
  }
}
