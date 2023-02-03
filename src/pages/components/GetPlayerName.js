import React, { useRef } from "react";
import styles from "../styles/Main.module.css";
import { useNavigate } from "react-router-dom";

export default function GetPlayerName() {
  const playerName = useRef();
  let nav = useNavigate();

  function playGame() {
    let name = playerName.current.value;
    if (name.trim() === "") {
      alert("Введите, пожалуйста, имя.");
    } else {
      localStorage.setItem("playerName", name.trim());
      nav("/novel");
    }
  }

  return (
    <div className={styles.getName}>
      <input
        type="text"
        placeholder="Введите имя"
        ref={playerName}
        className={styles.playerName}
      />
      <input
        type="submit"
        value="Играть"
        onClick={playGame}
        className={styles.confirmName}
      />
    </div>
  );
}
