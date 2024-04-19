import React, { useRef, useState } from "react";

function SelfieComponent() {
  const videoRef = useRef(null);
  const [photo, setPhoto] = useState("");
  const [stream, setStream] = useState(null);

  const startCamera = async () => {
    try {
      const videoStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      setStream(videoStream);
      if (videoRef.current) videoRef.current.srcObject = videoStream;
    } catch (error) {
      console.error("Error accessing the camera:", error);
    }
  };

  const takePhoto = () => {
    const width = videoRef.current.videoWidth;
    const height = videoRef.current.videoHeight;
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d");
    context.drawImage(videoRef.current, 0, 0, width, height);
    const imageDataUrl = canvas.toDataURL("image/png");
    setPhoto(imageDataUrl);

    // Stop all video streams
    stream.getTracks().forEach((track) => track.stop());
    setStream(null);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-4">
      {!photo ? (
        <div className="w-full max-w-xs">
          <video
            ref={videoRef}
            className="w-full h-auto border rounded"
            autoPlay
            playsInline
          />
          <button
            onClick={startCamera}
            className="font-sans px-4 py-2 mt-2 text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            Selfie time!
          </button>
        </div>
      ) : (
        <div className="w-full max-w-xs">
          <img src={photo} alt="Selfie" className="border rounded" />
        </div>
      )}

      {stream && (
        <button
          onClick={takePhoto}
          className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-700"
        >
          Take Photo
        </button>
      )}

      {photo && (
        <button
          onClick={() => setPhoto("")}
          className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700"
        >
          Take Another
        </button>
      )}
    </div>
  );
}

export default SelfieComponent;
