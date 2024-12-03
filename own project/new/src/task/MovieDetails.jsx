import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams(); 
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch("/date.json")
      .then((response) => response.json())
      .then((movies) => {
        const selectedMovie = movies.find((movie) => movie.id === parseInt(id, 10));
        setMovie(selectedMovie);
      })
      .catch((error) => console.error("Error fetching movie data:", error));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="cri">
      <img src={movie.image} alt={movie.name} width={"20%"} className="ho" />
      <h4>Title: {movie.name}</h4>
      <p>Year: {movie.year}</p>
      <p>Actor: {movie.actor}</p>
      <p>Director: {movie.director}</p>
      <p>Price: ₹{movie.price}</p>
    </div>
  );
};

export default MovieDetails;
