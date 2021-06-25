import { ICreateTagDTO } from "../dtos";
import { ITagsRepositories } from "../ITagsRepositories";

class CreateTagService {
  constructor(private tagsRepository: ITagsRepositories) {}

  async execute({ name }: ICreateTagDTO): Promise<void> {
    if (!name) throw new Error("Name is required");

    const tagNameExists = await this.tagsRepository.findByName(name);

    if (tagNameExists) throw new Error("Tag name already exists");

    await this.tagsRepository.create({ name });
  }
}

export { CreateTagService };
