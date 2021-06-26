import IHashProvider from "../../../lib/providers/IHashProvider";
import ITokenProvider from "../../../lib/providers/ITokenProvider";
import { IUserRepositories } from "../IUserRepositories";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticationUserServices {
  constructor(
    private usersRepository: IUserRepositories,
    private encryptProvider: IHashProvider,
    private tokenProvider: ITokenProvider
  ) {}

  async execute({ email, password }: IAuthenticateRequest) {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) throw new Error("Email/Password incorrect");

    const passwordMatch = await this.encryptProvider.compareHash(
      password,
      user.password
    );

    if (!passwordMatch) throw new Error("Email/Password incorrect");

    const token = this.tokenProvider.createToken(
      {
        email: user.email,
      },
      {
        subject: user.id,
        expiresIn: "1d",
      }
    );

    return token;
  }
}

export { AuthenticationUserServices };
