import React, { useState, useRef } from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";
import Breadcrumb from "../../../components/dashboard/breadcrumbs/Breadcrumb";
import { TbCameraPlus } from "react-icons/tb";
import { MdModeEdit } from "react-icons/md";
import {
  useGetUserInfoQuery,
  useUpdateUserProfileMutation,
} from "../../../services/user.service";
import toast from "react-hot-toast";
import {
  GeneralErrorResponse,
  GeneralResponse,
} from "../../../types/responses/response";
import { openResizer } from "../../../features/user/userSlice";
import { useAppDispatch } from "../../../app/hooks";
import ResizeImage from "./ResizeImage";
import Form from "./Form";

const Index: React.FC = () => {
  const items = [
    { icon: BiSolidDashboard, text: "dashboard", href: "/dashboard" },
    { icon: IoSettingsSharp, text: "settings", href: "/dashboard/settings" },
  ];

  const [updateUserProfile] = useUpdateUserProfileMutation();
  const [imageUrl, setImageUrl] = useState<string>(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/768px-Default_pfp.svg.png"
  );

  const { data: user, isLoading, isError, refetch } = useGetUserInfoQuery({});

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const APP_URL_IMAGE = process.env.REACT_APP_URL_IMAGE;
  const dispatch = useAppDispatch();
  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const validImageTypes = ["image/jpeg", "image/png"];
      const maxSizeInMB = 2;
      const maxSizeInBytes = maxSizeInMB * 1024 * 1024;

      if (!validImageTypes.includes(file.type)) {
        toast.error("Please select a valid image file (jpeg , jpg or png).");
        return;
      }

      if (file.size > maxSizeInBytes) {
        toast.error(`File size should not exceed ${maxSizeInMB} MB.`);
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);

      updateUserProfile(file)
        .unwrap()
        .then((res: GeneralResponse) => {
          refetch();
          toast.success(res.message);
        })
        .catch((error: GeneralErrorResponse) => {
          toast.error(error.data.message);
        });
    }
  };

  const handleSaveCroppedImage = (croppedImage: File) => {
    updateUserProfile(croppedImage)
      .unwrap()
      .then((res: GeneralResponse) => {
        refetch();
        toast.success(res.message);
      })
      .catch((error: GeneralErrorResponse) => {
        toast.error(error.data.message);
      });
  };

  return (
    <main className="text-white sm:p-12 p-6 !pt-2">
      <ResizeImage onSave={handleSaveCroppedImage} />
      <Breadcrumb items={items} />

      <div className="overflow-y-scroll hidden-scroll main-height-mobile">
        <h2 className="font-bold text-2xl mt-4">Personal Information</h2>

        <div className="grid lg:grid-cols-3 pt-5 gap-4 sm:grid-cols-2 place-items-stretch grid-cols-1">
          <div className="lg:col-span-1 sm:col-span-2">
            <div className="relative w-44 h-44 rounded-full mx-auto sm:mt-20">
              <div
                className="overlay absolute w-full h-full flex items-center justify-center bg-slate-600 opacity-0 hover:opacity-75 transition-opacity rounded-full cursor-pointer"
                onClick={handleImageClick}
              >
                <TbCameraPlus size={"1.8rem"} color="#ffffff" />
              </div>
              <img
                className="image object-cover inline-block h-full w-44 rounded-full"
                src={
                  !user?.profile_image
                    ? imageUrl
                    : APP_URL_IMAGE + user.profile_image
                }
                alt=""
              />
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
                name=""
                id=""
              />
              <MdModeEdit
                onClick={() => dispatch(openResizer())}
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-red-800 rounded-full cursor-pointer"
                fontSize={"1.2rem"}
              />
            </div>
          </div>

          <Form />
        </div>
      </div>
    </main>
  );
};

export default Index;
