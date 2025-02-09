import { useState } from "react";

export default function Player({
  playerName = "Player",
  playerSympol,
  isActive,
  ...props
}) {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(playerName);

  const handleEditButton = () => setEditing((editing) => !editing);
  let nameOfPlayer = <span className="player-name">{name}</span>;
  let buttonName = <button onClick={handleEditButton}>Edit</button>;
  let buttonNameWhileEditing = <button onClick={handleEditButton}>Save</button>;

  return (
    <>
      <li className={isActive && "active"}>
        <span className="player">
          {editing ? (
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          ) : (
            nameOfPlayer
          )}
          <span className="player-symbol">{playerSympol}</span>
          {editing ? buttonNameWhileEditing : buttonName}
        </span>
      </li>
    </>
  );
}
