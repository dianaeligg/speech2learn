import React, { useEffect, useState } from "react";
import API, { WordResponse } from "../../utils/API";
import BoxedWord from "../../components/boxed-word";
import Button from "../../components/button";
import Word from "../../components/word";

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

  const handleUndo = () => {
    console.log(currentGuess.substr(0, currentGuess.length - 1));
    setCurrentGuess(currentGuess.substr(0, currentGuess.length - 1));
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
      <Button onClick={handleUndo} text="Undo" />
    </>
  );
};

export default Game;
