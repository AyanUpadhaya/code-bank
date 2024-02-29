import { NextFunction, Request, Response } from "express";

type ErrorHandlerType = (err: Error, req: Request, res: Response, next: NextFunction) => void;

export const errorHandler: ErrorHandlerType = (err, req, res, next) => {
  // Log the error for debugging purposes
  console.error(err);

  // Set the default status code for internal server errors
  let statusCode: number = 500;

  // Determine the status code based on the error
  switch (err.name) {
    case "NotFound":
      statusCode = 404;
      break;
    case "Unauthorized":
      statusCode = 401;
      break;
    case "BadRequest":
      statusCode = 400;
      break;
    // Add more cases as needed for other custom error types
  }

  // Send the error response with the appropriate status code and error details
  res.status(statusCode).json({
    error: {
      message: err.message,
      name: err.name,
      status: false,
      stack: process.env.NODE_ENV === "production" ? "🔒" : err.stack, // Stack trace is hidden in production
    },
  });
};
