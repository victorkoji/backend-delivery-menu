import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt';
import { prismaClient } from '../../database/prismaClient';

export class CreateUserController {
  static async handle(req: Request, res: Response) {
    const {
      email, name, password, cpf,
    } = req.body;

    const newPassword = await bcrypt.hash(password, 10).then((hash) => hash);

    try {
      const user = await prismaClient.user.create({
        data: {
          name,
          email,
          password: newPassword,
          cpf,
        },
      });

      return res.json(user);
    } catch (err) {
      return res.json(err);
    }
  }
}
