import React from "react";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";

export const Header = () => {
  const user = useSelector((store) => store.app.user);

  return (
    <div className="flex w-[100%] items-center justify-between absolute z-10 px-5 bg-gradient-to-b from-black">
      <img
        className="w-60"
        src="https://res.cloudinary.com/dfw7zitgl/image/upload/v1712916210/netflix%20clone/logo.png"
        alt="netflix-logo"
      />

      <div className="flex items-center">
        <CgProfile size="20px" color="white" />
        <h1 className="text-white font-medium text-lg ml-1">{user?.fullName}</h1>
        <div className="ml-4">
          <button className="bg-red-700 text-white px-4 py-2">Logout</button>
          <button className="bg-red-700 text-white px-4 py-2 ml-2">
            Search Movie
          </button>
        </div>
      </div>
    </div>
  );
};
