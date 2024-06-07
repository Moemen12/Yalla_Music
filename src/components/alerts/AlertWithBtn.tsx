import { IconType } from "react-icons";

interface AlertWithBtnProps {
  icon: IconType;
  message: string;
  firstBtnOn: boolean;
  secondBtnOn: boolean;
  firstBtnContent: string;
  secondBtnContent: string;
  FirstBtnCLick: () => void;
  SecondBtnCLick: () => void;
}

const AlertWithBtn: React.FC<AlertWithBtnProps> = ({
  icon: Icon,
  message,
  firstBtnContent,
  secondBtnContent,
  firstBtnOn,
  secondBtnOn,
  FirstBtnCLick,
  SecondBtnCLick,
}) => {
  return (
    <div
      role="alert"
      className="alert bg-cancel-color text-white border-0 absolute max-w-[95%] top-2 sm:max-w-max z-50 left-1/2 transform -translate-x-1/2"
    >
      <div className="flex items-center gap-2">
        <Icon fontSize={"1.3rem"} />

        <span className="text-white">{message}</span>
      </div>
      <div className="space-x-2">
        {firstBtnOn && (
          <button
            className="btn btn-sm bg-card-color text-slate-200 border-0 hover:bg-card-color"
            onClick={FirstBtnCLick}
          >
            {firstBtnContent}
          </button>
        )}
        {secondBtnOn && (
          <button
            className="btn btn-sm audio-displayer border-0 text-white"
            onClick={SecondBtnCLick}
          >
            {secondBtnContent}
          </button>
        )}
      </div>
    </div>
  );
};

export default AlertWithBtn;
