import { CreateComplimentDTO } from "./dtos";

interface IComplimentsRepositories {
  create(data: CreateComplimentDTO): Promise<any>;
}

export { IComplimentsRepositories };
