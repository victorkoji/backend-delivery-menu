import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class ListProductCategoryController {
  static async handle(req: Request, res: Response) {
    try {
      const product_category = await prismaClient.productCategory.findMany();

      return res.json(product_category);
    } catch (err) {
      return res.json(err);
    }
  }
}
