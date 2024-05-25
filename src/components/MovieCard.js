import React from "react";
import { Banner_URL } from "../utils/constants";

export const MovieCard = ({ movie }) => {
  if (movie.poster_path === null) return null;

  return (
    <div className="w-52">
      <img src={`${Banner_URL}/${movie.poster_path}`} alt="movie-banner" />
    </div>
  );
};
