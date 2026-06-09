const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    author: {
      type: String,
      required: [true, "Author is required"],
    },
    genre: {
      type: String,
      required: [true, "Genre is required"],
    },
    rating: {
      type: Number,
      min: [1, "Rating must be at least 1"],
      max: [5, "Rating cannot exceed 5"],
    },
    status: {
      type: String,
      enum: ["reading", "finished"],
      default: "reading",
    },
    review: {
      type: String,
    },
  },
  { timestamps: true } // auto adds createdAt and updatedAt
);

module.exports = mongoose.model("Book", bookSchema);