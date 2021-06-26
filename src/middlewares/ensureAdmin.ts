import { NextFunction, Request, Response } from "express";
import { IUserRepositories } from "../modules/Users/IUserRepositories";
import { PrismaUsersRepositories } from "../modules/Users/repositories/implementations/PrismaUsersRepositories";

let usersRepository: IUserRepositories;

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { user_id } = request;

  usersRepository = new PrismaUsersRepositories();

  const { admin } = await usersRepository.findById(user_id);

  if (admin) {
    return next();
  }

  return response
    .status(401)
    .json({ error: true, message: "User unauthorized" });
}
