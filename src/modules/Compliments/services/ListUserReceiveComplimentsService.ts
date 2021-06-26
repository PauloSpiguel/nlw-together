import { IComplimentsRepositories } from "../IComplimentsRepositories";

class ListUserReceiveComplimentsService {
  constructor(private complimentsRepository: IComplimentsRepositories) {}

  async execute(userId: string) {
    return await this.complimentsRepository.findManyByUser(
      "userReceiverId",
      userId
    );
  }
}

export { ListUserReceiveComplimentsService };
