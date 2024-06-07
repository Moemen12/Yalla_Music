import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import HeaderLinks from "./HeaderLinks";
import NavigateBtn from "../buttons/NavigateBtn";

const Footer: React.FC = () => {
  return (
    <footer className="py-16 bg-main-back text-white">
      <div
        className="w-[90%] mx-auto space-y-12 sm:space-y-0 grid sm:gap-8 grid-cols-12
      "
      >
        <div className="col-span-12 sm:col-span-6 lg:col-span-3 space-y-4">
          <h1 className="text-special font-bold text-2xl sm:text-3xl font-mono">
            <span className="text-white">Yalla</span>Music
          </h1>
          <p>
            OnWave is one of the most popular radio stations broadcasting the
            best EDM & Rock tracks, shows, and performances worldwide. We were
            founded in 1999 to promote original Electronic, Jazz, and Rock
            music.
          </p>
        </div>

        <div className="col-span-12 sm:col-span-6 space-y-4 lg:col-span-3">
          <h2 className=" text-xl">contact information</h2>
          <div className="flex gap-2">
            <FaLocationDot color="#D41159" />
            <li className="list-none">
              2130 Fulton Street, <br />
              San Diego, CA 94117-1080 USA
            </li>
          </div>

          <div className="flex gap-2">
            <FaPhoneAlt color="#D41159" />
            <li className="list-none">
              1-800-123-456 <br />
              1-800-123-456
            </li>
          </div>

          <div className="flex gap-2 items-center">
            <IoMdMail color="#D41159" />
            <a href="mailto:info@demolink.org">info@demolink.org</a>
          </div>

          <HeaderLinks className="!mt-0 space-y-4" />
        </div>

        <div className="col-span-12 sm:col-span-6 space-y-4 lg:col-span-3">
          <h2 className=" text-xl">Gallery</h2>
          <div className="grid grid-cols-3 w-max">
            <img
              className="w-[70px] h-[70] grid-cols-1"
              src="/assets/images/galleries/gallery1.jpg"
              alt=""
            />
            <img
              className="w-[70px] h-[70] grid-cols-1"
              src="/assets/images/galleries/gallery2.jpg"
              alt=""
            />
            <img
              className="w-[70px] h-[70] grid-cols-1"
              src="/assets/images/galleries/gallery3.jpg"
              alt=""
            />
            <img
              className="w-[70px] h-[70] grid-cols-1"
              src="/assets/images/galleries/gallery4.jpg"
              alt=""
            />
            <img
              className="w-[70px] h-[70] grid-cols-1"
              src="/assets/images/galleries/gallery5.jpg"
              alt=""
            />
            <img
              className="w-[70px] h-[70] grid-cols-1"
              src="/assets/images/galleries/gallery4.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="col-span-12 sm:col-span-6 space-y-4 lg:col-span-3">
          <h2 className="text-xl">Newsletter</h2>
          <p>
            Keep up with our always upcoming news and updates. Enter your e-mail
            and subscribe to our newsletter.
          </p>
          <label className="input input-bordered bg-slate-900 flex items-center gap-2">
            Email
            <input
              type="text"
              className="grow"
              placeholder="example@gmail.com"
            />
          </label>
          <NavigateBtn text="subscribe" className="!px-6 !text-base" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
