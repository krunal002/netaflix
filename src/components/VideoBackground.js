import React from "react";
import { useMovieById } from "../hooks/useMovieById";
import { useSelector } from "react-redux";

export const VideoBackground = ({ movieId, bool }) => {
  useMovieById(movieId);
  const movieClip = useSelector((store) => store.movie.movieClip);
  // console.log("Clip: ",movieClip)

  return (
    <div className="w-[vw] overflow-hidden">
      <iframe
        className={`${bool ? "w-[100%]" : "w-screen aspect-video" } `}
        src={`https://www.youtube.com/embed/${movieClip?.key}?si=BWvrrvi4sQVR_m9W&autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};
