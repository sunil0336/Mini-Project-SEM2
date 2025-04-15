import React from "react";
import Nav from "../components/Nav";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white pb-2 pt-20">
      <Nav />
      <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg p-8 mt-2 ">
        <h1 className="text-3xl font-bold mb-4">About the Min-Max Algorithm</h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">What is the Min-Max Algorithm?</h2>
          <p>
            The Min-Max algorithm is a decision-making algorithm commonly used in
            two-player turn-based games like Tic Tac Toe, Chess, and Checkers. It
            helps the AI determine the optimal move by exploring all possible game
            states that could result from each available move.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">How it Works</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>The algorithm simulates each possible move the AI can make.</li>
            <li>For each move, it then simulates all possible responses by the opponent.</li>
            <li>This process continues until it reaches a terminal state (win, loss, or draw).</li>
            <li>
              Terminal states are assigned values: positive for AI wins, negative for opponent wins,
              and zero for draws.
            </li>
            <li>
              The algorithm works backward from these terminal states, choosing the maximum value when it's the AI's turn
              and the minimum value when it's the opponent's turn.
            </li>
            <li>The AI selects the move that leads to the highest value.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Min-Max in Tic Tac Toe</h2>
          <p>
            In Tic Tac Toe, the Min-Max algorithm can explore the entire game tree because the game has a relatively
            small number of possible states. This means the AI can play perfectly, always resulting in a win or a draw.
          </p>
          <p className="mt-2">
            The implementation in this game includes:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>A function to evaluate the board state (win, loss, or draw)</li>
            <li>A recursive function that alternates between maximizing and minimizing players</li>
            <li>A scoring system that favors quicker wins and longer losses</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Optimizations</h2>
          <p>
            While our implementation is straightforward, the Min-Max algorithm can be optimized with techniques like
            Alpha-Beta pruning, which reduces the number of nodes evaluated by eliminating branches that won't affect
            the final decision.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
