export default function GameOver({ winner }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner && <p>You won, {winner}</p>}
      {!winner && <p>It's draw</p>}
      <p>
        <button>Restart</button>
      </p>
    </div>
  );
}
