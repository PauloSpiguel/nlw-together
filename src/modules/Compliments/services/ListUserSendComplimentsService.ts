import { IComplimentsRepositories } from "../IComplimentsRepositories";

class ListUserSendComplimentsService {
  constructor(private complimentsRepository: IComplimentsRepositories) {}

  async execute(userId: string) {
    return await this.complimentsRepository.findManyByUser(
      "userSenderId",
      userId
    );
  }
}

export { ListUserSendComplimentsService };
