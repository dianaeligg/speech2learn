import React, { useEffect, useState } from "react";
import API, { WordResponse } from "../../utils/API";
import Word from "../../components/word";
import ScrambledWord from "../../components/scrambled-word";

const Game = () => {
  const [word, setWord] = useState<string>("");

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const wordRes = await API.getNewWord();
    // console.log(wordRes.data);
    setWord(wordRes.data.word);
  };

  return (
    <>
      <Word word={word} />
      <ScrambledWord word={word} />
    </>
  );
};

export default Game;
