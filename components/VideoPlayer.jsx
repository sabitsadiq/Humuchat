import React from "react";
import ReactPlayer from "react-player";

export default function VideoPlayer() {
  return (
    <div className="w-full h-[100vh] [&_video]:object-cover">
      <ReactPlayer
        url="/video.mp4"
        fluid={false}
        width="100%"
        height="100%"
        object-fit="cover"
        playing
        loop
        muted
      />
    </div>
  );
}
