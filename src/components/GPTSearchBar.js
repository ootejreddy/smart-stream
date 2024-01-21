import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector, useDispatch } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const languageKey = useSelector((store) => store.config.language);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  //search movie from tmdb
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const jsonData = await data.json();
    return jsonData;
  };
  const handleGptSearch = async () => {
    const searchTextValue = searchText.current.value;
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query: " +
      searchTextValue +
      ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Results: Gadar, Sholay, Bang Bang, Golmaal, koi mil gaya";
    //* Make an openAI API call
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!gptResults.choices) {
      // TODO: Write Error Handling
    }
    const gptMovieResults =
      gptResults.choices?.[0]?.message?.content.split(",");

    //the below function call is async returns promise Array
    const promiseArray = gptMovieResults.map((movie) => searchMovieTMDB(movie));
    const movieResults = await Promise.all(promiseArray);
    // console.log("The movie results are: ", movieResults);
    dispatch(
      addGptMovieResult({
        movieNames: gptMovieResults,
        movieResults: movieResults,
      })
    );
  };
  console.log("the language is: ", languageKey);
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black justify-center grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder={lang[languageKey].gptSearchPlaceHolder}
          className="p-4 m-4 col-span-9"
          ref={searchText}
        ></input>
        <button
          className="m-4 px-2 py-2 bg-red-500 text-white rounded-lg col-span-3 hover:opacity-80"
          onClick={handleGptSearch}
        >
          {lang[languageKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
