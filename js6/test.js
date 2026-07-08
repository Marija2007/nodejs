const moviesCrud = require("./moviesCrud");
const file = "./movies.json";

// Add new movie
 moviesCrud.addMovie(file, { name: "Avatar", year: 2009 });

// Get all movies
console.log("All movies:", moviesCrud.getAllMovies(file));

// Get single movie by id
console.log("Movie with ID 4:", moviesCrud.getMovieById(file, 4)); // The Dark Knight

// Remove movie by id
moviesCrud.removeMovieById(file, 10); // Removes Pulp Fiction

// Edit movie by id
moviesCrud.editMovieById(file, 10, { name: "Titanic (Remastered)", year: 1997 });
