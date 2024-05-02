import PositiveCard from "../../components/card/PositiveCard";
import { FaRegStar } from "react-icons/fa";
import { ImNewspaper } from "react-icons/im";
import { GoSun } from "react-icons/go";
import { HiCheckBadge } from "react-icons/hi2";
import NavigateBtn from "../../components/buttons/NavigateBtn";
import { Link } from "react-router-dom";
const ListenSection: React.FC = () => {
  return (
    <>
      <div className="w-[90%] mx-auto">
        <h2 className="sm:text-3xl text-xl text-black mt-10 sm:mt-20 text-center">
          Why You Should Listen to OnWave
        </h2>

        <div className="pt-12 grid grid-cols-12 place-items-center gap-4">
          <PositiveCard
            className="lg:col-span-3 col-span-12 sm:col-span-6 md:col-span-4"
            title="Best Music Selection"
            desc="YallaMusic offers its listeners the best music in various styles, from electronic to rock music."
            icon={FaRegStar}
          />
          <PositiveCard
            className="lg:col-span-3 col-span-12 sm:col-span-6 md:col-span-4"
            title="Latest News"
            desc="Our hosts are always ready to share with you the latest regional and global news and updates."
            icon={ImNewspaper}
          />
          <PositiveCard
            className="lg:col-span-3 col-span-12 sm:col-span-6 md:col-span-4"
            title="Available Everywhere"
            desc="You can listen to our radio both online and offline via any devices, gadgets or radios."
            icon={GoSun}
          />
          <PositiveCard
            className="lg:col-span-3 col-span-12 sm:col-span-6 md:col-span-4"
            title="Best DJ Shows"
            desc="YallaMusic regularly broadcasts shows from the best DJs in the world that play exclusive tracks for you."
            icon={HiCheckBadge}
          />
        </div>
      </div>
      <div className="audio-displayer min-h-36 justify-center flex items-center gap-8 flex-col sm:flex-row p-8 mt-8">
        <h3 className="text-white text-lg sm:text-2xl text-center">
          Listen to{" "}
          <Link className="text-yellow-300 font-bold" to="/">
            YallaMusic
          </Link>{" "}
          From Anywhere!
        </h3>
        <NavigateBtn
          style={{ background: "white" }}
          text="listen online"
          className="block !mt-0 !px-8 !py-0 !text-logo-color !text-sm"
        />
      </div>
    </>
  );
};

export default ListenSection;
