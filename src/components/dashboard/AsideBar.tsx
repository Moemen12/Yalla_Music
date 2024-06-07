import { TiHome } from "react-icons/ti";
import { IoSettingsSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { FaUser, FaSatelliteDish } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import { RiCalendarEventLine } from "react-icons/ri";
import { MdOutlineVpnKey } from "react-icons/md";
import { PiMusicNotesBold } from "react-icons/pi";
import { useAppDispatch } from "../../app/hooks";
import { ToggleCreatorMode } from "../../features/user/userSlice";
import { useGetCreatorModeQuery } from "../../services/creator-mode";
import { MdOutlineAlbum } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";

const AsideBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data: creatorModeData } = useGetCreatorModeQuery();

  return (
    <aside
      className="bg-card-color text-white hidden md:block px-6 py-4 h-dvh rounded-3xl pr-0"
      id="sidebar"
    >
      <div className="h-[98%] overflow-y-auto pr-4">
        <h1 className="text-special font-bold text-2xl sm:text-xl font-mono">
          <span className="text-white">Yalla</span>Music
        </h1>
        <h2 className="pt-8 pb-2">Discover</h2>
        <ul className="menu rounded-box asidebar">
          <li>
            <NavLink to={"/dashboard"} end>
              <TiHome size={"1.3rem"} />
              <span className="hidden lg:block">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/artists"} end>
              <MdPeopleAlt size={"1.3rem"} />
              <span className="hidden lg:block">Artists</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/releases"} end>
              <PiMusicNotesBold size={"1.3rem"} />

              <span className="hidden lg:block">Releases</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/events"} end>
              <RiCalendarEventLine size={"1.3rem"} />

              <span className="hidden lg:block">Events</span>
            </NavLink>
          </li>
        </ul>

        {creatorModeData?.isModeEnabled ? (
          <>
            <h2 className="pt-8 pb-2">Creator Mode Tools</h2>
            <ul className="menu rounded-box asidebar">
              <li>
                <NavLink to={"/dashboard/creator-mode"} end>
                  <TiHome size={"1.3rem"} />
                  <span className="hidden lg:block">New Song</span>
                </NavLink>
              </li>
              {/* <ul className="menu w-56 rounded-box asidebar"> */}
              <li>
                <details open={false}>
                  <summary>
                    <MdManageAccounts size={"1.3rem"} />
                    Album Management
                  </summary>
                  <ul className="asidebar">
                    <li>
                      <details open={false}>
                        <summary>
                          {/* <MdOutlineAlbum size={"1.3rem"} /> */}
                          All Albums
                        </summary>
                        <ul>
                          <li>
                            <NavLink to={"/dashboard/settings"} end>
                              Personal Information
                            </NavLink>
                          </li>
                        </ul>
                      </details>
                    </li>

                    {/* <li>
                      <details open={false}>
                        <summary>
                          <MdOutlineAlbum size={"1.3rem"} />
                          New Album
                        </summary>
                       
                      </details>
                    </li> */}

                    <li>
                      <NavLink to={"creator-mode/new-album"} end>
                        {/* <FaUser size={"1.3rem"} /> */}
                        <MdOutlineAlbum size={"1.3rem"} />
                        <span className="hidden lg:block"> New Album</span>
                      </NavLink>
                    </li>
                  </ul>
                </details>
              </li>
              {/* </ul> */}

              {/* <li>
                <NavLink to={"/dashboard/creator-mode/new-album"} end>
                  <MdOutlineAlbum size={"1.3rem"} />
                  <span className="hidden lg:block">Album Management</span>
                </NavLink>
              </li> */}
            </ul>
          </>
        ) : null}
        <h2 className="pt-8 pb-2">Me</h2>
        <ul className="menu rounded-box asidebar">
          <li>
            <NavLink to={"profile"} end>
              <FaUser size={"1.3rem"} />
              <span className="hidden lg:block">Profile</span>
            </NavLink>
          </li>
          <li onClick={() => dispatch(ToggleCreatorMode())}>
            <button className="!text-white bg-inherit">
              <FaSatelliteDish size={"1.3rem"} />
              <span className="hidden lg:block">Creator Mode</span>
              <span className="bg-slate-400 px-2 py-1 rounded-md text-xs font-medium">
                {creatorModeData?.isModeEnabled ? "On" : "Off"}
              </span>
            </button>
          </li>
        </ul>
        <ul className="menu w-56 rounded-box asidebar">
          <li>
            <details open={false}>
              <summary>
                <IoSettingsSharp size={"1.3rem"} />
                Settings
              </summary>
              <ul>
                <li>
                  <NavLink to={"/dashboard/settings"} end>
                    Personal Information
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/settings/two-fa"} end>
                    <MdOutlineVpnKey size={"1.3rem"} />
                    <span className="hidden lg:block">2FA</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"app/dashboard/settings/two-fa"}>
                    anything
                  </NavLink>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default AsideBar;
