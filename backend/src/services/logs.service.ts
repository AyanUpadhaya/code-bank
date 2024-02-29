import { Response } from "express";
import fs from "fs";

export const LogService = {
  downloadLogs: async (res: Response) => {
    try {
      const logData = fs.readFileSync("requestLogs.txt", "utf-8");
      res.setHeader("Content-Type", "text/plain");
      res.setHeader("Content-Disposition", "attachment; filename=requestLogs.txt");
      res.send(logData);
    } catch (error) {
      throw new Error("Error downloading logs");
    }
  },
  clearLogs: async () => {
    try {
      fs.writeFileSync("requestLogs.txt", ""); // Clearing the logs by writing an empty string
    } catch (error) {
      throw new Error("Error clearing logs");
    }
  },
};
