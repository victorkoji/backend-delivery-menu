import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

type TUpdateStatusOrder = {
  id: number;
  name: string;
  user_created_id: number;
  user_updated_id: number;
};

export class UpdateStatusOrderController {
  static async handle(req: Request, res: Response) {
    const {
      id,
      name,
      user_created_id,
      user_updated_id,
    } : TUpdateStatusOrder = req.body;

    try {
      const status_order = await prismaClient.statusOrder.update({
        where: {
          id,
        },
        data: {
          name,
          user_created_id,
          user_updated_id,
        },
      });

      return res.json(status_order);
    } catch (err) {
      return res.json(err);
    }
  }
}
