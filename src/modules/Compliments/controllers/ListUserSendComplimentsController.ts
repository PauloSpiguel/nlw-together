import { Request, Response } from "express";

import { ListUserSendComplimentsService } from "../services/ListUserSendComplimentsService";
import { PrismaComplimentsRepositories } from "../repositories/implementations/PrismaComplimentsRepositories";

const complimentsRepository = new PrismaComplimentsRepositories();

class ListUserSendComplimentsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listUserSendComplimentsService = new ListUserSendComplimentsService(
      complimentsRepository
    );

    const compliments = await listUserSendComplimentsService.execute(user_id);

    return response.json(compliments);
  }
}

export { ListUserSendComplimentsController };
