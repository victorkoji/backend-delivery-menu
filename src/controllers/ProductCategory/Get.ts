import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class GetProductCategoryController {
  static async handle(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const product_category = await prismaClient.productCategory.findUnique({
        where: {
          id: Number(id),
        },
      });

      return res.json(product_category);
    } catch (err) {
      return res.json(err);
    }
  }
}
