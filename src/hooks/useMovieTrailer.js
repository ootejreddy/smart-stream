import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  //fetch trailer
  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const videos = await data.json();
    // console.log("The movie videos are: ", videos);
    const trailers = videos.results.filter((video) => video.type === "Trailer");
    // console.log("The trailers are: ", trailers);
    const finalTrailer = trailers.length ? trailers[0] : videos.results[0];
    // console.log("The final trailer is: ", finalTrailer);
    dispatch(addTrailerVideo(finalTrailer));
  };
  useEffect(() => {
    !trailerVideo && getMovieTrailer();
  }, []);
};
export default useMovieTrailer;
