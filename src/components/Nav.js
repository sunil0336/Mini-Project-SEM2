import React from 'react'
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <nav className="w-full bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-4 px-8 flex justify-between items-center shadow-md">
  <h1 className="text-3xl font-extrabold tracking-wide">Cosmic Tic Tac Toe</h1>
  <div className="flex gap-4">
    <Link
      to="/"
      className="px-4 py-2 text-white rounded-md bg-purple-500 hover:bg-purple-600 font-medium"
    >
      Game
    </Link>
    <Link
      to="/about"
      className="px-4 py-2 rounded-md hover:bg-purple-700 transition"
    >
      About
    </Link>
  </div>
</nav>

  )
}

export default Nav