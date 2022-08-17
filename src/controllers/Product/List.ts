import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class ListProductController {
  static async handle(req: Request, res: Response) {
    try {
      const product = await prismaClient.product.findMany();

      return res.json(product);
    } catch (err) {
      return res.json(err);
    }
  }
}
