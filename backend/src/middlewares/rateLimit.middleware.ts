import { NextFunction, Request, Response } from "express";

const rateLimitWindowMs = 60000;
const maxRequestsPerWindow = 100;
const requestQueue: { [ip: string]: number[] } = {};

export const rateLimiter = (req: Request, res: Response, next: NextFunction) => {
  const ip = req.ip;
  const now = Date.now();
  if (!ip) {
    next();
    return;
  }
  requestQueue[ip] = requestQueue[ip]?.filter((timestamp) => timestamp > now - rateLimitWindowMs) || [];

  if (requestQueue[ip]?.length >= maxRequestsPerWindow) {
    return res.status(429).json({ error: "Rate limit exceeded" });
  }

  requestQueue[ip]?.push(now);

  next();
};
