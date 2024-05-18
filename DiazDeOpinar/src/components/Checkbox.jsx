import React, { useState } from 'react';
import { FaDroplet, FaLandmark, FaRoad, FaTree, FaShield } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Checkbox = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [otherText, setOtherText] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    if (event.target.value !== 'Otro') {
      setOtherText('');
    }
  };

  const handleOtherTextChange = (event) => {
    setOtherText(event.target.value);
  };

  const getIcon = (option) => {
    switch (option) {
      case 'Agua':
        return <FaDroplet className="inline-block mr-2" />;
      case 'Economía':
        return <FaLandmark className="inline-block mr-2" />;
      case 'Movilidad':
        return <FaRoad className="inline-block mr-2" />;
      case 'Parques y espacios públicos':
        return <FaTree className="inline-block mr-2" />;
      case 'Seguridad':
        return <FaShield className="inline-block mr-2" />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-full mx-auto my-4 p-4 bg-white shadow-lg rounded-lg overflow-hidden sm:mx-4 md:mx-8 lg:mx-16 xl:mx-32 2xl:mx-48">
      <div className="flex flex-col items-center">
        <img src="./logo.png" alt="Foto" className="w-1/4 rounded-full mb-4" />
        <h1 className="text-2xl font-bold mb-4">¿Cuál de estos temas es más importante para ti?</h1>
      </div>
      <div className="mb-4">
        {['Agua', 'Economía', 'Movilidad', 'Parques y espacios públicos', 'Seguridad', 'Otro'].map((option) => (
          <label key={option} className="block mb-2">
            <input 
              type="checkbox" 
              value={option} 
              checked={selectedOption === option} 
              onChange={handleOptionChange} 
              className="mr-2"
            />
            {getIcon(option)}
            {option === 'Otro' ? 'Otro' : `${option.substring()}`}
          </label>
        ))}
        {selectedOption === 'Otro' && (
          <input 
            type="text" 
            value={otherText} 
            onChange={handleOtherTextChange} 
            className="mt-2 p-2 border border-gray-300 rounded w-full"
            placeholder="Especificar otro"
          />
        )}
      </div>
      <Link to="/proposal">
        <button className="w-full py-2 px-4 bg-[#ef8017] hover:bg-[#222222] text-white font-bold text-lg sm:text-xl md:text-2xl rounded-lg transition-colors duration-300">
            Siguiente
        </button>
      </Link>
    </div>
  );
};

export default Checkbox;
