import { Request, Response, NextFunction } from "express";
import { LogService } from "../services/logs.service";
import dotenv from "dotenv";

dotenv.config();

export const LogController = {
  downloadLogs: async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (process.env.LOGS_KEY && JSON.parse(process.env.LOGS_KEY).includes(req.body.key)) {
        await LogService.downloadLogs(res);
      } else {
        res.status(401).json({ message: "Permission not allowed", status: false });
      }
    } catch (error) {
      next(error);
    }
  },
  clearLogs: async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (process.env.LOGS_KEY && JSON.parse(process.env.LOGS_KEY).includes(req.body.key)) {
        await LogService.clearLogs();
        res.status(200).send({ message: "Logs Cleared" });
      } else {
        res.status(401).json({ message: "Permission not allowed", status: false });
      }
    } catch (error) {
      next(error);
    }
  },
};
