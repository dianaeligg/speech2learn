import React from "react";

type Props = {
  word: string;
};

const Word = ({ word }: Props) => {
  return <div>{word}</div>;
};

export default Word;
