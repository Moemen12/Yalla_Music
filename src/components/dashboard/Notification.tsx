import React, { useEffect } from "react";
import { AiFillNotification } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { useGetUserNotificationQuery } from "../../services/user.service";
import { Notification, NotificationType } from "../../types/responses/response";
import { formatDate } from "../../utilities/date-format/dateFormat";

interface NotificationsProps {
  toggle: () => void;
  isOpened: boolean;
  onClick: () => void; // New prop for onClick function
}

const Notifications: React.FC<NotificationsProps> = ({
  toggle,
  isOpened,
  onClick,
}) => {
  const { data: notifications = [], refetch } = useGetUserNotificationQuery({});

  useEffect(() => {
    refetch();
  }, []);

  const handleClick = () => {
    // Call the onClick function passed from the parent component
    onClick();
    toggle(); // Also toggle the notifications
  };

  return (
    <>
      {isOpened && (
        <div
          className={`h-5 w-72 sm:w-96 min-h-32 notification bg-slate-600 absolute right-3 rounded-md top-6 overflow-y-scroll overflow-x-hidden text-xs ${
            !notifications.length && "min-h-12"
          }`}
        >
          <div className="flex flex-col">
            {notifications.length > 0 ? (
              notifications.map(
                ({ title, content, _id, createdAt, type }: Notification) => {
                  let color = "";
                  switch (type) {
                    case NotificationType.INFO:
                      color = "#2196F3";
                      break;
                    case NotificationType.SUCCESS:
                      color = "#0dd1bd";
                      break;
                    case NotificationType.ERROR:
                      color = "#EF5350";
                      break;
                    case NotificationType.WARNING:
                      color = "#FFA500";
                      break;
                    default:
                      break;
                  }

                  return (
                    <div
                      key={_id}
                      className="flex items-center gap-4 border-white border-solid border-b p-3 cursor-pointer"
                    >
                      <AiFillNotification fontSize={"1.2rem"} color={color} />
                      <div className="flex flex-col text-sm">
                        <p className="truncate w-56 sm:w-72">{title}</p>
                        <p className="text-slate-300">
                          {formatDate(createdAt)}
                        </p>
                      </div>
                    </div>
                  );
                }
              )
            ) : (
              <p className="p-3 text-center text-slate-300 text-sm">
                No notifications available
              </p>
            )}
          </div>
        </div>
      )}
      <IoIosNotifications size={"1.5rem"} onClick={handleClick} />
    </>
  );
};

export default Notifications;
