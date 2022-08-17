import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class GetProductController {
  static async handle(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const product = await prismaClient.product.findUnique({
        where: {
          id: Number(id),
        },
      });

      return res.json(product);
    } catch (err) {
      return res.json(err);
    }
  }
}
