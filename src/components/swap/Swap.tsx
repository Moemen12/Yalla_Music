import React, { useState, useEffect } from "react";
import { IconType } from "react-icons";

interface SwapProps {
  iconOn: IconType;
  iconOff: IconType;
  onToggleOn: () => void;
  onToggleOff: () => void;
  default?: boolean;
  onIconSize?: string;
  offIconSize?: string;
  onIconColor?: string;
  offIconColor?: string;
  className?: string;
}

const Swap: React.FC<SwapProps> = ({
  iconOn: IconOn,
  iconOff: IconOff,
  onToggleOn,
  onToggleOff,
  default: defaultChecked = false,
  onIconSize = "24px",
  offIconSize = "24px",
  onIconColor = "black",
  offIconColor = "black",
  className = "",
}) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  useEffect(() => {
    setIsChecked(defaultChecked);
  }, [defaultChecked]);

  const generateRandomId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  const [inputId, setInputId] = useState(`input-${generateRandomId()}`);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      onToggleOn();
    } else {
      onToggleOff();
    }
  };

  return (
    <label className={`swap ${className}`}>
      <input
        type="checkbox"
        id={inputId}
        checked={isChecked}
        onChange={handleToggle}
      />

      {/* Display the icon based on the toggle state */}
      <span className={`swap-icon ${className}`}>
        {isChecked ? (
          <IconOn size={onIconSize} color={onIconColor} />
        ) : (
          <IconOff size={offIconSize} color={offIconColor} />
        )}
      </span>
    </label>
  );
};

export default Swap;
