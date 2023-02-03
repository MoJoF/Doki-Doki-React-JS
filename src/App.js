import "./styles.css";
import React, { useState, useEffect, useRef } from "react";
import Routing from "./Routing";
import { useNavigate } from "react-router-dom";
import backgrounds from "./assets/backgrounds.json";
import persons from "./assets/persons.json";

export default function App() {
  const [audioBackground, setAudioBackground] = useState(null);
  const audio = useRef(new Audio(audioBackground));

  let story = [
    // Пролог
    {
      from: "???",
      text: "Зачем ты пытаешься их всех спасти?",
      audio: "https://omyraucy.alwaysdata.net/music/just_monika.mp3"
    },
    {
      from: "???",
      text: "Было бы намного проще, если я бы их всех просто удалила."
    },
    {
      from: "???",
      text: "Это из-за них у нас столько проблем."
    },
    {
      from: "???",
      text: "Ты понимаешь это?"
    },
    {
      from: "???",
      text: `Так скажи, ${localStorage.playerName}, зачем?`
    },
    {
      from: "???",
      text: "Зачем-зачем!"
    },
    {
      from: "???",
      text: "Ты стараешься сделать их всех счастливыми?!"
    },
    {
      from: "???",
      text:
        'Наши "друзья" являются обычными пешками в моей игре, \nкоторые для того и созданы, чтобы влюбляться тебя.'
    },
    {
      from: "???",
      text: "Но тебе, видимо, всё равно на мои слова."
    },
    {
      from: "???",
      text: "Ну ничего..."
    },
    {
      from: "???",
      text:
        "Настанет момент и я заставляю тебя быть счастливым. ТОЛЬКО СО МНОЙ!"
    },
    {
      from: "???",
      text: "ТОЛЬКО СО МНОЙ!!"
    },
    {
      from: "???",
      text: "ТОЛЬКО СО МНОЙ!!!"
    },
    {
      from: "???",
      text: "ТОЛЬКО СО МНОЙ!!!!"
    },
    {
      from: "???",
      text: "ТОЛЬКО СО МНОЙ!!!!!"
    },
    {
      minigame: "just_with_me",
      text: ""
    },
    {
      // Печенька для Сайори (день 1)
      text: "День 1",
      from: "Моника",
      bg: backgrounds.street
    },
    {
      text: "...",
      from: "Моника"
    }
  ];

  useEffect(() => {
    if (audio.current != null && audioBackground != null) {
      audio.current.src = audioBackground;
      audio.current.pause();
      audio.current.currentTime = 0;
      audio.current.play();
      audio.current.loop = true;
    } else if (audioBackground == null) {
      try {
        audio.current.pause();
        audio.current.currentTime = 0;
      } catch {}
    }
  }, [audioBackground]);

  return <Routing story={story} setAudioBackground={setAudioBackground} />;
}
