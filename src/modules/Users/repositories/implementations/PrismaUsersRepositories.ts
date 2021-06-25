import { User } from ".prisma/client";
import { PrismaClient } from "@prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";
import { IUserRepositories } from "../../IUserRepositories";

class PrismaUsersRepositories implements IUserRepositories {
  constructor(private client = new PrismaClient()) {}

  async findByEmail(email: string): Promise<User> {
    const user = await this.client.user.findFirst({ where: { email } });

    return user;
  }

  async findAll(): Promise<User[]> {
    const users = await this.client.user.findMany();

    return users;
  }

  async create({ name, email, admin }: CreateUserDTO): Promise<User> {
    const user = await this.client.user.create({
      data: { name, email, admin },
    });

    return user;
  }
}

export { PrismaUsersRepositories };
