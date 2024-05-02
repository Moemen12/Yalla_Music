import React from "react";

interface NavigateBtnProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

const NavigateBtn: React.FC<NavigateBtnProps> = ({
  text,
  className = "",
  style,
}) => {
  return (
    <button
      className={`text-white w-max audio-displayer text-base capitalize sm:text-xl px-6 py-2 sm:py-2 mt-8 sm:px-12 rounded-3xl btn border-0 hover:audio-displayer ${className}`}
      style={style}
    >
      {text}
    </button>
  );
};

export default NavigateBtn;
