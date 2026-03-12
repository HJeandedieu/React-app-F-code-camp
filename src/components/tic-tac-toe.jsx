import {useState} from "react"

export function Board() {
  const [cells, setCells] = useState(Array(9).fill(""));
  const [xIsNext, setXIsNext] = useState(true); // track turns
  const [winner, setWinner] = useState(null);   // track winner
  const [isDraw, setIsDraw] = useState(false);  // track draw

  const winningCombos = [
    [0,1,2], [3,4,5], [6,7,8], // rows
    [0,3,6], [1,4,7], [2,5,8], // columns
    [0,4,8], [2,4,6]           // diagonals
  ];

  function calculateWinner(board) {
    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]; // "X" or "O"
      }
    }
    return null;
  }

  function handleClick(index) {
    if (cells[index] !== "" || winner) return; // ignore if used or game over

    const newCells = [...cells];
    newCells[index] = xIsNext ? "X" : "O";

    setCells(newCells);

    const gameWinner = calculateWinner(newCells);
    if (gameWinner) {
      setWinner(gameWinner);
    } else if (newCells.every(cell => cell !== "")) {
      setIsDraw(true); // all filled, no winner
    }

    setXIsNext(prev => !prev); // alternate turns
  }

  function resetGame() {
    setCells(Array(9).fill(""));
    setXIsNext(true);
    setWinner(null);
    setIsDraw(false);
  }

  const statusMessage = winner
    ? `Winner: ${winner}`
    : isDraw
      ? "It's a draw!"
      : `Next Player: ${xIsNext ? "X" : "O"}`;

  return (
    <div className="tic-tac-toeContainer">
      <h2>Tic-Tac-Toe</h2>
      <p>{statusMessage}</p>
      <div 
        className="ticContainer"
        style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "5px" }}
      >
        {cells.map((val, i) => (
          <button
            key={i}
            className="square"
            onClick={() => handleClick(i)}
            style={{ height: "60px", fontSize: "24px", cursor: cells[i] || winner ? "not-allowed" : "pointer" }}
          >
            {val}
          </button>
        ))}
      </div>
      <button id="reset" onClick={resetGame} style={{ marginTop: "10px" }}>
        Reset
      </button>
    </div>
  );
}