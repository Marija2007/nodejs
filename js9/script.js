const express = require("express");
const fetch = require("node-fetch");
const app = express();

const data = {
  books: [
    "Pride and Prejudice",
    "Jane Eyre",
    "Wuthering Heights",
    "Great Expectations",
    "Hamlet",
    "Macbeth",
    "Oliver Twist",
    "The Picture of Dorian Gray"
  ]
};

// 1. Route за сите книги
app.get("/books", (req, res) => {
  res.json(data.books);
});

// 2. Route со query за една книга
// Пример: http://localhost:8088/book?name=Hamlet
app.get("/book", (req, res) => {
  const { name } = req.query;
  const book = data.books.find(b => b.toLowerCase() === name?.toLowerCase());
  res.send(book ? book : "Book not found");
});

// 3. Fetch data од API
app.get("/users", async (req, res) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
// 4. Display само имињата
    const names = users.map(u => u.name);
    res.json(names);
  } catch (err) {
    res.status(500).send("Error fetching users");
  }
});

app.listen(8088, () => {
  console.log("Server listening on port 8088!");
});
