import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class ListStatusOrderController {
  static async handle(req: Request, res: Response) {
    try {
      const status_order = await prismaClient.statusOrder.findMany();

      return res.json(status_order);
    } catch (err) {
      return res.json(err);
    }
  }
}
