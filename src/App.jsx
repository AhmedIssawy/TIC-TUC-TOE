import React, { useState, useEffect } from "react";
import Player from "./components/Player";
import Header from "./components/Header";
import GameBoard from "./components/GameBourd";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning_cominations";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayerSymbol, setActivePlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  function checkForWinner(turns) {
    for (const player of ["X", "O"]) {
      const playerMoves = turns.filter((turn) => turn.player === player);
      for (const combo of WINNING_COMBINATIONS) {
        const wins = combo.every((cell) =>
          playerMoves.some(
            (move) =>
              move.square.row === cell.row && move.square.col === cell.column
          )
        );
        if (wins) {
          return player;
        }
      }
    }
    return null;
  }

  useEffect(() => {
    if (gameTurns.length >= 5) {
      const winningPlayer = checkForWinner(gameTurns);
      if (winningPlayer) {
        setWinner(winningPlayer);
      } else if (gameTurns.length === 9) {
        setWinner("draw");
      }
    }
  }, [gameTurns]);

  function changeActivePlayer(rowIndex, colIndex) {
    if (winner) return;

    const currentPlayer = gameTurns.length % 2 === 0 ? "X" : "O";

    setActivePlayer(currentPlayer === "X" ? "O" : "X");

    setGameTurns((prevTurns) => [
      { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
      ...prevTurns,
    ]);
  }

  function restartGame() {
    setGameTurns([]);
    setWinner(null);
    setActivePlayer("X");
  }

  return (
    <main>
      <Header />
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            playerName="player 1"
            playerSympol="X"
            isActive={activePlayerSymbol === "X"}
          />
          <Player
            playerName="player 2"
            playerSympol="O"
            isActive={activePlayerSymbol === "O"}
          />
        </ol>
        <GameBoard onSelect={changeActivePlayer} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
      {winner && (
        <div id="game-over">
          <h2>{winner === "draw" ? "It's a Draw!" : "Game Over"}</h2>
          {winner !== "draw" && (
            <p>{winner === "X" ? "Player 1 wins!" : "Player 2 wins!"}</p>
          )}
          <button onClick={restartGame}>Restart Game</button>
        </div>
      )}
    </main>
  );
}

export default App;
