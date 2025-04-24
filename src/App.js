
import React, { useEffect } from 'react';
import ImageCard from './ImageCard';

import Img1 from './img/rasm1.jpg';
import Img2 from './img/rasm2.jpg';
import Img3 from './img/rasm3.jpg';
import Img4 from './img/rasm4.jpg';
import Img5 from './img/rasm5.jpg';
import Img6 from './img/rasm6.jpg';
import Img7 from './img/rasm7.jpg';
import Img8 from './img/rasm8.jpg';
import Img9 from './img/rasm9.jpg';
import Img10 from './img/rasm10.jpg';

const images = [
  { src: Img1, description: "Городские отражения — дождливый вечер, отражения фонарей на мокром асфальте, тишина и уют." },
  { src: Img2, description: "Изумрудное озеро — кристально чистая вода, каскады водопадов, ароматы зелени и тишина леса." },
  { src: Img3, description: "Холодное величие океана — сумерки, штормовое море, запах соли, каменистый берег и ветер." },
  { src: Img4, description: "Вечернее небо над трассой — закат, огненные облака, мерцающие огни машин, спокойствие." },
  { src: Img5, description: "Ночная сакура в Токио — розовое цветение, аромат цветов, городская жизнь и ощущение волшебства." },
  { src: Img6, description: "Золотой рассвет — солнечные лучи в комнате, шелест занавесок, свежий утренний воздух и покой." },
  { src: Img7, description: "Зимний лес — искристый снег, тишина, хруст снега под ногами, заснеженные деревья и спокойствие." },
  { src: Img8, description: "Осенний парк — золотые листья, шорох под ногами, солнечные лучи сквозь кроны деревьев, уют." },
  { src: Img9, description: "Горное озеро — тишина, отражение неба в воде, величественные горы и прохладный горный воздух." },
  { src: Img10, description: "Ночной город — огни небоскребов, неоновые вывески, гул машин, ритм большого города и энергия." }
];




const App = () => {
  const playDescriptionByIndex = (index) => {
    if (index >= 0 && index < images.length) {
      const utterance = new SpeechSynthesisUtterance(images[index].description);
      utterance.lang = 'ru-RU';
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = parseInt(e.key);
      if (!isNaN(key) && key >= 1 && key <= images.length) {
        playDescriptionByIndex(key - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <main className="p-6 max-w-6xl mx-auto" role="main" aria-label="Tasvirlarni ovoz bilan tinglash sahifasi">
      <header>
        <h1 className="text-3xl font-bold text-center mb-6" tabIndex="0">
        Слушайте изображения со звуком
        </h1>
      </header>

      {/* 🖼️ Rasm kartalari */}
      <section  style={{display: "flex", flexWrap: "wrap", textAlign: "center", width: "100%", margin: "0 auto"}}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        aria-label="Tasvirlar bo‘limi"
      >
        {images.map((image, index) => (
          <ImageCard
            key={index}
            src={image.src}
            alt={image.alt}
            description={image.description}
          />
        ))}
      </section>
    </main>
  );
};

export default App;




