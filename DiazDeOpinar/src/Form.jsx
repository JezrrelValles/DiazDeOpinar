import React, { useState } from "react";
import {
  FaDroplet,
  FaLandmark,
  FaRoad,
  FaTree,
  FaShield,
  FaPlus,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import Checkbox from "./components/Checkbox";
import Footer from "./components/Footer";

function Form() {
  const [checkboxStates, setCheckboxStates] = useState({
    agua: false,
    economia: false,
    movilidad: false,
    parques: false,
    seguridad: false,
    otro: false,
  });

  const [otherText, setOtherText] = useState("");

  const handleCheckboxChange = (event, name) => {
    setCheckboxStates({
      ...checkboxStates,
      [name]: event.target.checked,
    });
  };

  const handleOtherTextChange = (event) => {
    setOtherText(event.target.value);
  };

  return (
    <>
      <div className="flex flex-col mb-16">
        <div className="max-w-full mx-auto my-4 p-4 bg-white shadow-lg rounded-lg overflow-hidden sm:mx-4 md:mx-8 lg:mx-16 xl:mx-32 2xl:mx-48">
          <div className="flex flex-col items-center">
            <img
              src="./logo.png"
              alt="Foto"
              className="w-1/4 rounded-full mb-4"
            />
            <h1 className="text-2xl font-semibold mb-4">
              ¿Cuál de estos temas es más importante para ti?
            </h1>
            <h1 className="text-lg font-bold mb-4">
              Selecciona las opciones que consideres más importantes
              en relación con los temas proporcionados a continuación. Recuerda
              que puedes elegir una o varias opciones según tu criterio.
            </h1>
          </div>
          <div className="mb-4">
            <div className="grid grid-cols-2 gap-4 m-4">
              <Checkbox
                color="text-raisin-black"
                icon={<FaDroplet size={24} />}
                title="Agua"
                checked={checkboxStates.agua}
                onChange={(e) => handleCheckboxChange(e, "agua")}
              />
              <Checkbox
                color="text-raisin-black"
                icon={<FaLandmark size={24} />}
                title="Economía"
                checked={checkboxStates.economia}
                onChange={(e) => handleCheckboxChange(e, "economia")}
              />
              <Checkbox
                color="text-raisin-black"
                icon={<FaRoad size={24} />}
                title="Movilidad"
                checked={checkboxStates.movilidad}
                onChange={(e) => handleCheckboxChange(e, "movilidad")}
              />
              <Checkbox
                color="text-raisin-black"
                icon={<FaTree size={24} />}
                title="Parques y espacios públicos"
                checked={checkboxStates.parques}
                onChange={(e) => handleCheckboxChange(e, "parques")}
              />
              <Checkbox
                color="text-raisin-black"
                icon={<FaShield size={24} />}
                title="Seguridad"
                checked={checkboxStates.seguridad}
                onChange={(e) => handleCheckboxChange(e, "seguridad")}
              />
              <Checkbox
                color="text-raisin-black"
                icon={<FaPlus size={24} />}
                title="Otro"
                checked={checkboxStates.otro}
                onChange={(e) => handleCheckboxChange(e, "otro")}
              />
            </div>
            {checkboxStates.otro && (
              <div className="m-4">
                <h1 className="text-xl font-bold mt-4">
                  Escribe otro tema que sea importante para ti
                </h1>
                <input
                  type="text"
                  value={otherText}
                  onChange={handleOtherTextChange}
                  placeholder="Por favor, especifique"
                  className="w-full my-4 p-2 border border-gray-300 rounded-lg"
                />
              </div>
            )}
          </div>
          <Link to="/proposal">
            <button className="w-full py-2 px-4 bg-[#ef8017] hover:bg-[#222222] text-white font-bold text-lg sm:text-xl md:text-2xl rounded-lg transition-colors duration-300">
              Continuar
            </button>
          </Link>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Form;
