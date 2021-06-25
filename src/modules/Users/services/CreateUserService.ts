import { User, CreateUserDTO } from "../dtos";
import { IUserRepositories } from "../IUserRepositories";

interface IUserRequest extends CreateUserDTO {}

class CreateUserService {
  constructor(private usersRepository: IUserRepositories) {}

  async execute(data: IUserRequest): Promise<User> {
    const { email } = data;

    if (!email) throw new Error("Email is required");

    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) throw new Error("User already exists");

    const user = await this.usersRepository.create(data);

    return user;
  }
}

export { CreateUserService };
