import {
  Request,
  Response,
} from 'express';
import { prismaClient } from '../../database/prismaClient';

type TCreateAddress = {
  city: string;
  state: string;
  country: string;
  cep: number;
  number: number;
  user_created_id: number;
  user_updated_id: number;
};

export class CreateAddressController {
  static async handle(req: Request, res: Response) {
    const {
      city,
      state,
      country,
      cep,
      number,
      user_created_id,
      user_updated_id,
    }: TCreateAddress = req.body;

    const address = await prismaClient.address.create({
      data: {
        city,
        state,
        country,
        cep,
        number,
        user_created_id,
        user_updated_id,
      },
    });

    return res.json(address);
  }
}
