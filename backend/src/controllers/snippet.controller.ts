import { NextFunction, Request, Response } from "express";
import { Snippet } from "../models/snippet.model";
import snippetService from "../services/snippets.service";

export const SnippetController = {
  getSnippets: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const snippets: Snippet[] = await snippetService.getSnippets();
      res.json({ message: "Retrieval Success", data: snippets, status: true });
    } catch (error) {
      next(error);
    }
  },

  getAllSnippets: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const snippets: Snippet[] = await snippetService.getAllSnippets();
      res.json({ message: "Retrieval Success", data: snippets, status: true });
    } catch (error) {
      next(error);
    }
  },

  saveNewSnippet: async (req: Request, res: Response, next: NextFunction) => {
    const newSnippet: Snippet = req.body;
    try {
      const savedSnippet: Snippet = await snippetService.saveNewSnippet(newSnippet);
      res.status(201).json({ message: "Saving Success", data: savedSnippet, status: true });
    } catch (error) {
      next(error);
    }
  },

  updateSnippet: async (req: Request, res: Response, next: NextFunction) => {
    const id: string = req.params.id;
    const updatedSnippet: Partial<Snippet> = req.body;
    try {
      const snippet: Snippet | null = await snippetService.updateSnippet(id, updatedSnippet);
      if (!snippet || snippet.deleted) {
        const exception = new Error("Snippet Not Found");
        exception.name = "NotFound";
        next(exception);
        return;
      }
      res.json({ message: "Update Success", data: snippet, status: true });
    } catch (error) {
      next(error);
    }
  },

  deleteSnippet: async (req: Request, res: Response, next: NextFunction) => {
    const id: string = req.params.id;
    const { deleted } = req.body;
    try {
      const deletedSnippet: Snippet | null = await snippetService.deleteSnippet(id, deleted);
      if (!deletedSnippet || deletedSnippet.deleted) {
        const exception = new Error("Snippet Not Found");
        exception.name = "NotFound";
        next(exception);
        return;
      }
      res.status(200).json({ message: "Deletion Success", status: true });
    } catch (error) {
      next(error);
    }
  },

  searchAllSnippets: async (req: Request, res: Response, next: NextFunction) => {
    const searchString: string = req.query.q as string;
    try {
      const snippets: Snippet[] = await snippetService.searchAllSnippets(searchString);
      res.json({ message: "Searching Success", snippets, status: true });
    } catch (error) {
      next(error);
    }
  },

  searchSnippets: async (req: Request, res: Response, next: NextFunction) => {
    const searchString: string = req.query.q as string;
    try {
      const snippets: Snippet[] = await snippetService.searchSnippets(searchString);
      res.json({ message: "Searching Success", snippets, status: true });
    } catch (error) {
      next(error);
    }
  },
};
