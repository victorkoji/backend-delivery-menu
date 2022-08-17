import {
  Request,
  Response,
} from 'express';
import { prismaClient } from '../../database/prismaClient';

type TCreateStatusOrder = {
  name: string;
  user_created_id: number;
  user_updated_id: number;
};

export class CreateStatusOrderController {
  static async handle(req: Request, res: Response) {
    const {
      name,
      user_created_id,
      user_updated_id,
    }: TCreateStatusOrder = req.body;

    const status_order = await prismaClient.statusOrder.create({
      data: {
        name,
        user_created_id,
        user_updated_id,
      },
    });

    return res.json(status_order);
  }
}
