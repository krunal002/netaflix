import React from "react";
import { MoviesList } from "./MoviesList";
import { useSelector } from "react-redux";

export const MovieContainer = () => {
  const movieCat = useSelector((store) => store.movie);
  return (
    <div className="bg-black pb-5">
      <div className="-mt-80 relative z-10">
        <MoviesList
          title={"Now Playing Movies"}
          movies={movieCat.nowPlayingMovies}
        />
        <MoviesList
          title={"Top Rated Movies"}
          movies={movieCat.topRatedMovies}
        />
        <MoviesList title={"Popular Movies"} movies={movieCat.popularMovies} />
        <MoviesList
          title={"Upcoming Movies"}
          movies={movieCat.upcomingMovies}
        />
      </div>
    </div>
  );
};
