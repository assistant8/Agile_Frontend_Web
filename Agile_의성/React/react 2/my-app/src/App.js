import { useState, useEffect } from "react";
import Movie from "./Component/Movie";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
      ` https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setMovies(json.data.movies);
        setLoading(false);
      });
  }, [loading, movies]);

  return <div>{loading ? <h1>{movies.}</h1> : null} </div>;
}
export default App;
