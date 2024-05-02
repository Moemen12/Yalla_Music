import HeaderLinks from "../../components/general/HeaderLinks";
import Navbar from "../../components/general/Navbar";
import NavigateBtn from "../../components/buttons/NavigateBtn";

interface HeaderProps {
  content: string;
  className?: string;
  isButtonVisible: boolean;
}

const Header: React.FC<HeaderProps> = ({
  content,
  className = "",
  isButtonVisible = false,
}) => {
  return (
    <header
      className={`bg-header-image bg-center bg-cover h-screen sm:h-[650px] bg-no-repeat ${className}`}
    >
      <Navbar />

      <div className="w-[90%] mx-auto flex gap-16">
        <HeaderLinks className="hidden sm:flex" />

        <div className="mt-56">
          <p className="text-white text-xl sm:text-5xl w-11/12">
            {content ? content : null}
          </p>
          {isButtonVisible && <NavigateBtn text="learn more" />}
        </div>
      </div>
      <HeaderLinks className="flex !flex-row sm:hidden items-center justify-center" />
    </header>
  );
};

export default Header;
