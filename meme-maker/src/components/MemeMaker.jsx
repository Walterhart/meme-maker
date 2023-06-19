"use client";
import styles from "../styles/page.module.css";
import { useEffect, useState } from "react";

const MemeMaker = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    image: "",
    imageName: "",
  });
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    getMemes();
  }, []);

  function getMeme() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const randomMeme = allMemes[randomNumber];

    setMeme((prevMeme) => ({
      ...prevMeme,
      image: randomMeme.url,
      imageName: randomMeme.name,
    }));
  }
  function handleOnChange(event) {
    const { value, name } = event.target;

    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }
  console.log(meme.topText, meme.bottomText);
  return (
    <div className="memeMaker">
      <div className={`${styles.form} wrapper`}>
        <input
          className={styles.formInput}
          id="formInput"
          name="topText"
          type="text"
          placeholder="Top text"
          value={meme.topText}
          onChange={handleOnChange}
        />
        <input
          className={styles.formInput}
          id="formInput"
          name="bottomText"
          type="text"
          placeholder="Bottom text"
          value={meme.botText}
          onChange={handleOnChange}
        />
        <button className={`${styles.formColumn} formButton`} onClick={getMeme}>
          {" "}
          Fetch a image
        </button>
      </div>
      <div className={styles.memeSection}>
        <img
          src={meme.image}
          alt={meme.imageName}
          className={styles.memeImage}
        />
        <h2 className={`${styles.memeText} ${styles.top}`}>{meme.topText}</h2>
        <h2 className={`${styles.memeText} ${styles.bottom}`}>
          {meme.bottomText}
        </h2>
      </div>
    </div>
  );
};

export default MemeMaker;
