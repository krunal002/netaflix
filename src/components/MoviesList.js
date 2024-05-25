import React from "react";
import { MovieCard } from "./MovieCard";

export const MoviesList = ({ title, movies }) => {
  return (
    <div className="px-8">
      <h1 className="text-3xl text-white py-4 ">{title}</h1>
      <div className="flex overflow-x-auto no-scrollbar cursor-pointer">
        <div className="flex gap-2 items-center">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};
