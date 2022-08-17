import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class DeleteAddressController {
  static async handle(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const address = await prismaClient.address.update({
        where: {
          id: Number(id),
        },
        data: {
          deleted_at: new Date(),
        },
      });

      return res.json(address);
    } catch (err) {
      return res.json(err);
    }
  }
}
