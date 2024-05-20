import React from 'react';

const Checkbox = ({ color, icon, title, checked, onChange }) => {
  return (
    <div className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md">
      <div className={color}>
        {icon}
      </div>
      <div className="ml-4 flex-grow text-lg font-semibold text-raisin-black">
        {title}
      </div>
      <div>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="h-5 w-5"
        />
      </div>
    </div>
  );
};

export default Checkbox;
