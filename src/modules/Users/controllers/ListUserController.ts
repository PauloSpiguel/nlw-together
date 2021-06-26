import { Request, Response } from "express";
import { ListUserService } from "../services/ListUserService";

import { PrismaUsersRepositories } from "../repositories/implementations/PrismaUsersRepositories";

const usersRepository = new PrismaUsersRepositories();

class ListUserController {
  async handle(request: Request, response: Response) {
    const listUserService = new ListUserService(usersRepository);

    const users = await listUserService.execute();

    return response.json(users);
  }
}

export { ListUserController };
