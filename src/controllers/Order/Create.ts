import {
  Request,
  Response,
} from 'express';
import { prismaClient } from '../../database/prismaClient';

type TCreateOrder = {
  description: string;
  price: number;
  status_order_id: number;
  user_created_id: number;
  user_updated_id: number;
};

export class CreateOrderController {
  static async handle(req: Request, res: Response) {
    const {
      description,
      price,
      status_order_id,
      user_created_id,
      user_updated_id,
    }: TCreateOrder = req.body;

    const order = await prismaClient.order.create({
      data: {
        description,
        price,
        status_order_id,
        user_created_id,
        user_updated_id,
        user_created: {
          connect: {
            id: user_created_id,
          },
        },
      },
    });

    return res.json(order);
  }
}
