import React, { useRef, useState, useEffect } from 'react';
import { FaCamera, FaPlay } from 'react-icons/fa6';

const Image = () => {
  const videoRef = useRef(null);
  const [mediaStream, setMediaStream] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        setMediaStream(stream);
        videoRef.current.srcObject = stream;
      } catch (error) {
        console.error('Error starting camera:', error);
      }
    };

    startCamera();

    return () => {
      // Cleanup function to stop media stream when component unmounts
      if (mediaStream) {
        mediaStream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const handleCaptureImage = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      canvas.getContext('2d').drawImage(videoRef.current, 0, 0);
      const imageUrl = canvas.toDataURL('image/png');
      setCapturedImage(imageUrl);
      // Stop video stream
      mediaStream.getTracks().forEach(track => track.stop());
      setMediaStream(null);
    }
  };

  return (
    <div className="p-4 m-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Captura tu propuesta</h2>
      {!mediaStream ? (
        <button
          className="bg-safety-orange text-white py-2 px-4 rounded-md mr-4 mb-4"
          onClick={handleCaptureImage}
          disabled={!capturedImage}
        >
          <FaPlay size={24}/>
        </button>
      ) : (
        <div className="mb-4">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="border border-gray-300 rounded-md mb-2"
          />
          <button
            className="bg-safety-orange text-white py-2 px-4 rounded-md mr-4"
            onClick={handleCaptureImage}
          >
            <FaCamera size={24} />
          </button>
        </div>
      )}
      {capturedImage && (
        <div>
          <h3 className="text-lg font-semibold mb-2">Imagen Capturada</h3>
          <img src={capturedImage} alt="Captured" className="border border-gray-300 rounded-md" />
        </div>
      )}
    </div>
  );
};

export default Image;
