import React from "react";
import Letter from "../letter";
import "./scrambled-word.scss";

type Props = {
  word: string;
};

const ScrambledWord = ({ word }: Props) => {
  return (
    <div className="scrambled_word">
      {word.split("").map((letter: string) => (
        <Letter letter={letter} />
      ))}
    </div>
  );
};

export default ScrambledWord;
