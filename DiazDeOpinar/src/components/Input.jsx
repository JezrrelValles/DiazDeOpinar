import React, { useState } from 'react';
import { FaCamera, FaMicrophone, FaVideo, FaMessage, FaFile, FaPalette } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Video from './Video';
import Audio from './Audio';
import Image from './Image';
import Text from './Text';
import File from './File';
import Draw from './Draw';

const Input = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextButtonClick = () => {
    console.log("Seleccionaste:", selectedOption);
  };

  const renderInputComponent = () => {
    switch (selectedOption) {
      case 1:
        return <Video />;
      case 2:
        return <Audio />;
      case 3:
        return <Image />;
      case 4:
        return <Text />;
      case 5:
        return <File />;
      case 6:
        return <Draw />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col mb-16">
      <div className="max-w-full mx-auto my-4 p-4 bg-white shadow-lg rounded-lg overflow-hidden sm:mx-4 md:mx-8 lg:mx-16 xl:mx-32 2xl:mx-48">
        <div className="flex flex-col items-center">
          <img src="./logo.png" alt="Foto" className="w-1/4 rounded-full mb-4" />
          <h1 className="text-2xl font-bold mb-4">
            Graba, escribe o dibuja lo que tú crees que hace falta para que Parral sea la capital del mundo.
          </h1>
          <h1 className="text-lg font-semibold mb-4">
            Selecciona la opción que prefieres para dar tu propuesta.
          </h1>
          <div className="flex flex-wrap justify-center m-4 space-x-4">
            <button 
              className={`px-4 py-2 rounded-lg border ${selectedOption === 1 ? 'bg-safety-orange text-white' : 'bg-gray-200 text-gray-700'}`} 
              onClick={() => handleOptionSelect(1)}
            >
              <FaVideo size={24} />
            </button>
            <button 
              className={`px-4 py-2 rounded-lg border ${selectedOption === 2 ? 'bg-safety-orange text-white' : 'bg-gray-200 text-gray-700'}`} 
              onClick={() => handleOptionSelect(2)}
            >
              <FaMicrophone size={24} />
            </button>
            <button 
              className={`px-4 py-2 rounded-lg border ${selectedOption === 3 ? 'bg-safety-orange text-white' : 'bg-gray-200 text-gray-700'}`} 
              onClick={() => handleOptionSelect(3)}
            >
              <FaCamera size={24} />
            </button>
            <button 
              className={`px-4 py-2 rounded-lg border ${selectedOption === 4 ? 'bg-safety-orange text-white' : 'bg-gray-200 text-gray-700'}`} 
              onClick={() => handleOptionSelect(4)}
            >
              <FaMessage size={24} />
            </button>
            <button 
              className={`px-4 py-2 rounded-lg border ${selectedOption === 5 ? 'bg-safety-orange text-white' : 'bg-gray-200 text-gray-700'}`} 
              onClick={() => handleOptionSelect(5)}
            >
              <FaFile size={24} />
            </button>
            <button 
              className={`px-4 py-2 rounded-lg border ${selectedOption === 6 ? 'bg-safety-orange text-white' : 'bg-gray-200 text-gray-700'}`} 
              onClick={() => handleOptionSelect(6)}
            >
              <FaPalette size={24} />
            </button>
          </div>
          {renderInputComponent()}
          <Link to="/validate">
            <button 
              className="w-full my-4 bg-[#ff7800] hover:bg-[#222222] text-white font-bold text-lg sm:text-xl md:text-2xl py-2 px-4 rounded-lg transition-colors duration-300" 
              onClick={handleNextButtonClick}
            >
              Continuar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Input;
