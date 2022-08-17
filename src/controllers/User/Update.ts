import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class UpdateUserController {
  static async handle(req: Request, res: Response) {
    const {
      id, name, dt_birthday, cpf,
    } = req.body;

    try {
      const user = await prismaClient.user.update({
        where: {
          id,
        },
        data: {
          name,
          dt_birthday,
          cpf,
        },
      });

      return res.json(user);
    } catch (err) {
      return res.json(err);
    }
  }
}
