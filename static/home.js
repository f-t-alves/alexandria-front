export function findMovie() {
  //const cards = document.getElementById("movie-cards");

  return fetch("http://localhost:3000/api/movie")
    .then((response) => response.json());
}
