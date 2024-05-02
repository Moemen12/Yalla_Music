import {
  FaFacebookF,
  FaTwitter,
  FaFacebookMessenger,
  FaLinkedinIn,
  FaSnapchatGhost,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

interface HeaderLinksProps {
  className?: string;
}

const HeaderLinks: React.FC<HeaderLinksProps> = ({ className = "" }) => {
  return (
    <>
      <div
        className={`links flex-wrap text-xl gap-4 flex-col mt-36 items-center ${className}`}
      >
        <div className="relative inline-block transition-all duration-300 hover:scale-150 cursor-pointer">
          <div className="hover:bg-special-btn rounded-full p-2">
            <FaFacebookF title="Facebook" className="text-white" />
          </div>
        </div>

        <div className="relative inline-block transition-all duration-300 hover:scale-150 cursor-pointer">
          <div className="hover:bg-special-btn rounded-full p-2">
            <FaTwitter title="twitter" className="text-white" />
          </div>
        </div>

        <div className="relative inline-block transition-all duration-300 hover:scale-150 cursor-pointer">
          <div className="hover:bg-special-btn rounded-full p-2">
            <RiInstagramFill className="text-white" title="instagram" />
          </div>
        </div>

        <div className="relative inline-block transition-all duration-300 hover:scale-150 cursor-pointer">
          <div className="hover:bg-special-btn rounded-full p-2">
            <FaFacebookMessenger className="text-white" title="messenger" />
          </div>
        </div>

        <div className="relative inline-block transition-all duration-300 hover:scale-150 cursor-pointer">
          <div className="hover:bg-special-btn rounded-full p-2">
            <FaLinkedinIn className="text-white" title="linkedinIn" />
          </div>
        </div>

        <div className="relative inline-block transition-all duration-300 hover:scale-150 cursor-pointer">
          <div className="hover:bg-special-btn rounded-full p-2">
            <FaSnapchatGhost className="text-white" title="snapchat" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderLinks;
