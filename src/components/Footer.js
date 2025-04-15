import React from 'react';

function Footer() {
  return (
    <footer className=" w-full bg-gradient-to-r from-indigo-800 to-purple-700 text-white py-4  shadow-inner">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Cosmic Tic Tac Toe. All rights reserved.
        </p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-300 transition"
          >
            GitHub
          </a>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
