const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((e) => e.message);
    return res.status(400).json({ error: messages });
  }

  res.status(500).json({ error: "Something went wrong" });
};

module.exports = errorHandler;