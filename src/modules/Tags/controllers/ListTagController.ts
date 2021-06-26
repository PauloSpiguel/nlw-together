import { Request, Response } from "express";
import { PrismaTagsRepository } from "../repositories/implementations/PrismaTagsRepository";

import { ListTagServices } from "../services/ListTagServices";

const tagsRepository = new PrismaTagsRepository();

class ListTagController {
  async handle(request: Request, response: Response) {
    const listTagService = new ListTagServices(tagsRepository);

    const tags = await listTagService.execute();

    return response.json(tags);
  }
}

export { ListTagController };
