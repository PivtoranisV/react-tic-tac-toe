export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner && <p>You won, {winner}</p>}
      {!winner && <p>It's draw</p>}
      <p>
        <button onClick={onRestart}>Restart</button>
      </p>
    </div>
  );
}
