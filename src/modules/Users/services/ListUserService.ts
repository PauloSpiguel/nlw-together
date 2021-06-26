import { User } from "../dtos";
import { IUserRepositories } from "../IUserRepositories";

class ListUserService {
  constructor(private usersRepository: IUserRepositories) {}

  async execute(): Promise<User[]> {
    const users = await this.usersRepository.findMany();

    return users;
  }
}

export { ListUserService };
