import { Outlet } from "react-router";
import AsideBar from "../components/dashboard/AsideBar";
import Player from "../components/audio-player/Player";
import TopLoadingBar from "../components/general/TopLoadingBar";
import AlertWithBtn from "../components/alerts/AlertWithBtn";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { ToggleCreatorMode, setCreatorMode } from "../features/user/userSlice";
import {
  GeneralErrorResponse,
  GeneralResponse,
} from "../types/responses/response";
import toast from "react-hot-toast";

import {
  useDisableCreatorModeMutation,
  useEnableCreatorModeMutation,
  useGetCreatorModeQuery,
} from "../services/creator-mode";
import { useEffect } from "react";
const DashboardLayout: React.FC = () => {
  const Mode = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();
  const { data: creatorModeData } = useGetCreatorModeQuery();

  const [enableCreatorMode] = useEnableCreatorModeMutation();
  const [disableCreatorMode] = useDisableCreatorModeMutation();

  const enableMode = () => {
    enableCreatorMode()
      .unwrap()
      .then((res: GeneralResponse) => {
        dispatch(ToggleCreatorMode());
        toast.success(res.message);
      })
      .catch((err: GeneralErrorResponse) => {
        dispatch(ToggleCreatorMode());
        toast.error(err.data.message);
      });
  };

  const disableMode = () => {
    disableCreatorMode()
      .unwrap()
      .then((res: GeneralResponse) => {
        dispatch(ToggleCreatorMode());
        toast.success(res.message);
      })
      .catch((err: GeneralErrorResponse) => {
        dispatch(ToggleCreatorMode());
        toast.error(err.data.message);
      });
  };

  useEffect(() => {
    dispatch(setCreatorMode(creatorModeData?.isModeEnabled));
  }, [creatorModeData?.isModeEnabled, dispatch]);
  return (
    <div className="new-container lg:m-auto lg:max-w-[90rem] h-dvh">
      {Mode.ToggleCreatorMode ? (
        <AlertWithBtn
          firstBtnContent="Cancel"
          secondBtnContent={Mode.CreatorMode ? "Disable" : "Enable"}
          message={
            Mode.CreatorMode
              ? "Do you want to disable creator mode?"
              : "Do you want to enable creator mode?"
          }
          icon={IoMdInformationCircleOutline}
          firstBtnOn={true}
          secondBtnOn={true}
          FirstBtnCLick={() => dispatch(ToggleCreatorMode())}
          SecondBtnCLick={Mode.CreatorMode ? disableMode : enableMode}
        />
      ) : null}
      <TopLoadingBar />
      <Outlet />

      <AsideBar />
      <footer className="h-fit">
        <Player />
      </footer>
    </div>
  );
};

export default DashboardLayout;
