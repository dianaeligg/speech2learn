import React from "react";
import "./letter.scss";

type Props = {
  letter: string;
};

const Letter = ({ letter }: Props) => {
  return (
    <div className="letter">
      <span>{letter}</span>
    </div>
  );
};

export default Letter;
