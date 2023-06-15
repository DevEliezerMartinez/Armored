/* import React, { useEffect, useRef } from 'react';
import axios from 'axios';

const StreamingCamara = () => {
  const videoRef = useRef();

  useEffect(() => {
    const videoElement = videoRef.current;
    let source;

    const init = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoElement.srcObject = stream;
      source = new window.MediaSource();
      videoElement.src = window.URL.createObjectURL(source);

      source.addEventListener('sourceopen', sourceOpen);
    };

    const sourceOpen = () => {
      const mediaSource = source;
      const sourceBuffer = mediaSource.addSourceBuffer('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');

      const onData = async () => {
        try {
          const response = await axios.get('/streaming_camara', { responseType: 'arraybuffer' });
          const videoData = new Uint8Array(response.data);
          sourceBuffer.appendBuffer(videoData);
        } catch (error) {
          console.error('Error fetching video data:', error);
        }
      };

      setInterval(onData, 1000);
    };

    init();

    return () => {
      videoElement.srcObject.getTracks().forEach((track) => track.stop());
    };
  }, []);

  return (
    <div>
      <video ref={videoRef} autoPlay></video>
    </div>
  );
};

export default StreamingCamara;
 */

import React, { useEffect, useRef } from 'react';

const StreamingCamara = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const startVideoStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoElement.srcObject = stream;
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    startVideoStream();

    return () => {
      // Clean up the video stream when component unmounts
      const stream = videoElement.srcObject;
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div>
      <h1>Video Stream</h1>
      <video ref={videoRef} autoPlay></video>
    </div>
  );
};

export default StreamingCamara;
