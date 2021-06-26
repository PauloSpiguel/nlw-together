import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

import { PrismaUsersRepositories } from "../repositories/implementations/PrismaUsersRepositories";
import { EncryptProvider } from "../../../lib/providers/EncryptProvider";

const usersRepository = new PrismaUsersRepositories();
const encryptProvider = new EncryptProvider();

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, password, admin = false } = request.body;

    const createUserService = new CreateUserService(
      usersRepository,
      encryptProvider
    );

    const user = await createUserService.execute({
      name,
      email,
      password,
      admin,
    });

    return response.json(user);
  }
}

export { CreateUserController };
