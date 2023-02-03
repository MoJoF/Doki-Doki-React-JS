import React from "react";
import styles from "../styles/Main.module.css";
import { useNavigate } from "react-router-dom";

export default function Aside(props) {
  let nav = useNavigate();
  let h = new Date().getHours();

  function checkName() {
    if (localStorage.getItem("playerName") !== null) {
      props.setAudioBackground(null);
      nav("/novel");
    } else {
      props.setNeedName(true);
    }
  }

  return (
    <>
      {!(h == 3) ? (
        <div className={styles.mainMenu}>
          <aside>
            <div className={styles.menu}>
              <img
                src="https://i.ibb.co/DbJP1mL/Doki-Doki-Literature-Club-Logo.png"
                className={styles.logo}
                alt=""
              />
              <button onClick={checkName} className={styles.newGame}>
                Новая игра
              </button>
              <button
                className={styles.enterCode}
                onClick={() => {
                  prompt("Введи код истории:");
                }}
              >
                Войти по коду
              </button>
              <button
                className={styles.writePoem}
                onClick={() => {
                  nav("/write_poem");
                  props.setAudioBackground(
                    "https://omyraucy.alwaysdata.net/music/write_poems.mp3"
                  );
                }}
              >
                Написать стихотворение
              </button>
            </div>
          </aside>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
