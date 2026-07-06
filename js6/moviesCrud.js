const fs = require("fs");

// Utility: читање од JSON фајл
function readFile(file) {
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, JSON.stringify([], null, 2));
  }
  const data = fs.readFileSync(file);
  return JSON.parse(data);
}

// Utility: запишување во JSON фајл
function writeFile(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

// Add new movie
function addMovie(file, movie) {
  const data = readFile(file);
  movie.id = data.length ? data[data.length - 1].id + 1 : 1;
  data.push(movie);
  writeFile(file, data);
  return movie;
}

// Get all movies
function getAllMovies(file) {
  return readFile(file);
}

// Get single movie by id
function getMovieById(file, id) {
  const data = readFile(file);
  return data.find(m => m.id === id);
}

// Remove movie by id
function removeMovieById(file, id) {
  let data = readFile(file);
  data = data.filter(m => m.id !== id);
  writeFile(file, data);
}

// Edit movie by id
function editMovieById(file, id, newData) {
  let data = readFile(file);
  const index = data.findIndex(m => m.id === id);
  if (index !== -1) {
    data[index] = { ...data[index], ...newData };
    writeFile(file, data);
    return data[index];
  }
  return null;
}

module.exports = {
  addMovie,
  getAllMovies,
  getMovieById,
  removeMovieById,
  editMovieById
};
