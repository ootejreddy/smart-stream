import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-6 md:px-24 absolute bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl text-white font-bold ">{title}</h1>
      <p className="hidden md:inline-block w-1/4 text-xl text-white py-8">
        {overview}
      </p>
      <div className="my-2 md:my-0">
        <button className="bg-white text-black text-sm md:text-lg px-3 md:px-8 md:py-3 rounded-lg mr-3 md:mr-5 hover:opacity-80">
          ▶️ Play
        </button>
        <button className="bg-slate-400 text-white text-sm md:text-lg px-2 md:px-5 md:py-3 rounded-lg hover:opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
