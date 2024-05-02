interface SubmitBtnProps {
  text: string;
  textLoading: string;
  loading: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const SubmitBtn: React.FC<SubmitBtnProps> = ({
  text,
  textLoading,
  className = "",
  style,
  loading = false,
}) => {
  return (
    <button
      disabled={loading}
      className={`text-white w-max submit_btn audio-displayer text-base capitalize px-6 py-2 sm:py-2 sm:px-4 btn border-0 hover:audio-displayer ${className}`}
      style={style}
    >
      {loading ? textLoading : text}
    </button>
  );
};

export default SubmitBtn;
