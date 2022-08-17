import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class DeleteUserController {
  static async handle(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const user = await prismaClient.user.update({
        where: {
          id: Number(id),
        },
        data: {
          deleted_at: new Date(),
        },
      });

      return res.json(user);
    } catch (err) {
      return res.json(err);
    }
  }
}
