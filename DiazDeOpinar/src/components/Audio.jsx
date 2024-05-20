import React, { useRef, useState } from 'react';
import { FaPlay, FaStop } from 'react-icons/fa6';

const Audio = () => {
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioURL, setAudioURL] = useState('');

  const handleStartRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      setMediaRecorder(recorder);

      const chunks = [];
      recorder.ondataavailable = (e) => chunks.push(e.data);
      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/wav' });
        const url = URL.createObjectURL(blob);
        setAudioURL(url);
      };

      recorder.start();
      setRecording(true);
    } catch (error) {
      console.error('Error starting audio recording:', error);
    }
  };

  const handleStopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setRecording(false);
    }
  };

  return (
    <div className="p-4 m-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Cuenta tu respuesta</h2>
      <div className="mb-4">
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
            <FaPlay size={24}/>
          </button>
        )}
      </div>
      {audioURL && (
        <audio
          controls
          src={audioURL}
          className="border border-gray-300 rounded-md"
        />
      )}
    </div>
  );
};

export default Audio;
