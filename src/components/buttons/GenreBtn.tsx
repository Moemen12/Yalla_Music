import React from "react";
import { GenreBtnProps } from "../../types/interfaces/interface";

const GenreBtn: React.FC<GenreBtnProps> = ({ text, className = "", style }) => {
  return (
    <button
      className={`text-white border-special bg-main-back tracking-wide w-max capitalize text-xs px-4 rounded-3xl btn ${className}`}
      style={style}
    >
      {text}
    </button>
  );
};

export default GenreBtn;
