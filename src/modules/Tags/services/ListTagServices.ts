import { Tag } from "../dtos";
import { ITagsRepositories } from "../ITagsRepositories";

class ListTagServices {
  constructor(private tagsRepository: ITagsRepositories) {}

  async execute(): Promise<Tag[]> {
    return await this.tagsRepository.findMany();
  }
}

export { ListTagServices };
