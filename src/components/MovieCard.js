import React from "react";
import { Banner_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { getId, setOpen } from "../redux/userSlice";

export const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  if (movie.poster_path === null) return null;

  const handleOpen = () => {
    dispatch(getId(movie.id));
    dispatch(setOpen(true));
    // console.log("activve");
  };

  return (
    <div className="w-52">
      <img
        src={`${Banner_URL}/${movie.poster_path}`}
        alt="movie-banner"
        onClick={handleOpen}
      />
    </div>
  );
};
