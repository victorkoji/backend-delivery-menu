import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class ListOrderController {
  static async handle(req: Request, res: Response) {
    try {
      const order = await prismaClient.order.findMany();

      return res.json(order);
    } catch (err) {
      return res.json(err);
    }
  }
}
