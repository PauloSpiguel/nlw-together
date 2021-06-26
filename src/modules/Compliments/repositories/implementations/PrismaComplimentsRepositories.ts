import { PrismaClient } from "@prisma/client";
import { IComplimentsRepositories } from "../../IComplimentsRepositories";
import { CreateComplimentDTO } from "../../dtos";

class PrismaComplimentsRepositories implements IComplimentsRepositories {
  private client = new PrismaClient();

  async create(data: CreateComplimentDTO): Promise<any> {
    const compliment = await this.client.compliment.create({
      data,
      include: {
        tag: {
          select: {
            name: true,
          },
        },
        user_sender: {
          select: {
            name: true,
            email: true,
            admin: true,
          },
        },
        user_receiver: {
          select: {
            name: true,
            email: true,
            admin: true,
          },
        },
      },
    });

    return compliment;
  }
}

export { PrismaComplimentsRepositories };
