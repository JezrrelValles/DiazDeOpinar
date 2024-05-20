import React from 'react';

const File = () => {
  return (
    <div className="p-4 m-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Sube tu propuesta</h2>
      <input
        className="border border-gray-300 rounded-md px-4 py-2"
        type="file"
      />
    </div>
  );
};

export default File;
