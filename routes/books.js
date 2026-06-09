const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Book = require("../models/Book");

// POST /books — Add a book
router.post("/", async (req, res, next) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (err) {
    next(err);
  }
});

// GET /books — Get all books (with optional filters)
router.get("/", async (req, res, next) => {
  try {
    const { genre, status } = req.query;
    const filter = {};

    if (genre) filter.genre = genre;
    if (status) filter.status = status;

    const books = await Book.find(filter);
    res.status(200).json(books);
  } catch (err) {
    next(err);
  }
});

// GET /books/:id — Get a single book
router.get("/:id", async (req, res, next) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }

    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ error: "Book not found" });

    res.status(200).json(book);
  } catch (err) {
    next(err);
  }
});

// PATCH /books/:id — Update a book
router.patch("/:id", async (req, res, next) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }

    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,        // return updated book
      runValidators: true, // run schema validation on update
    });

    if (!book) return res.status(404).json({ error: "Book not found" });

    res.status(200).json(book);
  } catch (err) {
    next(err);
  }
});

// DELETE /books/:id — Delete a book
router.delete("/:id", async (req, res, next) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }

    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ error: "Book not found" });

    res.status(200).json({ message: "Book deleted successfully" });
  } catch (err) {
    next(err);
  }
});

module.exports = router;