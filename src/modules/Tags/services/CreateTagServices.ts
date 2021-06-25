import { ICreateTagDTO, Tag } from "../dtos";
import { ITagsRepositories } from "../ITagsRepositories";

class CreateTagService {
  constructor(private tagsRepository: ITagsRepositories) {}

  async execute({ name }: ICreateTagDTO): Promise<Tag> {
    if (!name) throw new Error("Name is required");

    const tagNameExists = await this.tagsRepository.findByName(name);

    if (tagNameExists) throw new Error("Tag already exists");

    const tag = await this.tagsRepository.create({ name });

    return tag;
  }
}

export { CreateTagService };
