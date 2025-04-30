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
        style={{width: "600px", height: "750px"}}
        className="w-full h-48 object-cover rounded-md cursor-pointer"
        onClick={playAudio}
      />
      <p className="mt-2 text-sm text-gray-700">{alt}</p>
      <div style={{width: "600px", display: "flex", flexWrap: "wrap"}} className="mt-2 flex gap-2">
        <button
        style={{backgroundColor: "blue", fontSize: "35px"}}
          onClick={playAudio}
          className="me-2 mb-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          🔊 Играть
        </button>
        <button
        style={{backgroundColor: "blue", fontSize: "35px"}}
          onClick={pauseAudio}
          className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
        >
          ⏸ Пауза
        </button>
        <button
        style={{backgroundColor: "blue", fontSize: "35px"}}
          onClick={resumeAudio}
          className="me-2 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
        >
          ▶️ Продол
        </button>
        <button
        style={{backgroundColor: "blue", fontSize: "35px"}}
          onClick={stopAudio}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          ⏹ Останав
        </button>
      </div>
    </div>
  );
};

export default ImageCard;
