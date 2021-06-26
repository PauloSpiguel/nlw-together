import { CreateUserDTO, User } from "./dtos";

interface IUserRepositories {
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
  findMany(): Promise<User[]>;
  create(data: CreateUserDTO): Promise<User>;
}

export { IUserRepositories };
