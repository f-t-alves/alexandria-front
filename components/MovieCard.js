import styles from "../styles/MovieCard.module.css";

console.log(styles);

export default function MovieCard({ movie }) {
  return (
    <a
      href={`https:www.imdb.com/title/tt${movie.imdb.id}`}
      className={styles.card}
    >
      <h2>{movie.title}</h2>
      <p>{movie.fullplot}</p>
    </a>
  );
}
