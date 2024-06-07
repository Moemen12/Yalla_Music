import { IoIosNotifications } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import GenreBtn from "../../components/buttons/GenreBtn";
import Breadcrumb from "../../components/dashboard/breadcrumbs/Breadcrumb";
import { FaUserAlt } from "react-icons/fa";
import { BiSolidDashboard } from "react-icons/bi";
import {
  useGetUserInfoQuery,
  useGetUserNotificationQuery,
  useMarkAsReadMutation,
} from "../../services/user.service";
import { useState } from "react";
import { formatDate } from "../../utilities/date-format/dateFormat";
import Notifications from "../../components/dashboard/Notification";
import toast from "react-hot-toast";
import { GeneralResponse } from "../../types/responses/response";

const ProfileModule: React.FC = () => {
  const items = [
    { icon: BiSolidDashboard, text: "dashboard", href: "/dashboard" },
    { icon: FaUserAlt, text: "profile", href: "/dashboard/profile" },
  ];
  const [imageUrl, setImageUrl] = useState<string>(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/768px-Default_pfp.svg.png"
  );

  const [isOpened, setIsOpened] = useState(false);
  const toggleNotifications = () => setIsOpened(!isOpened);

  const { data: user, isLoading, isError } = useGetUserInfoQuery({});
  const { data: notificationsData, refetch } = useGetUserNotificationQuery({});
  const notifications = Array.isArray(notificationsData)
    ? notificationsData
    : [];
  const [markAsRead] = useMarkAsReadMutation();
  const APP_URL_IMAGE = process.env.REACT_APP_URL_IMAGE;
  const isAnyNotificationUnread = notifications.some(
    (notification) => !notification.isRead
  );

  const markNotification = () => {
    markAsRead()
      .unwrap()
      .then((res) => {
        refetch();
      })
      .catch((err: GeneralResponse) => {
        toast.error(err.message);
      });
  };

  return (
    <main className="text-white sm:p-12 p-6 !pt-2">
      <div className="flex items-center justify-between">
        <Breadcrumb items={items} />

        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4">
            <IoSettingsSharp size={"1.5rem"} />
            <div className="relative cursor-pointer">
              <Notifications
                onClick={markNotification}
                toggle={toggleNotifications}
                isOpened={isOpened}
              />
              {isAnyNotificationUnread && (
                <div className="w-2 h-2 bg-red-600 top-0 right-1 rounded-full absolute"></div>
              )}
            </div>
          </div>
          <img
            className="w-12 h-12 rounded-full object-cover hidden sm:block"
            src={
              !user?.profile_image
                ? imageUrl
                : APP_URL_IMAGE + user.profile_image
            }
            alt=""
          />
        </div>
      </div>

      <div className="overflow-y-scroll hidden-scroll main-height-mobile">
        <div className="flex items-center gap-8 bg-card-color p-8 rounded-2xl">
          <img
            className="sm:w-36 sm:h-36 w-16 h-16 block rounded-full object-cover"
            src={
              !user?.profile_image
                ? imageUrl
                : APP_URL_IMAGE + user.profile_image
            }
            alt=""
          />
          <div className="flex flex-col gap-4">
            <p className="capitalize text-white">listener profile</p>
            <b className="capitalize text-white text-xl sm:text-3xl">
              {user?.username}
            </b>
          </div>
        </div>

        <div className="flex pt-4 sm:p-4 flex-col-reverse md:flex-row">
          <div className="flex flex-col gap-8">
            <h2 className="capitalize text-white text-2xl mt-6 sm:mt-0 font-medium opacity-90">
              Favorite Genres
            </h2>

            <div className="flex items-center gap-2 flex-wrap">
              <GenreBtn text="Alt Rock" />
              <GenreBtn text="word / traditional folk" />
              <GenreBtn text="deep groove house" />
              <GenreBtn text="alternative hip hop" />
              <GenreBtn text="breakcore" />
              <GenreBtn text="choral" />
              <GenreBtn text="stomp and holler" />
            </div>
          </div>

          <div className="md:w-64 h-60 w-full rounded-3xl bg-card-color py-4 px-4 flex-none flex flex-col justify-between">
            <center className="font-bold capitalize">general info</center>
            <div className="flex items-center justify-between">
              <div className="flex flex-col opacity-90 text-sm gap-2">
                <span className="capitalize">public playlists</span>
                <span className="capitalize">followers</span>
                <span className="capitalize">following</span>
                <span className="capitalize">Blocked users</span>
              </div>

              <div className="flex flex-col text-sm gap-2">
                <b className="underline">6</b>
                <b className="underline">3</b>
                <b className="underline">24</b>
                <b className="underline">8</b>
              </div>
            </div>
            <center className="opacity-90 text-sm">
              Member Since: {formatDate(user?.createdAt)}
            </center>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfileModule;
