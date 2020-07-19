import React, { useCallback, useEffect, useState } from "react";
import API from "../../utils/API";
import { shuffleString, addLettersAndShuffle } from "../../utils/common";
import AudioButton from "../../components/audio-button";
import BoxedWord from "../../components/boxed-word";
import Button from "../../components/button";
import Word from "../../components/word";
import "./game.scss";
import ToastLike from "../../components/toast-like";

type scoreType = {
  right: number;
  wrong: number;
};

const INITIAL_SCORE = { right: 0, wrong: 0 };

const Game = () => {
  const [word, setWord] = useState<string>("");
  const [currentGuess, setCurrentGuess] = useState<string>("");
  const [won, setWon] = useState<boolean>(false);
  const [scrambledWord, setScrambledWord] = useState<string>("");
  const [score, setScore] = useState<scoreType>(INITIAL_SCORE);
  const [showCheckmark, setShowCheckmark] = useState<boolean>(false);

  const checkCompleteWord = useCallback(() => {
    setWon(false);
    if (currentGuess === word && word !== "") {
      setWon(true);
      setScore({ ...score, right: score.right + 1 });
      setTimeout(() => {
        setWon(false);
        init();
      }, 2000);
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
    setCurrentGuess("");
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

  const handleNewWord = () => {
    setScore({ ...score, wrong: score.wrong + 1 });
    init();
  };

  return (
    <>
      <div>
        {score.right} / {score.right + score.wrong}
      </div>
      {won && <ToastLike imageName={"checkmark.svg"} />}
      {won || (
        <>
          <AudioButton onClick={speakWord} />
          <Word word={word} guessedWord={currentGuess} />
          <BoxedWord
            guessable={false}
            onLetterClick={handleGuess}
            word={scrambledWord}
          />
          {showCheckmark && <ToastLike imageName={"checkmark.svg"} />}
          <div className="buttons">
            <Button onClick={handleNewWord} text="New Word" />
            <Button onClick={handleUndo} text="Undo" />
          </div>
        </>
      )}
    </>
  );
};

export default Game;
