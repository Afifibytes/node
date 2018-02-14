var movies = require('./movies');

var emilysMovies = movies();
emilysMovies.favMovie = "The Notebook";
console.log("Emily's faviorite movie is: " + emilysMovies.favMovie);