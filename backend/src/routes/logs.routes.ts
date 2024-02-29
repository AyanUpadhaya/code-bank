import express from "express";
import { LogController } from "../controllers/log.controller";

const router = express.Router();

// Route for downloading requestLogs.txt
router.get("/download", LogController.downloadLogs);

// Route for clearing logs
router.delete("/clear", LogController.clearLogs);

export default router;
