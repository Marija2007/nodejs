const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/name") {
    res.write("Marija");
    return res.end();
  }

  if (url === "/surname") {
    res.write("Petkova");
    return res.end();
  }

  if (url === "/year") {
    res.write("2007");
    return res.end();
  }

  // Ако не постои рута
  res.write("Route not found");
  return res.end();
});

server.listen(8082);
console.log("Server is running on http://localhost:8082");
