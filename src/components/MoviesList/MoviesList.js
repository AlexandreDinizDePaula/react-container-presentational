import React from "react";
import {Link} from "react-router-dom";
import {MoviesListContainer} from "./MoviesListContainer"

export const MoviesList = () => {
  const movies = MoviesListContainer();
  
  return (
    <ul>
      {movies.data.results.map(movie => (
        <li>
        <Link to={"/movie/" + movie.id}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};
