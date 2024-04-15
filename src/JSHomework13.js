import { useState } from "react";
import React from "react";

// Tic-Tac-Toe game

function Square({ value, onSquareClick, isWinningSquare }) {
  return (
    <button
      className={"square" + (isWinningSquare ? " winning" : "")}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  const boardSize = 3;

  function handleClick(squareIndex) {
    if (calculateWinner(squares) || squares[squareIndex]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[squareIndex] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status =
      winner.winner !== "draw" ? "Winner: " + winner.winner : "It's a draw!";
    /* In JavaScript, the ? character is used
      in a ternary operator, which is a compact way of writing
       an if...else statement. If winner is not equal to "draw",
       then set status to "Winner: " + winner.
       Otherwise, set status to "It's a draw!".*/
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  const boardRows = [];
  for (let row = 0; row < boardSize; row++) {
    const squaresInRow = [];
    for (let col = 0; col < boardSize; col++) {
      const squareIndex = row * boardSize + col;
      const isWinningSquare =
        winner && winner.winningSquares.includes(squareIndex);
      squaresInRow.push(
        <Square
          key={squareIndex}
          value={squares[squareIndex]}
          onSquareClick={() => handleClick(squareIndex)}
          isWinningSquare={isWinningSquare}
        />
      );
    }
    boardRows.push(
      <div key={row} className="board-row">
        {squaresInRow}
      </div>
    );
  }

  return (
    <div>
      <div className="status">{status}</div>
      {boardRows}
    </div>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }
  const moves = history.map((squares, move) => {
    let description;
    if (move === currentMove) {
      description = "You are at move #" + move;
    } else if (move > 0) {
      const row = Math.floor(move / 3);
      const col = move % 3;
      description = `Go to move #${move}: ${row}, ${col}.`;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <p onClick={() => jumpTo(move)}>{description}</p>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <h4>Homework 13</h4>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
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

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], winningSquares: [a, b, c] }; // Corrected property name
    }
  }
  if (squares.every((square) => square != null)) {
    return { winner: "draw", winningSquares: [] };
  }
}
