import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="text-lg py-6 w-1/4">{overview}</p>

      <div>
        <button className="bg-white p-4 px-12 text-black text-xl rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="bg-gray-500 mx-2 p-4 px-12 text-white text-lg bg-opacity-50 rounded-lg">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
