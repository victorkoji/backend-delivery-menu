import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class GetStatusOrderController {
  static async handle(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const status_order = await prismaClient.statusOrder.findUnique({
        where: { id: Number(id) },
      });

      return res.json(status_order);
    } catch (err) {
      return res.json(err);
    }
  }
}
