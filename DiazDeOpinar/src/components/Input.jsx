import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img01 from "./logo.png"

const Input = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextButtonClick = () => {
    // Aquí puedes implementar la lógica para manejar el siguiente paso
    console.log("Seleccionaste:", selectedOption);
  };

  return (
    <div className="max-w-full mx-auto my-4 p-4 bg-white shadow-lg rounded-lg overflow-hidden sm:mx-4 md:mx-8 lg:mx-16 xl:mx-32 2xl:mx-48">
      <div className="flex flex-col items-center">
        <img src={img01} alt="Foto" className="w-1/4 rounded-full mb-4" />
        <h1 className="text-2xl font-bold mb-4">Graba, escribe o dibuja lo que tu crees que hace falta para que Parral sea la capital del mundo.</h1>
        <div className="flex flex-col space-y-4">
          <button className={`px-4 py-2 rounded-lg border ${selectedOption === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleOptionSelect(1)}>Agregar video</button>
          <button className={`px-4 py-2 rounded-lg border ${selectedOption === 2 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleOptionSelect(2)}>Agregar audio</button>
          <button className={`px-4 py-2 rounded-lg border ${selectedOption === 3 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleOptionSelect(3)}>Agregar imagen</button>
          <button className={`px-4 py-2 rounded-lg border ${selectedOption === 4 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleOptionSelect(4)}>Agregar texto</button>
          <button className={`px-4 py-2 rounded-lg border ${selectedOption === 5 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleOptionSelect(5)}>Agregar archivo</button>
          <button className={`px-4 py-2 rounded-lg border ${selectedOption === 6 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleOptionSelect(6)}>Agregar dibujo</button>
        </div>
        <Link to="/validate">
            <button className="w-full bg-[#ef8017] hover:bg-[#222222] text-white font-bold text-lg sm:text-xl md:text-2xl py-4 px-4 rounded-lg" onClick={handleNextButtonClick}>
                Siguiente
            </button>
        </Link>
      </div>
    </div>
  );
};

export default Input;
