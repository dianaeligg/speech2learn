import React from "react";
import BoxedWord from "../boxed-word";

type Props = {
  guessedWord: string;
  word: string;
};

const Word = ({ guessedWord, word }: Props) => {
  return (
    <>
      <BoxedWord guessable={true} guessedWord={guessedWord} word={word} />
    </>
  );
};

export default Word;
