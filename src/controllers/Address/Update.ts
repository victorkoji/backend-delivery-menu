import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

type TUpdateAddress = {
  id: number;
  city: string;
  state: string;
  country: string;
  cep: number;
  number: number;
  user_updated_id: number;
};

export class UpdateAddressController {
  static async handle(req: Request, res: Response) {
    const {
      id,
      city,
      state,
      country,
      cep,
      number,
      user_updated_id,
    }: TUpdateAddress = req.body;

    try {
      const address = await prismaClient.address.update({
        where: {
          id,
        },
        data: {
          city,
          state,
          country,
          cep,
          number,
          user_updated_id,
        },
      });

      return res.json(address);
    } catch (err) {
      return res.json(err);
    }
  }
}
