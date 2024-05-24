import React from "react";

export const VideoBackground = () => {

  return (
    <div className="w-screen">
      <iframe
        className={"w-screen aspect-video"}
        src={`https://www.youtube.com/embed/owwqjnl27UQ?si=BWvrrvi4sQVR_m9W&autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};
