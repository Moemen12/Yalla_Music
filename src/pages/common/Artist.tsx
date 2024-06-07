import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { FaSnapchatGhost, FaDiscord } from "react-icons/fa";
import { VscDebugStart } from "react-icons/vsc";
import { useGetUserInfoQuery } from "../../services/user.service";
import { useState } from "react";
const Artist: React.FC = () => {
  const APP_URL_IMAGE = process.env.REACT_APP_URL_IMAGE;
  const { data: user, isLoading, isError, refetch } = useGetUserInfoQuery({});
  const [imageUrl, setImageUrl] = useState<string>(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/768px-Default_pfp.svg.png"
  );

  return (
    <main className="sm:px-20 px-5 pt-8">
      <div className="gap-8 flex flex-col">
        <div className="flex sm:flex-row flex-col gap-6">
          <img
            className="w-52 h-52 object-cover rounded-2xl"
            src={
              !user?.profile_image
                ? imageUrl
                : APP_URL_IMAGE + user.profile_image
            }
            alt=""
          />
          <div>
            <h1 className="text-white text-2xl sm:text-4xl sm:mt-10">
              {user?.username}
            </h1>{" "}
          </div>
        </div>
        <p className="text-slate-300 text-lg sm:text-xl leading-8 sm:leading-10">
          {user?.bio}
        </p>
        <div className="flex items-center gap-4">
          {user?.facebook_url && (
            <Link
              target="_blank"
              className="text-white bg-sky-500 w-fit p-4 rounded-lg"
              to={user?.facebook_url}
            >
              <FaFacebookF fontSize={"1.5rem"} />
            </Link>
          )}

          {user?.instagram_url && (
            <Link
              target="_blank"
              className="text-white instagram-back w-fit p-4 rounded-lg"
              to={user?.instagram_url}
            >
              <FaInstagram fontSize={"1.5rem"} />
            </Link>
          )}
          {user?.snapchat_url && (
            <Link
              target="_blank"
              className="text-white bg-yellow-400 w-fit p-4 rounded-lg"
              to={user?.snapchat_url}
            >
              <FaSnapchatGhost fontSize={"1.5rem"} />
            </Link>
          )}
          {user?.discord_url && (
            <Link
              target="_blank"
              className="text-white bg-purple-600 w-fit p-4 rounded-lg"
              to={user?.discord_url}
            >
              <FaDiscord fontSize={"1.5rem"} />
            </Link>
          )}
        </div>
        <div className="divider before:bg-slate-400 after:bg-slate-400 my-0 after:h-[0.5px] before:h-[0.5px]"></div>
        <div className="flex items-center justify-between">
          <h2 className="text-4xl font-medium text-white">Releases</h2>
        </div>

        <div className="grid space-y-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 justify-center place-items-center sm lg:grid-cols-6">
          <div className="flex flex-col cursor-pointer">
            <div className="relative">
              <div className="overlay !rounded-2xl">
                <div className="bg-main-back rounded-xl p-3">
                  <VscDebugStart
                    className="text-white hover:text-logo-color"
                    fontSize={"2rem"}
                  />
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
                  <VscDebugStart
                    className="text-white hover:text-logo-color"
                    fontSize={"2rem"}
                  />
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
                  <VscDebugStart
                    className="text-white hover:text-logo-color"
                    fontSize={"2rem"}
                  />
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
                  <VscDebugStart
                    className="text-white hover:text-logo-color"
                    fontSize={"2rem"}
                  />
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
                  <VscDebugStart
                    className="text-white hover:text-logo-color"
                    fontSize={"2rem"}
                  />
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
                  <VscDebugStart
                    className="text-white hover:text-logo-color"
                    fontSize={"2rem"}
                  />
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

        <div className="divider before:bg-slate-400 after:bg-slate-400 my-0 after:h-[0.5px] before:h-[0.5px]"></div>
      </div>
    </main>
  );
};

export default Artist;
