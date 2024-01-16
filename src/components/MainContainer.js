import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  //   console.log("The movies are: ", movies);
  //* early return
  if (!movies) return;
  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;
  //   console.log("The main movie is: ", mainMovie.title);
  return (
    <div className="">
      <VideoTitle title={original_title} overview={overview}></VideoTitle>
      <VideoBackground movieId={id}></VideoBackground>
    </div>
  );
};

export default MainContainer;
