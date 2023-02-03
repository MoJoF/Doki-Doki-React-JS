import React, { useState, useRef } from "react";
import styles from "./styles/WritePoem.module.css";
import Modal from "./components/Modal";

export default function WritePoem() {
  const [progress, setProgress] = useState(1);
  const [balls, setBalls] = useState({
    sayori: 0,
    natsuki: 0,
    yuri: 0,
    monika: 0
  });
  const [resultPic, setResultPic] = useState("");
  const sayori = useRef();
  const natsuki = useRef();
  const yuri = useRef();
  const monika = useRef();

  let letters = {
    sayori: [
      "любовь",
      "музыка",
      "путешествие",
      "воспоминания",
      "грусть",
      "депрессия",
      "фейерверки",
      "роза",
      "экстраор-\nдинарный",
      "комфорт",
      "цветок",
      "безнадежный",
      "шарм",
      "одиночество",
      "надежда",
      "ленивый",
      "закат солнца",
      "ослепление",
      "мечтать",
      "отпуск",
      "красота",
      "петь",
      "цвет",
      "везучий",
      "волнение",
      "природа",
      "слезы",
      "уничтожение",
      "танец",
      "боль",
      "специальный",
      "каникулы",
      "молитва",
      "перо",
      "несчастье",
      "кровать",
      "страсть",
      "сердце",
      "друзья",
      "сокровище",
      "летающий",
      "чудесный",
      "улыбка",
      "смех",
      "искра",
      "стыд",
      "громкий",
      "тьма",
      "пустота",
      "драгоценный",
      "вместе",
      "страдание",
      "смерть",
      "романтика",
      "трагедия",
      "океан",
      "радуга",
      "шрамы",
      "ужас",
      "брак",
      "удиви-\nтельный",
      "спокойствие",
      "милая",
      "обещание",
      "счастье",
      "сломанный",
      "играть",
      "семья",
      "вечеринка",
      "печаль",
      "замечательный",
      "светлячки",
      "безответная",
      "веселье",
      "спокойный",
      "солнечный",
      "серые\nтучки",
      "тепло",
      "плач",
      "объятия",
      "неуклюжий",
      "прощение",
      "детство"
    ],
    natsuki: [
      "злость",
      "аниме",
      "одеяло",
      "жизнера-\nдостный",
      "пузыри",
      "кролик",
      "конфеты",
      "щеки",
      "шоколад",
      "облака",
      "милый",
      "доки доки",
      "игры",
      "хихиканье",
      "е-майл",
      "фантазия",
      "пушистый",
      "волос",
      "подпрыгивать",
      "наушники",
      "биение сердца",
      "прыжок",
      "нервный",
      "губная помада",
      "поцелуй",
      "китти",
      "леденец",
      "зефирка",
      "мелодия",
      "молоко",
      "мышь",
      "клев",
      "ночнушка",
      "папа",
      "идеальный",
      "мир",
      "розовый",
      "игровая площадка",
      "недовольство",
      "чистый",
      "щенок",
      "лента",
      "купальник",
      "блестящий",
      "покупка",
      "пропуск",
      "юбка",
      "носки",
      "спиннинг",
      "липкий",
      "клубника",
      "сахар",
      "лето",
      "вертеть",
      "водопад",
      "шорох",
      "свисток",
      "валентин",
      "ваниль"
    ],
    yuri: [
      "мучительный",
      "агония",
      "окружающий",
      "анализ",
      "исследо-\nвание",
      "тревога",
      "искупление",
      "аура",
      "дыхание",
      "клетка",
      "пленник",
      "кульминация",
      "заражение",
      "жажда",
      "малиновый",
      "желание",
      "судьба",
      "решимость",
      "смятение",
      "катастрофа",
      "дезориен-\nтация",
      "презирать",
      "отрекаться",
      "сон",
      "мечта",
      "лучезарный",
      "электричество",
      "энтропия",
      "сущность",
      "вечность",
      "взрыв",
      "экстрема-\nльный",
      "мучиться",
      "перемен-\nчивый",
      "избегать",
      "спасаться бегством",
      "пугающий",
      "кладбище",
      "послание \nс небес",
      "хоррор",
      "фантазия",
      "недееспособный",
      "верный",
      "непогре-\nшимый",
      "ад",
      "бесконечный",
      "в поле зрения",
      "интеллек-\nтуальный",
      "путешествие",
      "поездка",
      "решение",
      "приговор",
      "похоть",
      "пейзаж",
      "резня",
      "бойня",
      "скудный",
      "мизерный",
      "меланхолия",
      "философия",
      "удовольствие",
      "портрет",
      "вопрос",
      "капли дождя",
      "скрытный",
      "ощущение",
      "звездный\nпейзаж",
      "самоубийство",
      "стойкий",
      "время",
      "неконтро-\nлируемый",
      "сверхъестест-\nвенный",
      "бесконечный",
      "вселенная",
      "безудержный",
      "нестабильный",
      "несоответствие",
      "головок-\nружение",
      "яркий",
      "жизнеспо-\nсобность",
      "оживленный",
      "пылкий",
      "вихрь",
      "гнев"
    ],
    monika: [
      "свидетельство",
      "страсть",
      "надежда",
      "шпаклёвка",
      "избавление",
      "затмевать",
      "достоверность",
      "винил",
      "сочный",
      "обязанность",
      "преодолевать",
      "смелость",
      "безответный",
      "вместе",
      "обаяние",
      "природа",
      "вызов",
      "ранить",
      "безна-\nдёжный",
      "воспоминания",
      "несовершенный",
      "покупки",
      "зелёный",
      "шоколад",
      "мелодия",
      "бант",
      "офис",
      "юбка",
      "целостность",
      "решитель-\nность",
      "сущест-\nвование",
      "вольность",
      "лиственный",
      "забывать",
      "суждение",
      "клетка",
      "исчезать",
      "вечность",
      "вселенная",
      "нескончаемый",
      "капли",
      "жаждать",
      "несдержанный",
      "видимость",
      "искупление",
      "дышать",
      "пленник",
      "способность",
      "свобода",
      "выбор",
      "память",
      "изумруд-\nный",
      "участь",
      "персонаж",
      "земля",
      "командир",
      "кофе",
      "одинокий",
      "запертый",
      "сохранение",
      "изоляция",
      "уединённый",
      "какофония",
      "выступать",
      "плоский",
      "спектакль",
      "сцена",
      "ошибочный"
    ]
  };

  function clicked(w) {
    if (letters.sayori.includes(w)) {
      setBalls((old) => {
        let a = { ...old };
        a.sayori += 1;
        return a;
      });
      sayori.current.classList.add(styles.active);
      setTimeout(() => sayori.current.classList.remove(styles.active), 1000);
    } else if (letters.natsuki.includes(w)) {
      setBalls((old) => {
        let a = { ...old };
        a.natsuki += 1;
        return a;
      });
      natsuki.current.classList.add(styles.active);
      setTimeout(() => natsuki.current.classList.remove(styles.active), 1000);
    } else if (letters.yuri.includes(w)) {
      setBalls((old) => {
        let a = { ...old };
        a.yuri += 1;
        return a;
      });
      yuri.current.classList.add(styles.active);
      setTimeout(() => yuri.current.classList.remove(styles.active), 1000);
    } else if (letters.monika.includes(w)) {
      setBalls((old) => {
        let a = { ...old };
        a.monika += 1;
        return a;
      });
      monika.current.classList.add(styles.active);
      setTimeout(() => monika.current.classList.remove(styles.active), 1000);
    }
    setProgress(progress + 1);

    if (balls.sayori >= 15) {
      setResultPic(
        "https://i.ibb.co/02TwBc3/56ad6026-12e9-48be-bdba-2e580b42c42e.jpg"
      );
    } else if (balls.natsuki >= 15) {
      setResultPic(
        "https://i.ibb.co/K5B8Kbq/fe3b79a6-cfb6-4ff3-a187-ac9075260944.jpg"
      );
    } else if (balls.yuri >= 15) {
      setResultPic(
        "https://i.ibb.co/PF05CVP/4d1c91de-e123-4e57-8000-cd6d0ff0c1a0.jpg"
      );
    } else if (balls.monika >= 15) {
      setResultPic(
        "https://i.ibb.co/Ctdkh7R/474483da-0803-4ec6-afcf-5c8565405907.jpg"
      );
    } else {
      setResultPic(
        "https://i.ibb.co/wwbqf7p/49670366-aab8-45bd-8bc8-28c2ec67bcf1.jpg"
      );
    }
  }

  function randomElement(arr) {
    let rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
  }

  function shuffleArray(arr) {
    arr.sort(() => Math.random() - 0.5);
  }

  function fill() {
    let wordsChange = [];

    for (let i = 0; i < 10; i++) {
      if (i + 1 <= 2) {
        wordsChange.push(randomElement(letters.sayori));
      } else if (i + 1 > 2 && i + 1 <= 4) {
        wordsChange.push(randomElement(letters.natsuki));
      } else if (i + 1 > 4 && i + 1 <= 6) {
        wordsChange.push(randomElement(letters.yuri));
      } else if (i + 1 > 6 && i + 1 <= 8) {
        wordsChange.push(randomElement(letters.monika));
      } else {
        let m = Math.random();
        if (m <= 0.25) {
          wordsChange.push(randomElement(letters.sayori));
        } else if (m > 0.25 && m <= 0.5) {
          wordsChange.push(randomElement(letters.natsuki));
        } else if (m > 0.5 && m <= 0.75) {
          wordsChange.push(randomElement(letters.yuri));
        } else if (m > 0.75 && m <= 1) {
          wordsChange.push(randomElement(letters.monika));
        }
      }
    }
    shuffleArray(wordsChange);

    return wordsChange.map((w, index) => (
      <span onClick={() => clicked(w)} key={index}>
        {w}
      </span>
    ));
  }

  return (
    <div className={styles.writePoem}>
      <h2 className={styles.progress}>{progress}/20</h2>
      <div className={styles.words}>{fill()}</div>
      <div className={styles.imgs}>
        <img
          src="https://i.ibb.co/yYYp1JJ/Sayori-Sticker-Distrait.png"
          className={styles.sayori}
          ref={sayori}
        />
        <img
          src="https://i.ibb.co/61zc3wR/N-sticker-1.png"
          className={styles.natsuki}
          ref={natsuki}
        />
        <img
          src="https://i.ibb.co/qNsNWM6/64c35302ddaed99f7f55b67ee6ba78a0-removebg-preview.png"
          className={styles.yuri}
          ref={yuri}
        />
        <img
          src="https://i.ibb.co/whbvXGW/3dc3d73f-53a8-4040-9bf7-619b66b0a738.png"
          className={styles.monika}
          ref={monika}
        />
      </div>
      {progress > 20 && (
        <Modal setProgress={setProgress} resultPic={resultPic} />
      )}
    </div>
  );
}
