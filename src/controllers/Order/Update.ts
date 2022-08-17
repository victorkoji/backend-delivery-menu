import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

type TUpdateOrder = {
  id: number;
  description: string;
  price: number;
  status_order_id: number;
  user_created_id: number;
  user_updated_id: number;
};

export class UpdateOrderController {
  static async handle(req: Request, res: Response) {
    const {
      id,
      description,
      price,
      status_order_id,
      user_created_id,
      user_updated_id,
    } : TUpdateOrder = req.body;

    try {
      const order = await prismaClient.order.update({
        where: {
          id,
        },
        data: {
          description,
          price,
          status_order_id,
          user_created_id,
          user_updated_id,
        },
      });

      return res.json(order);
    } catch (err) {
      return res.json(err);
    }
  }
}
