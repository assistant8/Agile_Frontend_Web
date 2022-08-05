function Movie(movies) {
  return (
    <div>
      (
      <div key={movie.id}>
        <img src={movie.medium_cover_image} alt=""></img>
        <h2>{movie.title}</h2>
        <p>{movie.summary}</p>
        <p>{movie.rating}</p>
      </div>
      )
    </div>
  );
}

export default Movie;
