import React, { useState } from "react";
import Scoreboard from "./Components/Scoreboard";

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [score, setScore] = useState({ X: 0, O: 0, draw: 0 });

  const checkWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const isDraw = (squares) => {
    return squares.every((cell) => cell !== null) && !checkWinner(squares);
  };

  const handleClick = (index) => {
    if (board[index] || checkWinner(board) || isDraw(board)) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const winner = checkWinner(newBoard);
    if (winner) {
      setScore((prevScore) => ({ ...prevScore, [winner]: prevScore[winner] + 1 }));
    } else if (isDraw(newBoard)) {
      setScore((prevScore) => ({ ...prevScore, draw: prevScore.draw + 1 }));
    }
  };

  const handleRestart = () => {
    setBoard(Array(9).fill(null));
  };

  const handleResetScores = () => {
    setScore({ X: 0, O: 0, draw: 0 });
    handleRestart();
  };

  const winner = checkWinner(board);
  const draw = isDraw(board);
  const status = winner
    ? `Winner: ${winner}`
    : draw
    ? "It's a Draw!"
    : `Next Player: ${isXNext ? "X" : "O"}`;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">Tic-Tac-Toe</h1>
      <h2 className={`text-xl mb-4 ${draw ? "text-yellow-400" : winner ? "text-green-400" : ""}`}>
        {status}
      </h2>

      {/* Scoreboard Component */}
      <Scoreboard score={score} />

      {/* Game Board */}
      <div className="grid grid-cols-3 gap-2">
        {board.map((value, index) => (
          <button
            key={index}
            className="w-24 h-24 text-3xl font-bold flex items-center justify-center border border-gray-700 bg-gray-800 hover:bg-gray-700 transition-all duration-200"
            onClick={() => handleClick(index)}
          >
            {value}
          </button>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-6 flex space-x-4">
        <button
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-md transition-all duration-200"
          onClick={handleRestart}
        >
          Restart Game
        </button>
        <button
          className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-lg shadow-md transition-all duration-200"
          onClick={handleResetScores}
        >
          Reset Scores
        </button>
      </div>
    </div>
  );
};

export default App;
