import React, { useEffect, useState } from "react";
import API, { WordResponse } from "../../utils/API";
import Word from "../../components/word";
import BoxedWord from "../../components/boxed-word";

const Game = () => {
  const [word, setWord] = useState<string>("");
  const [currentGuess, setCurrentGuess] = useState<string>("");
  const [won, setWon] = useState<boolean>(false);

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    checkCompleteWord();
  }, [word, currentGuess]);

  const init = async () => {
    const wordRes = await API.getNewWord();
    setWord(wordRes.data.word);
  };

  const handleGuess = (guessedLetter: string) => {
    console.log(guessedLetter);
    setCurrentGuess(currentGuess + guessedLetter);
  };

  const checkCompleteWord = () => {
    setWon(false);
    if (currentGuess === word) {
      setWon(true);
    }
  };

  return (
    <>
      {won && <span>You Win!</span>}
      <Word word={word} guessedWord={currentGuess} />
      <BoxedWord guessable={false} word={word} onLetterClick={handleGuess} />
    </>
  );
};

export default Game;
