import React from 'react';
import CanvasDraw from 'react-canvas-draw';

const DrawingInput = () => {
  // Calculamos el ancho del lienzo basado en el ancho de la ventana
  const canvasWidth = window.innerWidth * 0.8;
  // Fijamos una altura relativa para mantener la proporción
  const canvasHeight = canvasWidth * 0.5;

  return (
    <div className="p-4 m-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Dibuja tu propuesta</h2>
      <div style={{ maxWidth: '100%' }}>
        <CanvasDraw
          className="border border-gray-300 rounded-md"
          canvasWidth={canvasWidth}
          canvasHeight={canvasHeight}
          loadTimeOffset={10}
        />
      </div>
    </div>
  );
};

export default DrawingInput;
