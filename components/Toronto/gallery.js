import React, { useState, useEffect } from "react";

const Gallery = () => {
  const filePaths = [
    "https://cloud-lnmgr594q-hack-club-bot.vercel.app/0img_5702.jpg",
    "https://cloud-lnmgr594q-hack-club-bot.vercel.app/1img_5705.jpg",
    "https://cloud-lnmgr594q-hack-club-bot.vercel.app/2img_5714.jpg",
    "https://cloud-lnmgr594q-hack-club-bot.vercel.app/3img_5715.jpg",
    "https://cloud-lnmgr594q-hack-club-bot.vercel.app/4img_5716.jpg",
    "https://cloud-lnmgr594q-hack-club-bot.vercel.app/5img_5717.jpg",
    "https://cloud-lnmgr594q-hack-club-bot.vercel.app/6img_5725.jpg",
    "https://cloud-lnmgr594q-hack-club-bot.vercel.app/7img_7017.jpg",
    "https://cloud-lnmgr594q-hack-club-bot.vercel.app/8img_7018.jpg",
    "https://cloud-lnmgr594q-hack-club-bot.vercel.app/9img_7019.jpg",
    "https://cloud-bt63rugd0-hack-club-bot.vercel.app/0img_7021.jpg",
    "https://cloud-bt63rugd0-hack-club-bot.vercel.app/1img_7030.jpg",
    "https://cloud-bt63rugd0-hack-club-bot.vercel.app/2img_7033.jpg",
    "https://cloud-bt63rugd0-hack-club-bot.vercel.app/3img_7034.jpg",
    "https://cloud-bt63rugd0-hack-club-bot.vercel.app/4img_7035.jpg",
    "https://cloud-bt63rugd0-hack-club-bot.vercel.app/5img_7040.jpg",
    "https://cloud-bt63rugd0-hack-club-bot.vercel.app/6img_7067.jpg",
    "https://cloud-bt63rugd0-hack-club-bot.vercel.app/7img_7068.jpg",
    "https://cloud-bt63rugd0-hack-club-bot.vercel.app/8img_7073.jpg",
    "https://cloud-bt63rugd0-hack-club-bot.vercel.app/9img_7074.jpg",
    "https://cloud-kqzaey1b6-hack-club-bot.vercel.app/0img_7075.jpg",
    "https://cloud-kqzaey1b6-hack-club-bot.vercel.app/1img_8682.jpg",
    "https://cloud-kqzaey1b6-hack-club-bot.vercel.app/2img_8683.jpg",
    "https://cloud-kqzaey1b6-hack-club-bot.vercel.app/3img_8684.jpg",
    "https://cloud-kqzaey1b6-hack-club-bot.vercel.app/4img_8685.jpg",
    "https://cloud-kqzaey1b6-hack-club-bot.vercel.app/5img_8686.jpg",
    "https://cloud-kqzaey1b6-hack-club-bot.vercel.app/6img_8687.jpg",
    "https://cloud-kqzaey1b6-hack-club-bot.vercel.app/7img_8688.jpg",
    "https://cloud-kqzaey1b6-hack-club-bot.vercel.app/8img_8690.jpg",
    "https://cloud-kqzaey1b6-hack-club-bot.vercel.app/9img_8692.jpg",
    "https://cloud-m2co5evms-hack-club-bot.vercel.app/0img_8688.jpg",
    "https://cloud-m2co5evms-hack-club-bot.vercel.app/1img_8690.jpg",
    "https://cloud-m2co5evms-hack-club-bot.vercel.app/2img_8692.jpg",
    "https://cloud-m2co5evms-hack-club-bot.vercel.app/3img_8693.jpg",
    "https://cloud-m2co5evms-hack-club-bot.vercel.app/4img_8697.jpg",
    "https://cloud-m2co5evms-hack-club-bot.vercel.app/5img_8698.jpg",
    "https://cloud-m2co5evms-hack-club-bot.vercel.app/6img_8702.jpg",
    "https://cloud-m2co5evms-hack-club-bot.vercel.app/7img_8703.jpg",
    "https://cloud-m2co5evms-hack-club-bot.vercel.app/8img_8704.jpg",
    "https://cloud-m2co5evms-hack-club-bot.vercel.app/9img_8705.jpg",
    "https://cloud-klumza2v1-hack-club-bot.vercel.app/0img_8712.jpg",
    "https://cloud-klumza2v1-hack-club-bot.vercel.app/1img_8714.jpg",
    "https://cloud-klumza2v1-hack-club-bot.vercel.app/2img_8716.jpg",
    "https://cloud-klumza2v1-hack-club-bot.vercel.app/3img_8717.jpg",
    "https://cloud-klumza2v1-hack-club-bot.vercel.app/4img_8718__1_.jpg",
    "https://cloud-klumza2v1-hack-club-bot.vercel.app/5img_8718_1_.jpg",
    "https://cloud-klumza2v1-hack-club-bot.vercel.app/6img_8718.jpg",
    "https://cloud-klumza2v1-hack-club-bot.vercel.app/7img_8719_1_.jpg",
    "https://cloud-klumza2v1-hack-club-bot.vercel.app/8img_8719.jpg",
    "https://cloud-klumza2v1-hack-club-bot.vercel.app/9img_8721.jpg",
  ];


  const [currentIndex, setCurrentIndex] = useState(0);

  const cycleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filePaths.length);
  };

  const cyclePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? filePaths.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(cycleNext, 3000);
    return () => clearInterval(interval);
  }, []);

  const getImageIndices = () => {
    const prev = (currentIndex - 1 + filePaths.length) % filePaths.length;
    const next = (currentIndex + 1) % filePaths.length;
    return { prev, current: currentIndex, next };
  };

  const renderFile = (file) => {
    const fileExtension = file.split(".").pop().toLowerCase();
    if (["jpg", "jpeg", "png", "gif"].includes(fileExtension)) {
      return (
        <img
          src={file}
          alt="Gallery Item"
          className="object-cover w-full h-full"
        />
      );
    } else if (["mp4", "mov"].includes(fileExtension)) {
      return (
        <video controls autoPlay muted className="object-cover w-full h-full">
          <source src={file} type={`video/${fileExtension}`} />
          Your browser does not support the video tag.
        </video>
      );
    } else {
      return <div>Unsupported file format: {fileExtension}</div>;
    }
  };

  const ImageCard = ({ file, size = "medium", additionalClasses = "" }) => {
    const sizeClasses = {
      small: "lg:w-[300px] lg:h-[200px]",
      medium: "lg:w-[600px] lg:h-[400px]",
      large: "lg:w-[800px] lg:h-[500px]"
    };

    return (
      <div 
        className={`
          bg-pink bg-cover bg-center transition-all duration-300 ease-in-out
          ${sizeClasses[size]} 
          ${additionalClasses}
        `}
      >
        <div className="h-full p-3">
          <div className="flex flex-col justify-center h-full p-2 bg-black/40">
            {renderFile(file)}
          </div>
        </div>
      </div>
    );
  };

  const { prev, current, next } = getImageIndices();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5 inter bg-black">
      <div className="flex items-center justify-center space-x-4">
        <ImageCard 
          file={filePaths[prev]} 
          size="small" 
          additionalClasses="opacity-50 hover:opacity-75"
        />
        <ImageCard 
          file={filePaths[current]} 
          size="large" 
          additionalClasses="border-4 border-white"
        />
        <ImageCard 
          file={filePaths[next]} 
          size="small" 
          additionalClasses="opacity-50 hover:opacity-75"
        />
      </div>
      
      <div className="flex mt-4 space-x-2">
        {filePaths.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`
              w-3 h-3 rounded-full transition-all duration-300
              ${index === current 
                ? 'bg-white scale-125' 
                : 'bg-gray-500 hover:bg-gray-300'
              }
            `}
          />
        ))}
      </div>
      
      <div className="mt-4 text-white retro">
        File {current + 1} of {filePaths.length}
      </div>
    </div>
  );
};

export default Gallery;
