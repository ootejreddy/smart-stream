import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className=" mt-0 md:-mt-56 relative z-20">
        <MovieList
          title={"Now Playing"}
          movies={movies.nowPlayingMovies}
        ></MovieList>
        <MovieList
          title={"Top Rated Movies"}
          movies={movies.topRatedMovies}
        ></MovieList>
        <MovieList
          title={"Popular"}
          movies={movies.nowPlayingMovies}
        ></MovieList>
        <MovieList
          title={"Upcoming Movies"}
          movies={movies.nowPlayingMovies}
        ></MovieList>
      </div>
    </div>
  );
};

export default SecondaryContainer;
