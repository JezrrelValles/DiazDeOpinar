import React from 'react';
import { Link } from 'react-router-dom';


const Valid = () => {
  return (
    <div className="max-w-full mx-auto my-4 p-4 bg-white shadow-lg rounded-lg overflow-hidden sm:mx-4 md:mx-8 lg:mx-16 xl:mx-32 2xl:mx-48">
      <div className="flex flex-col items-center">
        <img src="./logo.png" alt="Foto" className="w-1/4 rounded-full mb-4" />
        <h1 className="text-2xl font-bold mb-4">Comparte tus datos para seguir en contacto y darle seguimiento a tu propuesta</h1>
        <h1 className="text-lg font-semibold mb-4">Completa el formulario con los datos correspondientes.</h1>
        <form className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-raisin-black text-xs font-bold mb-2" htmlFor="nombreCompleto">
                Nombre completo
              </label>
              <input className="appearance-none block w-full bg-gray-100 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="nombreCompleto" type="text" placeholder="Nombre completo" />
            </div>
            <div className="w-full px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-raisin-black text-xs font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input className="appearance-none block w-full bg-gray-100 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="email" type="email" placeholder="Email" />
            </div>
            <div className="w-full px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-raisin-black text-xs font-bold mb-2" htmlFor="telefono">
                Teléfono
              </label>
              <input className="appearance-none block w-full bg-gray-100 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="telefono" type="tel" placeholder="Teléfono" />
            </div>
            <div className="w-full px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-raisin-black text-xs font-bold mb-2" htmlFor="edad">
                Edad
              </label>
              <input className="appearance-none block w-full bg-gray-100 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="edad" type="number" placeholder="Edad" />
            </div>
            <div className="w-full px-3 mb-6 md:mb-0">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-gray-700">Acepto los términos y condiciones</span>
              </label>
            </div>
            <Link to="/">
                <button className="w-full my-4 bg-[#ff7800] hover:bg-[#222222] text-white font-bold text-lg sm:text-xl md:text-2xl py-2 px-4 rounded-lg" type="button">
                    Enviar
                </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Valid;
