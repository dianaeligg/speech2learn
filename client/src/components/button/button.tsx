import React from "react";
import "./button.scss";

type Props = {
  text: string;
  onClick: () => void;
};

const Button = ({ onClick, text }: Props) => {
  return (
    <div className="button" onClick={onClick}>
      {text}
    </div>
  );
};

export default Button;
