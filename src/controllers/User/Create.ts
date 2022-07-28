import {Request, Response} from 'express';
import { prismaClient } from '../../database/prismaClient';
import * as bcrypt from 'bcrypt'; 

type TUser = {
  email: string;
  name: string;
  password: string;
};

export class CreateUserController{
  public async handle(req: Request, res: Response) {
    const {email, name, password}: TUser = req.body;

    const newPassword = await bcrypt.hash(password, 10).then(function(hash) {
      return hash;
    });

    try {
      
      const user = await prismaClient.user.create({
        data:{
          name,
          email,
          password: newPassword,
          cpf: '000.000.000-00',
        }
      })
      
      //Teste
      const address = await prismaClient.address.create({
        data:{
          city: "Campo Grande",
          state: "Mato Grosso do Sul (MS)",
          country: "Brasil (BR)",
          cep: 7900000,
          number: 2,
          user_created_id: user.id,
          user_updated_id: user.id,
        }
      })
      return res.json(user);

    } catch (err) {
      return res.json(err);
    }
  }
}
