import { Request, Response } from "express";
import { AuthenticationUserServices } from "../services/AuthenticationUserServices";

import { PrismaUsersRepositories } from "../repositories/implementations/PrismaUsersRepositories";

import { EncryptProvider } from "../../../lib/providers/EncryptProvider";
import { TokenProvider } from "../../../lib/providers/TokenProvider";

const usersRepository = new PrismaUsersRepositories();
const encryptProvider = new EncryptProvider();
const tokenProvider = new TokenProvider();

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticateUserService = new AuthenticationUserServices(
      usersRepository,
      encryptProvider,
      tokenProvider
    );

    const token = await authenticateUserService.execute({ email, password });

    return response.json(token);
  }
}

export { AuthenticateUserController };
