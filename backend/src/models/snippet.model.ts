import mongoose, { Schema, Document } from "mongoose";

interface Snippet extends Document {
  code: { type: StringConstructor; required: true };
  title: { type: StringConstructor; required: true };
  tags?: {
    type: StringConstructor[];
  };
  author?: { type: StringConstructor };
  language: {
    type: StringConstructor;
    required: true;
  };
  deleted: {
    type: BooleanConstructor;
    default: boolean;
  };
}

const SnippetModel = mongoose.model<Snippet>(
  "snippets",
  new Schema(
    {
      code: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
        index: true,
      },
      tags: {
        type: [String],
        index: true,
      },
      author: {
        type: String,
      },
      language: {
        type: String,
        required: true,
      },
      deleted: {
        type: Boolean,
        default: false,
      },
    },
    { timestamps: true }
  )
);

export { SnippetModel, Snippet };
