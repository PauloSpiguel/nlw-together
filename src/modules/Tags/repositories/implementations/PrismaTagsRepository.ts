import { Tag, PrismaClient } from "@prisma/client";
import { ICreateTagDTO } from "../../dtos";
import { ITagsRepositories } from "../../ITagsRepositories";

class PrismaTagsRepository implements ITagsRepositories {
  private client = new PrismaClient();

  async findByName(name: string): Promise<Tag> {
    const tag = await this.client.tag.findFirst({ where: { name } });
    return tag;
  }
  async create({ name }: ICreateTagDTO): Promise<Tag> {
    const tag = await this.client.tag.create({
      data: {
        name,
      },
    });

    return tag;
  }
}

export { PrismaTagsRepository };
