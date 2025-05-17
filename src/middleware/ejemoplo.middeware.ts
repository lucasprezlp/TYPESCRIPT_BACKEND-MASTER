import { Request, Response, NextFunction } from "express";

export async function patitoSecret(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { secret_code } = req.body;

  if (!secret_code) {
    res.status(400).json({ error: "no secret code" });
  }
  if (secret_code !== "patito") {
    res.status(400).json({ error: "invalid secret code" });
  }
  next();
}
