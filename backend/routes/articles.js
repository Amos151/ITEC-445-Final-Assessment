import { Router } from "express";
import Article from "../models/Article.js";

const router = Router();


// GET all articles
router.get("/", async (req, res) => {
  try {
    const articles = await Article.find().sort({ createdAt: -1 });
    res.json(articles);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching articles" });
  }
});

// GET one article by name
router.get("/:name", async (req, res) => {
  try {
    const article = await Article.findOne({ name: req.params.name });
    if (!article) return res.status(404).json({ error: "Article not found" });
    res.json(article);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching article" });
  }
});

// PUT → increment upvotes
router.put("/:name/upvotes", async (req, res) => {
  try {
    const article = await Article.findOneAndUpdate(
      { name: req.params.name },
      { $inc: { upvotes: 1 } },
      { new: true }
    );
    if (!article) return res.status(404).json({ error: "Article not found" });
    res.json(article);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error updating upvotes" });
  }
});

// POST → create a new article
router.post("/", async (req, res) => {
  try {
    const { name, title, content, author } = req.body;
    const newArticle = new Article({ name, title, content, author });
    await newArticle.save();
    res.status(201).json(newArticle);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Error creating article" });
  }
});

// DELETE → remove an article
router.delete("/:name", async (req, res) => {
  try {
    const result = await Article.findOneAndDelete({ name: req.params.name });
    if (!result) return res.status(404).json({ error: "Article not found" });
    res.json({ message: "Article deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error deleting article" });
  }
});

function ensureAuth(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.status(401).json({ error: "Unauthorized" });
}

router.post("/", ensureAuth, async (req, res) => {
  try {
    const { name, title, content, author } = req.body;
    const newArticle = new Article({ name, title, content, author });
    await newArticle.save();
    res.status(201).json(newArticle);
  } catch (err) {
    res.status(400).json({ error: "Bad request creating article" });
  }
});

export default router;