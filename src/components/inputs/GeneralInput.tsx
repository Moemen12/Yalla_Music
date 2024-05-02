import React, { useState, useEffect } from "react";
import { IconType } from "react-icons";

interface GeneralInputProps {
  type: string;
  name?: string;
  id?: string;
  defaultValue?: string;
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
  isInputControlled?: boolean;
  icon?: IconType;
  onchange?: () => void;
  onfocus?: () => void;
}

const GeneralInput: React.FC<GeneralInputProps> = ({
  className = "",
  type,
  name,
  placeholder,
  id: propId,
  defaultValue,
  style,
  onchange,
  onfocus,
  isInputControlled = false,
  icon: Icon,
}) => {
  const [id, setId] = useState<string>("");

  // Generate a unique ID if none is passed
  useEffect(() => {
    if (!propId) {
      const uniqueId = `input_${Math.random().toString(36).substring(7)}`;
      setId(uniqueId);
    }
  }, [propId]);

  return (
    <>
      <label className="input !bg-gray-200 focus:outline-0 input-bordered flex items-center gap-2">
        {Icon ? <Icon /> : null}
        <input
          placeholder={placeholder}
          style={style}
          className={`flex-grow ${className}`}
          type={type}
          name={name}
          id={propId || id}
          defaultValue={defaultValue}
          onChange={onchange}
          onFocus={onfocus}
        />
      </label>
    </>
  );
};

export default GeneralInput;
