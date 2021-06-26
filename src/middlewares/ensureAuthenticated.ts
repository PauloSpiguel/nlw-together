import { NextFunction, Request, Response } from "express";
import ITokenProvider from "../lib/providers/ITokenProvider";
import { TokenProvider } from "../lib/providers/TokenProvider";

interface IPayload {
  sub: string;
}

let tokenProvider: ITokenProvider;

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { authorization } = request.headers;

  if (!authorization) {
    return response
      .status(401)
      .json({ error: true, message: "Token is invalid" });
  }

  const [, token] = authorization.split(" ");

  if (!token) {
    return response
      .status(401)
      .json({ error: true, message: "Token is invalid" });
  }

  try {
    tokenProvider = new TokenProvider();
    const { sub } = tokenProvider.verifyToken(token) as IPayload;

    request.user_id = sub;

    return next();
  } catch (error) {
    return response
      .status(401)
      .json({ error: true, message: "Token is invalid" });
  }
}
