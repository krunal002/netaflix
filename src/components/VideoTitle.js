import React from "react";
import { CiPlay1 } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { getId, setOpen } from "../redux/userSlice";

export const VideoTitle = ({ movie }) => {
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(getId(movie.id));
    dispatch(setOpen(true));
  };

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-[vw] aspect-video absolute text-white pt-[20%] p-12">
      <h1 className="text-3xl font-bold">{movie.original_title}</h1>
      <p className="w-1/2 mt-4">{movie.overview}</p>
      <div className="flex mt-8">
        <button
          className="flex items-center px-6 py-2 bg-white text-black rounded-md mr-2 hover:bg-opacity-80 "
          onClick={handleOpen}
        >
          <CiPlay1 size="20px" /> <span className="ml-1">Play</span>
        </button>
        <button
          className="flex items-center px-6 py-2 bg-gray-500 text-black rounded-md mr-2 hover:bg-opacity-60 "
          onClick={() => handleScroll("watchMore")}
        >
          <CiCircleInfo size="20px" /> <span className="ml-1">Watch More</span>{" "}
        </button>
      </div>
    </div>
  );
};
