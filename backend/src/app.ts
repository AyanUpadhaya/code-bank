import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { errorHandler } from "./middlewares/error.middleware";
import SnippetRouter from "./routes/snippets.routes";
import mongoose from "mongoose";
import { rateLimiter } from "./middlewares/rateLimit.middleware";

dotenv.config();

const app = express();

// Parse Form Data or Url Data
app.use(express.urlencoded({ extended: true }));
// Parse JSON data
app.use(express.json());
// Setup Cors
app.use(cors());
// Serve Static page on / path
app.use(express.static("./public"));

// rate limitter
app.use(rateLimiter);

// Your Routes here
app.use("/snippets", SnippetRouter);

// Handle Error in Routes
app.use(errorHandler);

// Start the Server
app.listen(process.env.PORT, async () => {
  try {
    if (process.env.MONGO_URL) {
      await mongoose.connect(process.env.MONGO_URL);
      console.log("Connected to Database");
    }
  } catch (error) {
    if (error) {
      console.log({ message: "Unable to Connect to DB", error: error });
    }
  }
  console.log(`Server running on Port ${process.env.PORT || 8080} - http://localhost:${process.env.PORT || 8080}/`);
});
