import { Request, Response } from "express";

import { ListUserReceiveComplimentsService } from "../services/ListUserReceiveComplimentsService";
import { PrismaComplimentsRepositories } from "../repositories/implementations/PrismaComplimentsRepositories";

const complimentsRepository = new PrismaComplimentsRepositories();

class ListUserReceiveComplimentsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listUserReceiveComplimentsService =
      new ListUserReceiveComplimentsService(complimentsRepository);

    const compliments = await listUserReceiveComplimentsService.execute(
      user_id
    );

    return response.json(compliments);
  }
}

export { ListUserReceiveComplimentsController };
