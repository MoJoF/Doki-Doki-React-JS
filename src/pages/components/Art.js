import React from "react";
import styles from "../styles/Main.module.css";

export default function Art() {
  let h = new Date().getHours();
  return (
    <>
      {h == 3 ? (
        <img className={styles.artNight} src="https://i.yapx.ru/VcIUU.png" />
      ) : (
        <div className={styles.art}>
          <img
            src="https://i.ibb.co/NYys9Y3/Yuri-Illustration-removebg-preview.png"
            className={styles.yuri}
          />
          <img
            src="https://i.ibb.co/VNJqQkv/Natsuki-Illustration-removebg-preview.png"
            className={styles.natsuki}
          />
          <img
            src="https://i.ibb.co/VHj5Zp9/Sayori-Illustration-removebg-preview.png"
            className={styles.sayori}
          />
          <img
            src="https://i.ibb.co/cxXS43z/Monika-Illustration-removebg-preview.png"
            className={styles.monika}
          />
        </div>
      )}
    </>
  );
}
