import React, { useRef, useState } from 'react';
import { FaPlay, FaStop } from 'react-icons/fa6';

const Video = () => {
  const videoRef = useRef(null);
  const [mediaStream, setMediaStream] = useState(null);
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [videoURL, setVideoURL] = useState('');

  const handleStartRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      setMediaStream(stream);
      const recorder = new MediaRecorder(stream);
      setMediaRecorder(recorder);

      const chunks = [];
      recorder.ondataavailable = (e) => chunks.push(e.data);
      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'video/mp4' });
        const url = URL.createObjectURL(blob);
        setVideoURL(url);
      };

      recorder.start();
      setRecording(true);
    } catch (error) {
      console.error('Error starting video recording:', error);
    }
  };

  const handleStopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      mediaStream.getTracks().forEach(track => track.stop());
      setMediaStream(null);
      setRecording(false);
    }
  };

  return (
    <div className="p-4 m-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Graba tu propuesta</h2>
      <div className="flex items-center mb-4">
        {recording ? (
          <button
            className="bg-red-500 text-white py-2 px-4 rounded-md mr-4"
            onClick={handleStopRecording}
          >
            <FaStop size={24}/>
          </button>
        ) : (
          <button
            className="bg-safety-orange text-white py-2 px-4 rounded-md mr-4"
            onClick={handleStartRecording}
          >
            <FaPlay size={24} />
          </button>
        )}
        {videoURL && (
          <video
            ref={videoRef}
            controls
            src={videoURL}
            className="border border-gray-300 rounded-md"
          />
        )}
      </div>
    </div>
  );
};

export default Video;
