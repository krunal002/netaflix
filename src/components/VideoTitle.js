import React from "react";
import { CiPlay1 } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";

export const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-[vw] aspect-video absolute text-white pt-[20%] p-12">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="w-1/3 mt-4">{overview}</p>
      <div className="flex mt-8">
        <button className="flex items-center px-6 py-2 bg-white text-black rounded-md mr-2 hover:bg-opacity-80 ">
          <CiPlay1 size="20px" /> <span className="ml-1">Play</span>{" "}
        </button>
        <button className="flex items-center px-6 py-2 bg-gray-500 text-black rounded-md mr-2 hover:bg-opacity-60 ">
          <CiCircleInfo size="20px" /> <span className="ml-1">Watch More</span>{" "}
        </button>
      </div>
    </div>
  );
};
