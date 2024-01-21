import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] pl-24 absolute bg-gradient-to-r from-black">
      <h1 className="text-6xl text-white font-bold ">{title}</h1>
      <p className="w-1/4 text-xl text-white py-8">{overview}</p>
      <button className="bg-white text-black text-lg px-8 py-3 rounded-lg mr-5 hover:opacity-80">
        {" "}
        ▶️ Play
      </button>
      <button className="bg-slate-400 text-white text-lg px-5 py-3 rounded-lg hover:opacity-80">
        More Info
      </button>
    </div>
  );
};

export default VideoTitle;
