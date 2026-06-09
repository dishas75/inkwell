# 📚 Inkwell — Reading Log API

> A REST API for tracking books you've read, built with Node.js, Express & MongoDB.  
> Crafted by **Disha** · OpenCode Summer Task

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Runtime | Node.js |
| Framework | Express.js |
| Database | MongoDB Atlas |
| ODM | Mongoose |
| Frontend | Vanilla HTML/CSS/JS |

---

## Project Structure

```
inkwell/
├── models/
│   └── Book.js           # Mongoose schema
├── routes/
│   ├── books.js          # CRUD + filter routes
│   └── insights.js       # Insights route
├── middleware/
│   └── errorHandler.js   # Global error handler
├── public/
│   └── index.html        # Minimal frontend
├── .env                  # Environment variables
├── .gitignore
└── server.js             # Entry point
```

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/dishas75/inkwell.git
cd inkwell
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### 4. Run the server

```bash
node server.js
```

Server runs on `http://localhost:5000`

---

## API Reference

### Books

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/books` | Add a new book |
| `GET` | `/books` | Get all books |
| `GET` | `/books/:id` | Get a single book |
| `PATCH` | `/books/:id` | Update a book |
| `DELETE` | `/books/:id` | Delete a book |

### Filtering

```
GET /books?genre=Fiction&status=finished
```

### Insights

```
GET /insights
```

Returns:
```json
{
  "totalBooks": 4,
  "avgRating": "4.5",
  "mostReadGenre": "Fiction"
}
```

---

## Book Schema

```json
{
  "title": "Atomic Habits",
  "author": "James Clear",
  "genre": "Self Help",
  "status": "finished",
  "rating": 5,
  "review": "Life changing book!"
}
```

| Field | Type | Required |
|-------|------|----------|
| title | String | Yes |
| author | String | Yes |
| genre | String | Yes |
| status | `reading` \| `finished` | Default: `reading` |
| rating | Number (1–5) | No |
| review | String | No |

---

## Error Handling

| Status | Meaning |
|--------|---------|
| `400` | Bad Request — missing fields or invalid data |
| `404` | Not Found — book doesn't exist |
| `500` | Internal Server Error |

---

## Features

- Full CRUD operations
- Filter books by genre and status
- Reading insights — total books, average rating, most-read genre
- Input validation with descriptive error messages
- Global error handler middleware
- Minimal dark-themed frontend

---

## Roadmap

### v2.0 — Auth & Multi-user
- [ ] User registration and login with JWT authentication
- [ ] Each user gets their own private reading log
- [ ] Password hashing with bcrypt
- [ ] Protected routes — only authenticated users can access their books

### v2.1 — Richer Book Data
- [ ] Reading progress tracker — percentage or page number
- [ ] Start date and finish date per book
- [ ] Multiple tags per book (beyond single genre)
- [ ] Cover image upload via Cloudinary

### v2.2 — Advanced Insights
- [ ] Books read per month — chart-ready data
- [ ] Reading streak tracker
- [ ] Genre breakdown as percentages
- [ ] Longest and shortest books read

### v2.3 — Social Features
- [ ] Public profiles — share your reading log
- [ ] Follow other readers
- [ ] Like and comment on reviews
- [ ] Reading challenges — set a yearly goal

### v3.0 — Full Platform
- [ ] Mobile app with React Native
- [ ] Goodreads import — migrate your existing shelf
- [ ] Book search via Google Books API
- [ ] AI-powered recommendations based on reading history

---

*Built as part of the OpenCode Summer Program*