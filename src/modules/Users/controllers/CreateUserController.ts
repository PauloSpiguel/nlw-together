import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

import { PrismaUsersRepositories } from "../repositories/implementations/PrismaUsersRepositories";
import { Encrypt } from "../../../lib/Encrypt";

const usersRepository = new PrismaUsersRepositories();

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, password, admin } = request.body;

    const createUserService = new CreateUserService(usersRepository);
    const encrypt = new Encrypt();

    const passwordHashed = await encrypt.createHash(password);

    const user = await createUserService.execute({
      name,
      email,
      password: passwordHashed,
      admin,
    });

    return response.json(user);
  }
}

export { CreateUserController };
