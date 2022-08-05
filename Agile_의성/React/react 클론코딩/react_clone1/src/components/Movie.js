import propTypes from "prop-types";
import { Link } from "react-router-dom";
function Movie({ id, coverImg, title, summary, rating, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title}></img>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <p>{rating}</p>
      <p>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </p>
    </div>
  );
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  coverImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
};
export default Movie;
