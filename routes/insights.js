const express = require("express");
const router = express.Router();
const Book = require("../models/Book");

// GET /insights
router.get("/", async (req, res, next) => {
  try {
    const books = await Book.find();

    const totalBooks = books.length;

    // Average rating 
    const ratedBooks = books.filter((b) => b.rating);
    const avgRating =
      ratedBooks.length > 0
        ? (ratedBooks.reduce((sum, b) => sum + b.rating, 0) / ratedBooks.length).toFixed(1)
        : "No ratings yet";

    // Most read genre
    const genreCount = {};
    books.forEach((b) => {
      genreCount[b.genre] = (genreCount[b.genre] || 0) + 1;
    });
    const mostReadGenre =
      Object.keys(genreCount).length > 0
        ? Object.keys(genreCount).reduce((a, b) =>
            genreCount[a] > genreCount[b] ? a : b
          )
        : "No books yet";

    res.status(200).json({ totalBooks, avgRating, mostReadGenre });
  } catch (err) {
    next(err);
  }
});

module.exports = router;