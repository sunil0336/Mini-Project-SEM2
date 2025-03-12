import React from "react";

const Scoreboard = ({ score }) => {
  return (
    <div className="flex space-x-6 mb-4 text-lg font-semibold">
      <span className="text-blue-400">X Wins: {score.X}</span>
      <span className="text-gray-400">Draws: {score.draw}</span>
      <span className="text-red-400">O Wins: {score.O}</span>
    </div>
  );
};

export default Scoreboard;
