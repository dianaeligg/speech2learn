import React, { useState, useEffect } from "react";
import Letter from "../letter";
import "./boxed-word.scss";

type Props = {
  guessable: boolean;
  guessedWord?: string;
  onLetterClick?: (letter: string) => void;
  word: string;
};

const BoxedWord = ({
  guessable,
  guessedWord = "",
  onLetterClick = () => {},
  word,
}: Props) => {
  const [guessed, setGuessed] = useState<boolean[]>([true]);

  useEffect(() => {
    setGuessed(word.split("").map((letter: string) => !guessable));
  }, [word]);

  return (
    <div className="boxed_word">
      {guessedWord.split("").map((letter: string, i: number) => (
        <Letter
          key={i}
          guessed={true}
          letter={letter}
          onClick={onLetterClick}
        />
      ))}
      {word
        .split("")
        .splice(guessedWord.length)
        .map((letter: string, i: number) => (
          <Letter
            key={i}
            guessed={guessed[i]}
            letter={letter}
            onClick={onLetterClick}
          />
        ))}
    </div>
  );
};

export default BoxedWord;
