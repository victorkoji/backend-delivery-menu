import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class GetAddressController {
  static async handle(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const address = await prismaClient.address.findUnique({
        where: {
          id: Number(id),
        },
      });

      return res.json(address);
    } catch (err) {
      return res.json(err);
    }
  }
}
