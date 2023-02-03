import React, { useEffect } from "react";
import styles from "../styles/FileManager.module.css";

export default function Dirs(props) {
  let arr = props.files.default;

  useEffect(() => {
    if (props.currentDir === "default") {
      arr = props.files.default;
    } else if (props.currentDir === "files") {
      arr = props.files.files;
    } else if (props.currentDir === "music") {
      arr = props.files.music;
    } else if (props.currentDir === "images") {
      arr = props.files.images;
    } else if (props.currentDir === "monika") {
      arr = props.files.monika;
    }
  }, [props.currentDir]);

  function goTo(item) {
    if (item.type === "folder") {
      props.setCurrentDir(item.path);
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
