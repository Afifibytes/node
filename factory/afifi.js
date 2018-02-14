var movies = require('./movies')

var aifisMovies = movies();

aifisMovies.favMovie = "The intern";

console.log("Afifi's faviorite movie is: " + aifisMovies.favMovie);