import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
  const languageKey = useSelector((store) => store.config.language);
  console.log("the language is: ", languageKey);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black justify-center grid grid-cols-12">
        <input
          type="text"
          placeholder={lang[languageKey].gptSearchPlaceHolder}
          className="p-4 m-4 col-span-9"
        ></input>
        <button className="m-4 px-2 py-2 bg-red-700 text-white rounded-lg col-span-3">
          {lang[languageKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;