import React, { useState, useEffect } from "react";
import Aside from "./components/Aside";
import Art from "./components/Art";
import GetPlayerName from "./components/GetPlayerName";
import styles from "./styles/Main.module.css";

export default function Main(props) {
  const [showMenu, setShowMenu] = useState(false); // Появление анимации меню после проигрывания заставки.
  const [needName, setNeedName] = useState(false); // Не нужно показывать панель для ввода имени пользователя

  useEffect(() => {
    setTimeout(() => {
      setShowMenu(true);
    }, 6500);
  });

  return (
    <main>
      {!showMenu ? (
        <div className={styles.screen}>
          <img
            src="https://i.ibb.co/8DG44CR/Logo-Salvato.webp"
            className={styles.salvato}
            alt=""
          />
        </div>
      ) : (
        <div className={styles.container}>
          <Aside
            setNeedName={setNeedName}
            setAudioBackground={props.setAudioBackground}
          />
          <Art />
          {needName ? <GetPlayerName /> : ""}
        </div>
      )}
    </main>
  );
}
