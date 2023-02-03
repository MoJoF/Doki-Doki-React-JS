import React from "react";
import styles from "../styles/FileManager.module.css";

export default function Dirs(props) {
  let arr = props.files.default;

  function goTo(item) {
    if (item.type === "folder") {
      props.setCurrentDir(item.path);
      console.log(props.currentDir);
    }
  }

  console.log(arr);

  return (
    <div className={styles.dirs}>
      {arr.map((item) => (
        <div className={styles.item} onClick={() => goTo(item)}>
          <img
            className={styles.itemIco}
            src={
              item.type === "folder"
                ? props.assets.folder
                : item.type === "musicFile"
                ? props.assets.musicFile
                : item.type === "textFile"
                ? props.assets.textFile
                : item.type === "imageFile"
                ? props.assets.imageFile
                : ""
            }
            alt=""
          />
          {item.title}
        </div>
      ))}
    </div>
  );
}
