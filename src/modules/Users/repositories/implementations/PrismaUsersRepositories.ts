import { PrismaClient } from "@prisma/client";
import { CreateUserDTO, User } from "../../dtos";
import { IUserRepositories } from "../../IUserRepositories";

class PrismaUsersRepositories implements IUserRepositories {
  constructor(private client = new PrismaClient()) {
    client.$use(async (params, next) => {
      let result = await next(params);
      if (params.model == "User" && params.action == "findMany") {
        result = result.map((user) => {
          delete user.password;
          return user;
        });
      }

      return result;
    });
  }

  async findById(id: string): Promise<User> {
    return await this.client.user.findUnique({ where: { id } });
  }

  async findByEmail(email: string): Promise<User> {
    return await this.client.user.findFirst({ where: { email } });
  }

  async findMany(): Promise<User[]> {
    return await this.client.user.findMany();
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
