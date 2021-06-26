import { Tag, PrismaClient } from "@prisma/client";
import { ICreateTagDTO } from "../../dtos";
import { ITagsRepositories } from "../../ITagsRepositories";

class PrismaTagsRepository implements ITagsRepositories {
  private client = new PrismaClient();

  async findByName(name: string): Promise<Tag> {
    return await this.client.tag.findFirst({ where: { name } });
  }

  async create({ name }: ICreateTagDTO): Promise<Tag> {
    return await this.client.tag.create({
      data: {
        name,
      },
    });
  }

  async findMany(): Promise<Tag[]> {
    return await this.client.tag.findMany();
  }
}

export { PrismaTagsRepository };
