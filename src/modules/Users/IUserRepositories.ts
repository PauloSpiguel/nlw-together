import { CreateUserDTO, User } from "./dtos/CreateUserDTO";

interface IUserRepositories {
  findByEmail(email: string): Promise<User>;
  create(data: CreateUserDTO): Promise<User>;
}

export { IUserRepositories };
