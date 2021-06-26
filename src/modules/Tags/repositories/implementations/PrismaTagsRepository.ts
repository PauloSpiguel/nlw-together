import { NextFunction } from "express";
import { Tag, PrismaClient } from "@prisma/client";
import { ICreateTagDTO } from "../../dtos";
import { ITagsRepositories } from "../../ITagsRepositories";

class PrismaTagsRepository implements ITagsRepositories {
  constructor(private client = new PrismaClient()) {
    client.$use(async (params, next) => {
      let result = await next(params);
      if (params.model == "Tag" && params.action == "findMany") {
        result = result.map((tag) => ({
          ...tag,
          ["nameCustom"]: `#${tag.name}`,
        }));
      }

      return result;
    });
  }

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
