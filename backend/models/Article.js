import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  author: { type: String, required: true },
  text:   { type: String, required: true },
});

const ArticleSchema = new mongoose.Schema({
  // Define the schema for your article objects here
  name:      { type: String, required: true, unique: true },
  title:     { type: String, required: true },
  content:   [{ type: String, required: true }],    
  upvotes:   { type: Number, default: 0 },
  comments:  { type: [CommentSchema], default: [] },
  createdAt: { type: Date, default: Date.now },
});

// creating the model
const Article = mongoose.model("Article", ArticleSchema);

// exporting it as the default export
export default Article;
