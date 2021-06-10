import { useState } from "react";

export function useMovies() {
  const [movies, setMovies] = useState([]);

  return [movies, setMovies];
}
