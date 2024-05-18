import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Card = ({ image, buttonText }) => {
  return (
    <div className="max-w-full rounded overflow-hidden mx-auto sm:mx-4 md:mx-8 lg:mx-16 xl:mx-32 2xl:mx-48">
      <img src={image} alt="Card" className="block mx-auto w-full h-auto" />
      <div className="px-4 py-4 text-center sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <Link to="/form">
          <button className="w-full bg-[#ef8017] hover:bg-[#222222] text-white font-bold text-lg sm:text-xl md:text-2xl py-4 px-4 rounded-lg">
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
