import React from 'react';

const ImageCard = ({ src, alt, description }) => {
  const utterance = new SpeechSynthesisUtterance(description);
  utterance.lang = 'ru-RU';

  const playAudio = () => {
    window.speechSynthesis.cancel(); // avvalgi ovozni to‘xtatish
    window.speechSynthesis.speak(utterance);
  };

  const pauseAudio = () => {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.pause();
    }
  };

  const resumeAudio = () => {
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }
  };

  const stopAudio = () => {
    window.speechSynthesis.cancel();
  };

  return (
    <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-white p-4">
      <img
        src={src}
        alt={alt}
        style={{width: "300px", height: "400px"}}
        className="w-full h-48 object-cover rounded-md cursor-pointer"
        onClick={playAudio}
      />
      <p className="mt-2 text-sm text-gray-700">{alt}</p>
      <div style={{width: "300px"}} className="mt-2 flex gap-2">
        <button
        style={{backgroundColor: "blue"}}
          onClick={playAudio}
          className="me-3 mb-3 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          🔊 O‘ynatish
        </button>
        <button
        style={{backgroundColor: "blue"}}
          onClick={pauseAudio}
          className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
        >
          ⏸ Pauza
        </button>
        <button
        style={{backgroundColor: "blue"}}
          onClick={resumeAudio}
          className="me-3 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
        >
          ▶️ Davom et
        </button>
        <button
        style={{backgroundColor: "blue"}}
          onClick={stopAudio}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          ⏹ To‘xtat
        </button>
      </div>
    </div>
  );
};

export default ImageCard;
