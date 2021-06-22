import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

import { PrismaUsersRepositories } from "../repositories/implementations/PrismaUsersRepositories";

const usersRepository = new PrismaUsersRepositories();

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, admin } = request.body;

    const createUserService = new CreateUserService(usersRepository);

    const user = await createUserService.execute({ name, email, admin });

    return response.json(user);
  }
}

export { CreateUserController };
