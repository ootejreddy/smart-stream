import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-56 pr-4">
      <img alt="Movie_Img" src={IMG_CDN_URL + posterPath}></img>
    </div>
  );
};

export default MovieCard;
