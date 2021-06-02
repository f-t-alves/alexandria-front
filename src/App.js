import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/movie")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={!data ? logo : data.poster} id={!data ? "App-logo" : "movie-poster"} alt="logo" />
        <p id="movie-title">{!data ? "Loading movie" : data.title}</p>
        <p id="fullplot">{!data ? "" : data.fullplot}</p>
      </header>
    </div>
  );
}

export default App;