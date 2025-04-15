import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="w-full bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-4 px-8 flex justify-between items-center shadow-md">
      <h1 className="text-3xl font-extrabold tracking-wide">Cosmic Tic Tac Toe</h1>
      <div className="flex gap-4">
      <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-2 rounded-md transition ${
              isActive
                ? 'bg-purple-600 text-white'
                : 'hover:bg-purple-700 text-white'
            }`
          }
        >
          Game
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `px-4 py-2 rounded-md transition ${
              isActive
                ? 'bg-purple-600 text-white'
                : 'hover:bg-purple-700 text-white'
            }`
          }
        >
          About
        </NavLink>
      </div>
    </nav>
  );
}

export default Nav;
