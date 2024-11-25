import { useState } from 'react';

export default function Player({ initialName, symbol }) {
  const [name, setName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleClick() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input type="text" required value={name} onChange={handleChange} />
        ) : (
          <span className="player-name">{name}</span>
        )}
        <span className="player symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
