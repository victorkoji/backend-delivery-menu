import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class DeleteProductCategoryController {
  static async handle(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const product_category = await prismaClient.productCategory.update({
        where: {
          id: Number(id),
        },
        data: {
          deleted_at: new Date(),
        },
      });

      return res.json(product_category);
    } catch (err) {
      return res.json(err);
    }
  }
}
