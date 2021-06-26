export default interface IHashProvider {
  createHash: (password: string, salt?: string | number) => Promise<string>;
  compareHash: (password: string, hashed: string) => Promise<boolean>;
}
