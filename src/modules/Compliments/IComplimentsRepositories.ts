import { CreateComplimentDTO, Compliment } from "./dtos";

interface IComplimentsRepositories {
  create(data: CreateComplimentDTO): Promise<Compliment>;
  findManyByUser(
    key: "userSenderId" | "userReceiverId",
    userId: string
  ): Promise<Compliment[]>;
}

export { IComplimentsRepositories };
