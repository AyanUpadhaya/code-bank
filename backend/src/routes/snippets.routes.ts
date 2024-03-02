import express from "express";
import { SnippetController } from "../controllers/snippet.controller";

const router = express.Router();

// Get public snippets
router.get("/", SnippetController.getSnippets);

// Get All Snippets
router.get("/all", SnippetController.getAllSnippets);

// Post a new snippet
router.post("/", SnippetController.saveNewSnippet);

// Patch a snippet using id
router.patch("/:id", SnippetController.updateSnippet);

// Delete a snippet using id
router.delete("/:id", SnippetController.deleteSnippet);

// Get public specific snippets using title and tags
router.get("/search", SnippetController.searchSnippets);

// Get all specific snippets using title and tags
router.get("/searchall", SnippetController.searchAllSnippets);

export default router;
