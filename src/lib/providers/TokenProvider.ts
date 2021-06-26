import { sign, verify, decode, JwtPayload, SignOptions } from "jsonwebtoken";

import { app } from "../../config/app";

class TokenProvider {
  createToken(payload: JwtPayload, options?: SignOptions): string {
    return sign(payload, app.jwt.secret, options);
  }
  verifyToken(token: string) {
    return verify(token, app.jwt.secret);
  }
  decodeToken(token: string) {
    return decode(token);
  }
}

export { TokenProvider };
