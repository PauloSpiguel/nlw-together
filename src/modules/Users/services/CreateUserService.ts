import { User } from "../dtos/CreateUserDTO";
import { IUserRepositories } from "../IUserRepositories";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUserService {
  constructor(private usersRepository: IUserRepositories) {}

  async execute({ name, email, admin }: IUserRequest): Promise<User> {
    if (!email) throw new Error("Email is required");

    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) throw new Error("User already exists");

    const user = await this.usersRepository.create({ name, email, admin });

    return user;
  }
}

export { CreateUserService };
