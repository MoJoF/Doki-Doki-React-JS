import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/Main";
import Novel from "./pages/Novel";
import WritePoem from "./pages/WritePoem";
import FileManager from "./pages/FileManager";

export default function Routing(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home setAudioBackground={props.setAudioBackground} />}
        />
        <Route
          path="/main"
          element={<Main setAudioBackground={props.setAudioBackground} />}
        />
        <Route
          path="/novel"
          element={
            <Novel
              setAudioBackground={props.setAudioBackground}
              story={props.story}
            />
          }
        />
        <Route
          path="/write_poem"
          element={<WritePoem setAudioBackground={props.setAudioBackground} />}
        />
        <Route
          path="/files"
          element={
            <FileManager setAudioBackground={props.setAudioBackground} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
