import React from "react";
import { MovieByIdContainer } from "./MovieByIdContainer"

export const MovieById = (props) =>{
    const movie = MovieByIdContainer(props);
    
    return (
        <p>
            {movie.data.title}
        </p>
      );
    
}