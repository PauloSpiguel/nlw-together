import IHashProvider from "../../../lib/providers/IHashProvider";
import { User, CreateUserDTO } from "../dtos";
import { IUserRepositories } from "../IUserRepositories";

interface IUserRequest extends CreateUserDTO {}

class CreateUserService {
  constructor(
    private usersRepository: IUserRepositories,
    private encryptProvider: IHashProvider
  ) {}

  async execute({ name, email, password, admin }: IUserRequest): Promise<User> {
    if (!email) throw new Error("Email is required");

    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) throw new Error("User already exists");

    const passwordHashed = await this.encryptProvider.createHash(password);

    const user = await this.usersRepository.create({
      name,
      email,
      password: passwordHashed,
      admin,
    });

    return user;
  }
}

export { CreateUserService };
