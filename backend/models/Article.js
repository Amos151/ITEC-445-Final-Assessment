const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  // Define the schema for your article objects here
});

module.exports = mongoose.model("Article", articleSchema);
