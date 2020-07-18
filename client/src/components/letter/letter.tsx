import React from "react";
import "./letter.scss";

type Props = {
  guessable?: boolean;
  guessed?: boolean;
  letter: string;
  onClick?: (letter: string) => void;
};

const Letter = ({
  guessable = false,
  guessed = true,
  letter,
  onClick = () => {},
}: Props) => {
  const onLetterClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    onClick(event.currentTarget.getAttribute("data-letter") as string);
  };
  return (
    <div data-letter={letter} className="letter" onClick={onLetterClick}>
      {guessed ? letter : "_"}
    </div>
  );
};

export default Letter;
