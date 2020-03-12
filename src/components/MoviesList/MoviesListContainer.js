import {useState, useEffect} from "react";
import {MoviesService} from "../../services/MoviesService"

export const MoviesListContainer = () => {
  const [movies, setMovies] = useState({data: {results:[]}})
  
  const requestMovies = async () => {
    const moviesResult = await MoviesService.getPopularMovies();
    setMovies(moviesResult);
  };

  useEffect(() => {
    requestMovies();
  }, [])
  
  return movies
};
