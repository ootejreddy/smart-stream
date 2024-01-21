import React from "react";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";
import { BACKGROUND_IMG_URL } from "../utils/constants";

const GPTSearch = () => {
  return (
    <>
      <div className="">
        <img
          src={BACKGROUND_IMG_URL}
          alt="background"
          className="fixed object-cover w-full h-full -z-10"
        ></img>
      </div>
      <div className="pt-[40%] md:pt-0">
        <GPTSearchBar></GPTSearchBar>
        <GPTMovieSuggestions></GPTMovieSuggestions>
      </div>
    </>
  );
};

export default GPTSearch;
