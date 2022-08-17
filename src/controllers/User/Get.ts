import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class GetUserController {
  static async handle(req: Request, res: Response) {
    const { email } = req.params;

    try {
      const user = await prismaClient.user.findUnique({
        where: { email },
      });

      return res.json(user);
    } catch (err) {
      return res.json(err);
    }
  }
}
