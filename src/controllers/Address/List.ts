import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class ListAddressController {
  static async handle(req: Request, res: Response) {
    try {
      const address = await prismaClient.address.findMany();

      return res.json(address);
    } catch (err) {
      return res.json(err);
    }
  }
}
