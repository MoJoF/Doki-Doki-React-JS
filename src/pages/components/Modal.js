import React from "react";
import styles from "../styles/WritePoem.module.css";

export default function Modal(props) {
  function closeModal() {
    props.setProgress(1);
  }

  return (
    <div className={styles.modal} onClick={closeModal}>
      <img className={styles.resultPic} src={props.resultPic} />
    </div>
  );
}
