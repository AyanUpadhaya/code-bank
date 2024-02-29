import express, { NextFunction, Request, Response } from "express";
import { SnippetModel, Snippet } from "../models/snippet.model";
import { SnippetController } from "../controllers/snippet.controller";

const router = express.Router();

// Get all snippets
router.get("/", SnippetController.getAllSnippets);

// Post a new snippet
router.post("/", SnippetController.saveNewSnippet);

// Patch a snippet using id
router.patch("/:id", SnippetController.updateSnippet);

// Delete a snippet using id
router.delete("/:id", SnippetController.deleteSnippet);

// Get specific snippets using title and tags
router.get("/search", SnippetController.searchSnippets);

export default router;
