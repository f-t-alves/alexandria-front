import styles from "../styles/Home.module.css";

import MovieCard from "../components/MovieCard";

export default function MovieCards({ movies }) {
  return (
    <div id="movie-cards" className={styles.grid}>
      {movies.map((movie, i) => {
        return <MovieCard movie={movie} key={i} />;
      })}
    </div>
  );
}
