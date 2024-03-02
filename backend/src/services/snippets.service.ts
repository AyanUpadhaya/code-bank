import { SnippetModel, Snippet } from "../models/snippet.model";

const snippetService = {
  getAllSnippets: async (): Promise<Snippet[]> => {
    return SnippetModel.find({}).exec();
  },

  getSnippets: async (): Promise<Snippet[]> => {
    return SnippetModel.find({ deleted: { $ne: true } }).exec();
  },

  saveNewSnippet: async (newSnippet: Snippet): Promise<Snippet> => {
    return new SnippetModel(newSnippet).save();
  },

  updateSnippet: async (id: string, updatedSnippet: Partial<Snippet>): Promise<Snippet | null> => {
    return SnippetModel.findByIdAndUpdate(id, updatedSnippet, { new: true }).exec();
  },

  deleteSnippet: async (id: string, isDelete: boolean): Promise<Snippet | null> => {
    return SnippetModel.findByIdAndUpdate(id, { deleted: isDelete }, { new: true }).exec();
  },

  searchSnippets: async (searchString: string): Promise<Snippet[]> => {
    const snippets: Snippet[] = await SnippetModel.find({
      $and: [
        {
          $or: [{ title: { $regex: new RegExp(searchString, "i") } }, { tags: { $regex: new RegExp(searchString, "i") } }],
        },
        { deleted: { $ne: true } },
      ],
    }).exec();
    return snippets;
  },
};

export default snippetService;
