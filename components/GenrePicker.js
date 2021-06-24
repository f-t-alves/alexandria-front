import styles from "../styles/Home.module.css";

import Dropdown from "../components/Dropdown";
import { findMovie } from "../public/home.js";

export default function GenrePicker({ chosenGenre, genres, handleGenre, setState }) {
  function handleSearch() {
    findMovie(chosenGenre).then((res) => setState(res));
  }
  return (
    <div className={styles.selectarea}>
      <Dropdown
        name="Genres"
        id="genres-dropdown"
        defaultValue=""
        values={genres}
        onChange={handleGenre}
      />
      <p>What will you watch today?</p>
      <button id="search" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
