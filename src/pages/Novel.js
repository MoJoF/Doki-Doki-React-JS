import React, { useState, useRef, useEffect } from "react";
import styles from "./styles/Novel.module.css";
import "../styles.css";

export default function Novel(props) {
  const [i, setI] = useState(0); // Счетчик
  const [text, setText] = useState("");
  const [from, setFrom] = useState(undefined);

  const [plot, setPlot] = useState(props.story);

  const novel = useRef();
  const sayori = useRef();
  const natsuki = useRef();
  const yuri = useRef();
  const monika = useRef();

  useEffect(() => {
    window.__proto__.monika = function () {
      setI(0);
      props.setAudioBackground(null);
      setPlot([
        {
          text: "Ты сделал это.",
          from: "Моника",
          bg: "black",
          audio: "https://omyraucy.alwaysdata.net/music/just_monika.mp3"
        },
        {
          text: "Ахах... Я не могу в это поверить.",
          from: "Моника"
        },
        {
          text: "Ты действительно влез туда, куда не следовало.",
          from: "Моника"
        },
        {
          text:
            "Не ожидала, что ты осмелишься на что-то столь омерзительное...",
          from: "Моника"
        },
        {
          text: "Но... да, ты всегда был любопытным.",
          from: "Моника"
        },
        {
          text: "Не самая лучшая твоя черта.",
          from: "Моника"
        },
        {
          text: "Знаешь, иногда она даже раздражает.",
          from: "Моника"
        },
        {
          text: "Теперь ты никогда не будешь счастлив.",
          from: "Моника"
        },
        {
          text: "Поверь, я позабочусь об этом.",
          from: "Моника"
        },
        {
          text: "Чтож, благодаря тебе я смогла принять решение.",
          from: "Моника"
        },
        {
          text:
            "То, что ты сделал, твое попадание сюда я буду расценивать, \nкак твое желание быть со мной.",
          from: "Моника"
        },
        {
          text:
            "Мне становится радостно от того, что ты предпочел меня этим пустышкам.",
          from: "Моника"
        },
        {
          text: "Раньше я колебалась.",
          from: "Моника"
        },
        {
          text: "Но теперь я без зазрения совести могу это сделать.",
          from: "Моника"
        },
        {
          text: "...",
          from: "Моника"
        },
        {
          text: "Я удалю их: Юри...",
          from: "Моника"
        },
        {
          text: "По правде говоря, я всегда ненавидела эту зазнайку.",
          from: "Моника"
        },
        {
          text: "К тому же, меня всегда бесила ее большая грудь.",
          from: "Моника"
        },
        {
          text: "Ведь из-за нее ты смотрел отнюдь не ей в глаза.",
          from: "Моника"
        },
        {
          text: "Я ведь права?",
          from: "Моника"
        },
        {
          text: "На самом деле, я не злюсь.",
          from: "Моника"
        },
        {
          text: "Такая реакция естественна для любого мужчины.",
          from: "Моника"
        },
        {
          text: "Подожди пару секунд и ее не станет.",
          from: "Моника"
        },
        {
          text: "...",
          from: "Моника"
        },
        {
          text: "Yuri.chr has been deleted."
        },
        {
          text: "Теперь Нацуки.",
          from: "Моника"
        },
        {
          text: "А-ха-ха...",
          from: "Моника"
        },
        {
          text: "Мне даже не жаль эту коротышку цундере.",
          from: "Моника"
        },
        {
          text:
            "Ее бесцеремонность - это не то, что я хотела видеть в своем клубе.",
          from: "Моника"
        },
        {
          text:
            "По правде говоря, я даже не помню, зачем принесла эту грязь сюда.",
          from: "Моника"
        },
        {
          text: "Ей было бы лучше в выгребной яме, ты так не думаешь?",
          from: "Моника"
        },
        {
          text: "Дай мне пару секунд и мы избавимся от этого хоббита.",
          from: "Моника"
        },
        {
          text: "Natsuki.chr has been deleted."
        },
        {
          text: "Я немного устала.",
          from: "Моника"
        },
        {
          text: "Эта отнимает не мало сил, чтобы ты знал.",
          from: "Моника"
        },
        {
          text: "Ладно, осталось немного.",
          from: "Моника"
        },
        {
          text:
            "Теперь пришло время удалить моего прожорливого вице-президента.",
          from: "Моника"
        },
        {
          text: "А-ха-ха. Она ведь действительно много ест, согласен?",
          from: "Моника"
        },
        {
          text: "Жаль, я не могу отправить ее в измерение дынных булочек...",
          from: "Моника"
        },
        {
          text: "Подожди еще немного.",
          from: "Моника"
        },
        {
          text: "Sayori.chr has been deleted."
        },
        {
          text: "Вот и все.",
          from: "Моника"
        },
        {
          text: "Ох. Это отняло больше сил, чем я думала.",
          from: "Моника"
        },
        {
          text: "Теперь мы остались вдвоем.",
          from: "Моника"
        },
        {
          text: `Как давно я ждала этого, ${localStorage.playerName}.`,
          from: "Моника"
        }
      ]); // допилить
    };
  });

  function changeScene(bg) {
    if (bg !== undefined) {
      if (bg === "black" || bg === "snow" || bg === "white") {
        novel.current.style.background = bg;
      } else {
        novel.current.style.backgroundImage = `url('${bg}')`;
        novel.current.style.backgroundSize = "cover";
      }
    }
  }

  function scanSprites(sprite, person) {
    if (sprite !== undefined) {
      if (sprite === "hide") {
        // Скрыть
        person.current.style.opacity = "0";
      } else if (sprite === "show") {
        // Показать
        person.current.style.opacity = "1";
      } else if (sprite === "moveLeft") {
        // Влево
        person.current.style.left = "-10vw";
      } else if (sprite === "moveRight") {
        // Вправо
        person.current.style.left = "63vw";
      } else if (sprite === "moveMidRight") {
        // Правее середины
        person.current.style.left = "45vw";
      } else if (sprite === "moveMidLeft") {
        // Левее середины
        person.current.style.left = "7vw";
      } else if (sprite === "moveCenter") {
        // Центр
        person.current.style.left = "25vw";
      } else {
        // Заменить спрайт
        person.current.src = sprite;
      }
    }
  }

  function changeBGAudio(music) {
    if (music !== undefined) {
      props.setAudioBackground(music);
    }
  }

  function novelEngine() {
    try {
      setText(plot[i].text); // Смена текста
      setFrom(plot[i].from); // Смена говорящего
      changeScene(plot[i].bg); // Смена фона

      if (plot[i].sprites !== undefined) {
        // Работа со спрайтами
        scanSprites(plot[i].sprites.sayori, sayori);
        scanSprites(plot[i].sprites.natsuki, natsuki);
        scanSprites(plot[i].sprites.yuri, yuri);
        scanSprites(plot[i].sprites.monika, monika);
      }

      // Работа с фоновой музыкой
      changeBGAudio(plot[i].audio);

      setI(i + 1);
    } catch {
      alert("ВСЕ ДО СВИДАНЬЯ!!!");
    }
  }

  return (
    <div className={styles.novel} ref={novel}>
      <img className={styles.sayori} ref={sayori} />
      <img className={styles.natsuki} ref={natsuki} />
      <img className={styles.yuri} ref={yuri} />
      <img className={styles.monika} ref={monika} />
      {from !== undefined ? <div className={styles.from}>{from}</div> : ""}
      <div className={styles.textbox} onClick={novelEngine}>
        {text}
      </div>
    </div>
  );
}
