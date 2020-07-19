import React from "react";
import "./audio-button.scss";

type Props = {
  onClick: () => void;
};

const AudioButton = ({ onClick }: Props) => {
  return (
    <span onClick={onClick} className="material-icons audioButton">
      connect_without_contact
    </span>
  );
};

export default AudioButton;
