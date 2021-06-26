import { NextFunction, Request, Response } from "express";
import ITokenProvider from "../lib/providers/ITokenProvider";
import { TokenProvider } from "../lib/providers/TokenProvider";

let tokenProvider: ITokenProvider;

export function checkAuthenticateUser(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { authorization } = request.headers;

  tokenProvider = new TokenProvider();

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

  const decoded = tokenProvider.decodeToken(token);

  if (!decoded) {
    return response
      .status(401)
      .json({ error: true, message: "Token is invalid" });
  }

  request.user = String(decoded.sub);

  return next();
}
