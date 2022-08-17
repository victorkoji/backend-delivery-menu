import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class DeleteProductController {
  static async handle(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const product = await prismaClient.product.update({
        where: {
          id: Number(id),
        },
        data: {
          deleted_at: new Date(),
        },
      });

      return res.json(product);
    } catch (err) {
      return res.json(err);
    }
  }
}
