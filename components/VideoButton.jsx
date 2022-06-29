// DEPRECATED
import React from "react";

function VideoButton({ text }) {
  return (
    <>
      <a
        className="flex flex-row items-center justify-center gap-4"
        href="https://www.youtube.com/watch?v=2mC4zqdTWs4"
        id="fl-homepage-video"
      >
        <div className="flex items-center justify-center h-12 w-12 bg-white rounded-full">
          <img
            className="max-w-full h-auto"
            src="/images/icons/play.svg"
            alt=""
          />
        </div>
        <span className="text-white">{text}</span>
      </a>
    </>
  );
}

export default VideoButton;

// DEPRECATED