import { ICreateTagDTO, Tag } from "./dtos";

interface ITagsRepositories {
  findByName(name: string): Promise<Tag>;
  findMany(): Promise<Tag[]>;
  create(data: ICreateTagDTO): Promise<Tag>;
}

export { ITagsRepositories };
