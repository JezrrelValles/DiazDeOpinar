import React from 'react';
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="h-16 w-full bg-[#ef8017] flex justify-center items-center fixed bottom-0">
      <div className="flex space-x-8 sm:space-x-12 md:space-x-16 lg:space-x-24">
        <a href="https://www.facebook.com/profile.php?id=100051961934290" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebook className="text-white text-2xl sm:text-3xl md:text-4xl hover:text-gray-800 transition-colors duration-300" />
        </a>
        <a href="https://www.instagram.com/hector_diaz_mx/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram className="text-white text-2xl sm:text-3xl md:text-4xl hover:text-gray-800 transition-colors duration-300" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaXTwitter className="text-white text-2xl sm:text-3xl md:text-4xl hover:text-gray-800 transition-colors duration-300" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
