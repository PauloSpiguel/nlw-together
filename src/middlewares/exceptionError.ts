import { NextFunction, Request, Response } from "express";
import "express-async-errors";

export function exceptionError(
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (err instanceof Error) {
    return response.status(400).json({ error: true, message: err.message });
  }

  return response
    .status(500)
    .json({ error: true, message: "Internal server error" });
}
