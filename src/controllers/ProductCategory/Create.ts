import {
  Request,
  Response,
} from 'express';
import { prismaClient } from '../../database/prismaClient';

type TCreateProductCategory = {
  name: string;
  order: number;
  user_created_id: number;
  user_updated_id: number;
};

export class CreateProductCategoryController {
  static async handle(req: Request, res: Response) {
    const {
      name,
      order,
      user_created_id,
      user_updated_id,
    }: TCreateProductCategory = req.body;

    const product_category = await prismaClient.productCategory.create({
      data: {
        name,
        order,
        user_created_id,
        user_updated_id,
      },
    });

    return res.json(product_category);
  }
}
