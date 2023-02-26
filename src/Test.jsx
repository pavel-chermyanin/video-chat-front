import React, { useRef, useEffect } from "react";

const Video = () => {
  const myVideo = useRef(null);
  const streamRef = useRef(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        streamRef.current = stream;
        if (myVideo.current) {
          myVideo.current.srcObject = streamRef.current;
        }
      });
  }, []);

  return (
    <video
      ref={myVideo}
      autoPlay
      playsInline
    />
  );
};

export default Video;
