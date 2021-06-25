import { hash } from "bcrypt";

class Encrypt {
  async createHash(password: string, salt = 8): Promise<string> {
    const passwordHashed = await hash(password, salt);
    return passwordHashed;
  }
  async compareHash(password: string, hash: string) {}
}

export { Encrypt };
