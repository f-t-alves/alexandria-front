export function findMovie(genre) {
  //const cards = document.getElementById("movie-cards");
  const suffix = genre ? `?genre=${genre}` : "";

  return fetch(`${process.env.NEXT_PUBLIC_API_PATH}/movie${suffix}`)
    .then((response) => response.json());
}
