import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGPTSearch = useSelector((store) => store.gptSearch.showGPTSearch);
  useNowPlayingMovies();
  useTopRatedMovies();
  return (
    <div>
      <Header></Header>
      {showGPTSearch ? (
        <GPTSearch></GPTSearch>
      ) : (
        <>
          <MainContainer></MainContainer>
          <SecondaryContainer></SecondaryContainer>
        </>
      )}
    </div>
  );
};

export default Browse;
