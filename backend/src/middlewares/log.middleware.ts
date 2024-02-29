import { Request, Response, NextFunction } from "express";
import fs from "fs";

export const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Log request details to a file
  // We Can use Different Module like OS Module to retrive more info of log
  const logData = `${new Date().toISOString()} - ${req.method} ${req.url} IP:${req.ip} \n\n`;

  fs.appendFile("requestLogs.txt", logData, (err) => {
    if (err) {
      console.error("Error writing to log file:", err);
    }
  });

  next();
};
