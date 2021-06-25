import { CreateUserDTO, User } from "./dtos";

interface IUserRepositories {
  findByEmail(email: string): Promise<User>;
  findAll(): Promise<User[]>;
  create(data: CreateUserDTO): Promise<User>;
}

export { IUserRepositories };
