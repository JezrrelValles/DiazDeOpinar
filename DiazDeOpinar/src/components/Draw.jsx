import React from 'react';
import CanvasDraw from 'react-canvas-draw';

const DrawingInput = () => {
  return (
    <div className="p-4 m-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Dibuja tu propuesta</h2>
      <div className="overflow-hidden rounded-md border border-gray-300 max-w-full sm:max-w-md lg:max-w-lg xl:max-w-xl">
        <CanvasDraw
          className="w-full h-64 sm:h-48 lg:h-64 xl:h-80" // Ajusta las alturas para diferentes tamaños de pantalla
          canvasWidth={600}
          canvasHeight={300}
          loadTimeOffset={10}
        />
      </div>
    </div>
  );
};

export default DrawingInput;
