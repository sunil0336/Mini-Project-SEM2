import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";

const emptyBoard = Array(9).fill(null);

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkWinner = (board) => {
  for (let combo of winningCombos) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return board.includes(null) ? null : "Draw";
};

const minMax = (board, isMaximizing, level, depth = 0) => {
  const winner = checkWinner(board);
  if (winner === "O") return { score: 10 - depth };
  if (winner === "X") return { score: depth - 10 };
  if (winner === "Draw") return { score: 0 };

  const moves = [];
  for (let i = 0; i < board.length; i++) {
    if (board[i] === null) {
      const newBoard = [...board];
      newBoard[i] = isMaximizing ? "O" : "X";
      const result = minMax(newBoard, !isMaximizing, level, depth + 1);
      moves.push({ index: i, score: result.score });
    }
  }

  if (level === "easy") {
    return moves[Math.floor(Math.random() * moves.length)];
  }

  let bestMove = null;
  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let move of moves) {
      if (move.score > bestScore) {
        bestScore = move.score;
        bestMove = move;
      }
    }
  } else {
    let bestScore = Infinity;
    for (let move of moves) {
      if (move.score < bestScore) {
        bestScore = move.score;
        bestMove = move;
      }
    }
  }
  return bestMove;
};

const Square = ({ value, onClick }) => {
  const getColor = () => {
    if (value === "X") return "text-pink-400";
    if (value === "O") return "text-blue-400";
    return "text-white";
  };

  return (
    <button
      className={`w-24 h-24 text-5xl font-extrabold flex items-center justify-center border border-purple-500 bg-gradient-to-br from-purple-900 to-indigo-900 shadow-inner hover:brightness-125 transition-all duration-200 ${getColor()}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

const Game = () => {
  const [board, setBoard] = useState(emptyBoard);
  const [isXTurn, setIsXTurn] = useState(true);
  const [mode, setMode] = useState("AI");
  const [level, setLevel] = useState("hard");
  const [xWins, setXWins] = useState(0);
  const [oWins, setOWins] = useState(0);
  const [lastWinner, setLastWinner] = useState(null);
  const [history, setHistory] = useState([]); // Store the last few winners

  const winner = checkWinner(board);

  useEffect(() => {
    if (winner === "X") {
      setXWins((prev) => prev + 1);
      setLastWinner("X");
      setHistory((prevHistory) => [winner, ...prevHistory].slice(0, 5)); // Keep the last 5 winners
    } else if (winner === "O") {
      setOWins((prev) => prev + 1);
      setLastWinner("O");
      setHistory((prevHistory) => [winner, ...prevHistory].slice(0, 5)); // Keep the last 5 winners
    } else if (winner === "Draw") {
      setLastWinner("Draw");
      setHistory((prevHistory) => ["Draw", ...prevHistory].slice(0, 5)); // Keep the last 5 results
    }
  }, [winner]);

  const handleClick = (i) => {
    if (board[i] || winner) return;

    const newBoard = [...board];
    newBoard[i] = isXTurn ? "X" : "O";
    setBoard(newBoard);
    setIsXTurn(!isXTurn);

    if (mode === "AI" && isXTurn) {
      setTimeout(() => {
        const aiMove = minMax(newBoard, true, level);
        if (aiMove && newBoard[aiMove.index] === null) {
          newBoard[aiMove.index] = "O";
          setBoard([...newBoard]);
          setIsXTurn(true);
        }
      }, 500);
    }
  };

  const resetGame = () => {
    setBoard(emptyBoard);
    setIsXTurn(true);
    setXWins(0);
    setOWins(0);
    setLastWinner(null);
    setHistory([]); // Reset the history
  };

  const newMatch = () => {
    setBoard(emptyBoard);
    setIsXTurn(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pb-10">
      <Nav />

      <div className="mt-10 bg-gradient-to-br from-purple-800 to-indigo-900 p-6 rounded-xl shadow-xl text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Select Game Mode</h2>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setMode("AI")}
            className={`px-6 py-2 rounded-full font-semibold transition ${mode === "AI" ? "bg-purple-500 text-white" : "bg-gray-700 text-gray-300"}`}
          >
            Play vs AI
          </button>
          <button
            onClick={() => setMode("2P")}
            className={`px-6 py-2 rounded-full font-semibold transition ${mode === "2P" ? "bg-purple-500 text-white" : "bg-gray-700 text-gray-300"}`}
          >
            Two Players
          </button>

          {mode === "AI" && (
            <>
              <button
                onClick={() => setLevel("easy")}
                className={`px-6 py-2 rounded-full font-semibold transition ${level === "easy" ? "bg-purple-500 text-white" : "bg-gray-700 text-gray-300"}`}
              >
                Easy
              </button>
              <button
                onClick={() => setLevel("hard")}
                className={`px-6 py-2 rounded-full font-semibold transition ${level === "hard" ? "bg-purple-500 text-white" : "bg-gray-700 text-gray-300"}`}
              >
                Hard
              </button>
            </>
          )}
        </div>
      </div>


      <div className="flex flex-col md:flex-row mt-8 gap-10 items-center justify-center">
        <div>
          <div className="text-2xl font-bold text-center mb-4">
            {winner ? (
              winner === "Draw" ? "It's a Draw" : `${winner} Wins!`
            ) : (
              <span>
                Next player: {isXTurn ? <span className="text-cyan-400">X 🔵</span> : <span className="text-pink-400">O 🔴</span>}
              </span>
            )}
          </div>

          <div className="grid grid-cols-3 gap-3">
            {board.map((value, i) => (
              <Square key={i} value={value} onClick={() => handleClick(i)} />
            ))}
          </div>

          <div className="flex gap-4 mt-6 justify-center">
            <button
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-red-600 hover:brightness-110 rounded-full font-semibold shadow-md"
              onClick={newMatch}
            >
              New Match
            </button>
            <button
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-700 hover:brightness-110 rounded-full font-semibold shadow-md"
              onClick={resetGame}
            >
              Reset
            </button>
          </div>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl shadow-lg text-white w-64">
          <h3 className="text-xl font-semibold mb-4 text-center">Game Stats</h3>
          <p className="text-lg mb-2">X Wins: <span className="text-pink-400 font-bold">{xWins}</span></p>
          <p className="text-lg mb-2">O Wins: <span className="text-blue-400 font-bold">{oWins}</span></p>
          <p className="text-lg mb-2">Last Winner: <span className="text-yellow-400 font-bold">{lastWinner}</span></p>
          <div className="mt-4">
            <h4 className="text-lg font-semibold">Recent Winners</h4>
            <ul className="text-sm">
              {history.map((item, index) => (
                <li key={index} className="text-gray-300">{index + 1}. {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
