import React from "react";
import styles from "./styles/Home.module.css";
import "../styles.css";
import { useNavigate } from "react-router-dom";

export default function Home(props) {
  let nav = useNavigate();
  let h = new Date().getHours();

  function start() {
    nav("/main");
    if (h == 3) {
      props.setAudioBackground(
        "https://omyraucy.alwaysdata.net/music/troopMenu.mp3"
      );
    } else {
      props.setAudioBackground(
        "https://omyraucy.alwaysdata.net/music/mainTheme.mp3"
      );
    }
  }

  function fileManager() {
    nav("/files");
  }

  return (
    <div className={styles.overlay}>
      <button className={styles.play} onClick={start}>
        Играть
      </button>
      <button onClick={fileManager}>Файловый менеджер</button>
    </div>
  );
}
