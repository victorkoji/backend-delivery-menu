import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class ListUserController {
  static async handle(req: Request, res: Response) {
    try {
      const user = await prismaClient.user.findMany();

      return res.json(user);
    } catch (err) {
      return res.json(err);
    }
  }
}
