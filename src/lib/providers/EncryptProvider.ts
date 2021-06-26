import { compare, hash } from "bcrypt";

class EncryptProvider {
  async createHash(password: string, salt = 8): Promise<string> {
    return await hash(password, salt);
  }
  async compareHash(password: string, hashed: string): Promise<boolean> {
    return await compare(password, hashed);
  }
}

export { EncryptProvider };
