import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestions = () => {
  const { movieNames, gptMovieResult } = useSelector(
    (store) => store.gptSearch
  );
  if (!movieNames) return null;
  console.log("The movie is: ", [gptMovieResult[0].results?.[0]]);
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div className="">
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={gptMovieResult[index].results}
          ></MovieList>
        ))}
      </div>
    </div>
  );
};

export default GPTMovieSuggestions;
