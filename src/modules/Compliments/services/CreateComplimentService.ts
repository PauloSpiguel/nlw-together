import { IComplimentsRepositories } from "../IComplimentsRepositories";
import { Compliment, CreateComplimentDTO } from "../dtos";
import { IUserRepositories } from "../../Users/IUserRepositories";

class CreateComplimentService {
  constructor(
    private complimentsRepository: IComplimentsRepositories,
    private usersRepository: IUserRepositories
  ) {}

  async execute({
    tagId,
    userReceiverId,
    userSenderId,
    message,
  }: CreateComplimentDTO): Promise<Compliment> {
    if (userReceiverId === userSenderId) {
      throw new Error("Incorrect user receiver");
    }

    const userReceiverExists = await this.usersRepository.findById(
      userReceiverId
    );

    if (!userReceiverExists) {
      throw new Error("User receiver does not exist");
    }

    const compliment = this.complimentsRepository.create({
      tagId,
      userReceiverId,
      userSenderId,
      message,
    });

    return compliment;
  }
}

export { CreateComplimentService };
