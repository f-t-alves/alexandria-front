import { useState } from "react";
import { findMovie } from "../public/home.js";

export function useGenre() {
  const [genre, setGenre] = useState("");

  function fetchGenre(e) {
    const select = e.target;
    return setGenre(select.value);
  }

  return [genre, fetchGenre];
}
