import { IconType } from "react-icons";

interface PositiveCardProps {
  title: string;
  desc: string;
  icon: IconType;

  className?: string;
}

const PositiveCard: React.FC<PositiveCardProps> = ({
  title,
  desc,
  icon: Icon,
  className = "",
}) => {
  return (
    <div
      className={`min-h-[230px] text-center max-w-[290px] flex flex-col items-center justify-around p-4 ${className}`}
    >
      <div className="relative rounded-md">
        <span className="text-5xl audio-displayer text-white rounded-full flex w-24 h-24 items-center justify-center">
          <Icon />
        </span>
      </div>
      <h4 className="text-base pt-4" style={{ color: "#29293a" }}>
        {title}
      </h4>
      <p className="text-music-title text-xs leading-5 pt-4">{desc}</p>
    </div>
  );
};

export default PositiveCard;
