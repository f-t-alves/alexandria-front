import { useState } from "react";
import { findMovie } from "../static/home.js";

export function useMovies() {
  const [movies, setMovies] = useState([]);

  function fetchMovieList() {
    findMovie().then((res) => setMovies(res));
  }

  return [movies, fetchMovieList];
}
