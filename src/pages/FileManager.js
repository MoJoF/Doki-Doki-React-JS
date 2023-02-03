import React, { useState } from "react";
import styles from "./styles/FileManager.module.css";
import Dirs from "./components/Dirs.js";

export default function FileManager() {
  const assets = {
    folder:
      "https://i.ibb.co/tJ53fVN/folder-vector-icon-png-260858-removebg-preview.png",
    textFile:
      "https://i.ibb.co/VY4cKJP/document-extension-file-file-format-filename-text-txt-icon-20-removebg-preview.png",
    imageFile: "https://i.ibb.co/X8SMg0n/png-512-removebg-preview.png",
    musicFile: "https://i.ibb.co/KLQPhgb/28843.png"
  };

  let files = {
    default: [
      {
        type: "folder",
        title: "Музыка",
        path: "/music"
      },
      {
        type: "folder",
        title: "Файлы",
        path: "/files"
      },
      {
        type: "folder",
        title: "Изображения",
        path: "/images"
      },
      {
        type: "folder",
        title: "m$0n~Ik@",
        path: "/m$0n~Ik@"
      },
      {
        type: "textFile",
        title: "text.txt",
        preview: "ha ha ha"
      },
      {
        type: "musicFile",
        title: "mainMenu.mp3"
      },
      {
        type: "imageFile",
        title: "icon.png"
      }
    ],
    music: [
      {
        type: "folder",
        title: ".."
      },
      {
        type: "musicFile",
        title: "Main Menu.mp3"
      }
    ],
    files: [
      {
        type: "folder",
        title: ".."
      }
    ],
    images: [
      {
        type: "folder",
        title: ".."
      }
    ],
    monika: [
      {
        type: "folder",
        title: ".."
      }
    ]
  };

  const [currentDir, setCurrentDir] = useState("default");
  const [viewFile, setViewFile] = useState(null);

  return (
    <div className={styles.fileManager}>
      <div className={styles.panel}>
        <Dirs
          viewFile={viewFile}
          setViewFile={setViewFile}
          currentDir={currentDir}
          setCurrentDir={setCurrentDir}
          files={files}
          assets={assets}
        />
        {viewFile !== null ? <div className={styles.preview}></div> : ""}
      </div>
    </div>
  );
}
