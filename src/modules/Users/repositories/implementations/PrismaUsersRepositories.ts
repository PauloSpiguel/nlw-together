import { PrismaClient } from "@prisma/client";
import { CreateUserDTO, User } from "../../dtos";
import { IUserRepositories } from "../../IUserRepositories";

class PrismaUsersRepositories implements IUserRepositories {
  constructor(private client = new PrismaClient()) {}
  async findById(id: string): Promise<User> {
    return await this.client.user.findUnique({ where: { id } });
  }

  async findByEmail(email: string): Promise<User> {
    return await this.client.user.findFirst({ where: { email } });
  }

  async findMany(): Promise<User[]> {
    const users = await this.client.user.findMany();

    const formatUsers = users.map((user) => {
      delete user.password;
      return user;
    });

    return formatUsers;
  }

  async create({ name, email, password, admin }: CreateUserDTO): Promise<User> {
    const user = await this.client.user.create({
      data: { name, email, password, admin },
    });

    delete user.password;

    return user;
  }
}

export { PrismaUsersRepositories };
