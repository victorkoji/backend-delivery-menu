import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

type TUpdateProductCategory = {
  id: number;
  name: string;
  order: number;
  user_created_id: number;
  user_updated_id: number;
};

export class UpdateProductCategoryController {
  static async handle(req: Request, res: Response) {
    const {
      id,
      name,
      order,
      user_created_id,
      user_updated_id,
    }: TUpdateProductCategory = req.body;

    try {
      const product_category = await prismaClient.productCategory.update({
        where: {
          id,
        },
        data: {
          name,
          order,
          user_created_id,
          user_updated_id,
        },
      });

      return res.json(product_category);
    } catch (err) {
      return res.json(err);
    }
  }
}
