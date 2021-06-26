import { Request, Response } from "express";
import { PrismaComplimentsRepositories } from "../repositories/implementations/PrismaComplimentsRepositories";
import { CreateComplimentService } from "../services/CreateComplimentService";
import { PrismaUsersRepositories } from "../../Users/repositories/implementations/PrismaUsersRepositories";

const complimentsRepository = new PrismaComplimentsRepositories();
const usersRepository = new PrismaUsersRepositories();

class CreateComplimentController {
  async handle(request: Request, response: Response) {
    const { tag_id, message, user_receiver } = request.body;

    const userId = request.user;

    const createComplimentServices = new CreateComplimentService(
      complimentsRepository,
      usersRepository
    );

    const compliment = await createComplimentServices.execute({
      tagId: tag_id,
      message,
      userReceiverId: user_receiver,
      userSenderId: userId,
    });

    return response.json(compliment);
  }
}

export { CreateComplimentController };
