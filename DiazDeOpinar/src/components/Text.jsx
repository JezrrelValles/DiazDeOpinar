import React from 'react';

const Text = () => {
  return (
    <div className="p-4 m-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Escribe tu propuesta</h2>
      <textarea
        rows="6"
        cols="50"
        placeholder="Escribe tu texto aquí..."
        className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-auto"
        // Aquí he añadido w-full para que ocupe todo el ancho del contenedor
        // y sm:w-auto para que tenga un ancho automático en pantallas pequeñas
      ></textarea>
    </div>
  );
};

export default Text;
