import React from 'react';
import CanvasDraw from 'react-canvas-draw';

const DrawingInput = () => {
  return (
    <div className="p-4 m-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Dibuja tu propuesta</h2>
      <CanvasDraw
        className="border border-gray-300 rounded-md"
        canvasWidth={600}
        canvasHeight={300}
      />
    </div>
  );
};

export default DrawingInput;
