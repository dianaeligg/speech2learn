import React, { useCallback, useEffect, useState } from "react";
import API from "../../utils/API";
import { shuffleString, addLettersAndShuffle } from "../../utils/common";
import AudioButton from "../../components/audio-button";
import BoxedWord from "../../components/boxed-word";
import Button from "../../components/button";
import Word from "../../components/word";

const Game = () => {
  const [word, setWord] = useState<string>("");
  const [currentGuess, setCurrentGuess] = useState<string>("");
  const [won, setWon] = useState<boolean>(false);
  const [scrambledWord, setScrambledWord] = useState<string>("");

  const checkCompleteWord = useCallback(() => {
    setWon(false);
    if (currentGuess === word) {
      setWon(true);
    }
  }, [currentGuess, word]);

  const speakWord = useCallback(() => {
    if (word) {
      var msg = new SpeechSynthesisUtterance(word);
      msg.lang = "en-US";
      const voices = window.speechSynthesis.getVoices();
      setTimeout(() => {
        // not sure why timeout or double voices is needed
        var voices = window.speechSynthesis.getVoices();
        msg.voice = voices[1];
        window.speechSynthesis.speak(msg);
      }, 1);
    }
  }, [word]);

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    checkCompleteWord();
  }, [checkCompleteWord, currentGuess, word]);

  useEffect(() => {
    speakWord();
  }, [speakWord, word]);

  const init = async () => {
    const wordRes = await API.getNewWord();
    setWord(wordRes.data.word);
    setScrambledWord(addLettersAndShuffle(wordRes.data.word, 12));
  };

  const handleGuess = (guessedLetter: string) => {
    setCurrentGuess(currentGuess + guessedLetter);
  };

  const handleUndo = () => {
    setCurrentGuess(currentGuess.substr(0, currentGuess.length - 1));
  };

  return (
    <>
      {won && <span>You Win!</span>}
      <AudioButton onClick={speakWord} />
      <Word word={word} guessedWord={currentGuess} />
      <BoxedWord
        guessable={false}
        onLetterClick={handleGuess}
        word={scrambledWord}
      />
      <Button onClick={handleUndo} text="Undo" />
    </>
  );
};

export default Game;
