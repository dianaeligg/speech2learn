import React from "react";
import "./toast-like.scss";

type Props = {
  imageName: string;
};

const ToastLike = ({ imageName }: Props) => {
  return <img src={process.env.PUBLIC_URL + `/images/${imageName}`} />;
};

export default ToastLike;
