import { User } from "@prisma/client";

interface CreateUserDTO {
  name: string;
  email: string;
  admin?: boolean;
}

export { CreateUserDTO, User };
