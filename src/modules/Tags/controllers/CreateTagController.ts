import { Request, Response } from "express";
import { PrismaTagsRepository } from "../repositories/implementations/PrismaTagsRepository";
import { CreateTagService } from "../services/CreateTagServices";

const tagsRepository = new PrismaTagsRepository();

class CreateTagController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    if (!name) throw new Error("Name is required");

    const createTagService = new CreateTagService(tagsRepository);

    const tag = await createTagService.execute({ name });

    return response.json(tag);
  }
}

export { CreateTagController };
