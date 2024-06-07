import React from "react";
import { QRCodeSVG } from "qrcode.react";
import Swap from "../../swap/Swap";
import { BiSolidToggleRight, BiSolidToggleLeft } from "react-icons/bi";
import {
  useDisable2faMutation,
  useEnable2faMutation,
} from "../../../services/two-fa.service";
import toast from "react-hot-toast";
import { useGetUserInfoQuery } from "../../../services/user.service";
import { GeneralResponse } from "../../../types/responses/response";

const Twofa: React.FC = () => {
  const [enable2Fa] = useEnable2faMutation();
  const [disable2Fa] = useDisable2faMutation();
  const { data: user, isLoading, isError, refetch } = useGetUserInfoQuery({});

  const enable = () => {
    enable2Fa({})
      .unwrap()
      .then(() => {
        toast.success(
          "Two Factor authentication has been enabled successfully"
        );

        refetch();
      })
      .catch(() => {
        toast.error("Sorry, an error occurred. Please try again.");
      });
  };

  const disable = () => {
    disable2Fa({})
      .unwrap()
      .then((res: GeneralResponse) => {
        toast.success(res?.message);
        refetch();
      })
      .catch(() => {
        toast.error("Sorry, an error occurred. Please try again.");
      });
  };

  return (
    <div className="overflow-y-scroll hidden-scroll main-height-mobile">
      <h2 className="font-bold text-2xl mt-4">Two-factor authentication</h2>
      <p className="mt-8">
        Protect your account from unauthorized access. Enable two-factor
        authentication (2FA) to <br />
        use an additional verification code while logging in.
      </p>
      <div className="bg-card-color p-9 flex flex-col gap-4 rounded-2xl mt-8">
        <div className="flex items-center justify-between">
          <b className="hidden sm:block">Authenticator app verification</b>
          <div className="flex items-center gap-4 sm:gap-2 w-full sm:w-auto justify-between sm:flex-row flex-row-reverse">
            <Swap
              iconOff={BiSolidToggleLeft}
              onIconColor="#ffffff"
              offIconColor="#ffffff"
              onIconSize={"3rem"}
              offIconSize={"3rem"}
              default={user?.isOtpEnabled}
              iconOn={BiSolidToggleRight}
              onToggleOn={enable}
              onToggleOff={disable}
            />
            <span className="text-white">
              {user?.isOtpEnabled ? "Disable 2FA" : "Enable 2FA"}
            </span>
          </div>
        </div>
        <p>
          Get verification codes in a mobile app. You can use Google
          Authenticator app or any 2FA mobile app
        </p>

        {user?.isOtpEnabled && (
          <QRCodeSVG
            height={"150px"}
            width={"150px"}
            className="mx-auto sm:m-0"
            value={`otpauth://totp/YallaMusic?secret=${user.otpauthURL}`}
          />
        )}
      </div>
    </div>
  );
};

export default Twofa;
