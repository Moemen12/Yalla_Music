import { VscDebugStart } from "react-icons/vsc";
import { ImArrowRight2 } from "react-icons/im";
import { Link } from "react-router-dom";
const Realease: React.FC = () => {
  return (
    <section className="mt-14">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-medium">New Releases</h2>
        <div className="flex items-center hover:text-logo-color gap-2 pr-4">
          <Link to={"/dashboard/artists"} className="cursor-pointer">
            See all
          </Link>
          <ImArrowRight2 />
        </div>
      </div>

      <div className="grid space-y-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 justify-center place-items-center sm lg:grid-cols-6">
        <div className="flex flex-col cursor-pointer">
          <div className="relative">
            <div className="overlay !rounded-2xl">
              <div className="bg-main-back rounded-xl p-3">
                <VscDebugStart fontSize={"2rem"} />
              </div>
            </div>
            <img
              className="md:w-36 md:h-36 w-44 h-44 rounded-2xl object-cover hover:bg-slate-600"
              src="/assets/images/galleries/gallery1.jpg"
              alt=""
            />
          </div>

          <p className="text-white text-lg mt-2">Space Melody</p>
          <p className="text-slate-300">Florida Georgia</p>
        </div>

        <div className="flex flex-col cursor-pointer">
          <div className="relative">
            <div className="overlay !rounded-2xl">
              <div className="bg-main-back rounded-xl p-3">
                <VscDebugStart fontSize={"2rem"} />
              </div>
            </div>
            <img
              className="md:w-36 md:h-36 w-44 h-44 rounded-2xl object-cover hover:bg-slate-600"
              src="/assets/images/galleries/gallery2.jpg"
              alt=""
            />
          </div>

          <p className="text-white text-lg mt-2">Space Melody</p>
          <p className="text-slate-300">Florida Georgia</p>
        </div>

        <div className="flex flex-col cursor-pointer">
          <div className="relative">
            <div className="overlay !rounded-2xl">
              <div className="bg-main-back rounded-xl p-3">
                <VscDebugStart fontSize={"2rem"} />
              </div>
            </div>
            <img
              className="md:w-36 md:h-36 w-44 h-44 rounded-2xl object-cover hover:bg-slate-600"
              src="/assets/images/galleries/gallery3.jpg"
              alt=""
            />
          </div>

          <p className="text-white text-lg mt-2">Space Melody</p>
          <p className="text-slate-300">Florida Georgia</p>
        </div>

        <div className="flex flex-col cursor-pointer">
          <div className="relative">
            <div className="overlay !rounded-2xl">
              <div className="bg-main-back rounded-xl p-3">
                <VscDebugStart fontSize={"2rem"} />
              </div>
            </div>
            <img
              className="md:w-36 md:h-36 w-44 h-44 rounded-2xl object-cover hover:bg-slate-600"
              src="/assets/images/galleries/gallery4.jpg"
              alt=""
            />
          </div>

          <p className="text-white text-lg mt-2">Space Melody</p>
          <p className="text-slate-300">Florida Georgia</p>
        </div>

        <div className="flex flex-col cursor-pointer">
          <div className="relative">
            <div className="overlay !rounded-2xl">
              <div className="bg-main-back rounded-xl p-3">
                <VscDebugStart fontSize={"2rem"} />
              </div>
            </div>
            <img
              className="md:w-36 md:h-36 w-44 h-44 rounded-2xl object-cover hover:bg-slate-600"
              src="/assets/images/galleries/gallery5.jpg"
              alt=""
            />
          </div>

          <p className="text-white text-lg mt-2">Space Melody</p>
          <p className="text-slate-300">Florida Georgia</p>
        </div>

        <div className="flex flex-col cursor-pointer">
          <div className="relative">
            <div className="overlay !rounded-2xl">
              <div className="bg-main-back rounded-xl p-3">
                <VscDebugStart fontSize={"2rem"} />
              </div>
            </div>
            <img
              className="md:w-36 md:h-36 w-44 h-44 rounded-2xl object-cover hover:bg-slate-600"
              src="/assets/images/galleries/gallery6.jpg"
              alt=""
            />
          </div>

          <p className="text-white text-lg mt-2">Space Melody</p>
          <p className="text-slate-300">Florida Georgia</p>
        </div>
      </div>
    </section>
  );
};

export default Realease;
