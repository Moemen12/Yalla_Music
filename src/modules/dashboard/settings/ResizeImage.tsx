import React, { useState, useCallback } from "react";
import Cropper, { Area } from "react-easy-crop";

import { MdRotate90DegreesCcw } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { RootState } from "../../../app/store";
import { closeResizer } from "../../../features/user/userSlice";
import { useGetUserInfoQuery } from "../../../services/user.service";
import getCroppedImg from "../../../utilities/cropImage";

const ResizeImage: React.FC<{ onSave: (croppedImage: File) => void }> = ({
  onSave,
}) => {
  const { data: user } = useGetUserInfoQuery({});
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  const APP_URL_IMAGE = process.env.REACT_APP_URL_IMAGE;

  const onCropComplete = useCallback(
    (croppedArea: any, croppedAreaPixels: any) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );

  const handleSave = async () => {
    try {
      const croppedImage = await getCroppedImg(
        user?.profile_image ? APP_URL_IMAGE + user?.profile_image : "",
        croppedAreaPixels,
        rotation
      );
      onSave(croppedImage);
      dispatch(closeResizer());
    } catch (e) {
      console.error(e);
    }
  };

  const handleZoomChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setZoom(Number(event.target.value));
  };

  const handleRotation = () => {
    setRotation((prevRotation) => prevRotation + 90);
  };

  const dispatch = useAppDispatch();
  const isOpened = useAppSelector(
    (state: RootState) => state.user.isResizerOpened
  );

  return isOpened ? (
    <div className="w-full max-w-[500px] h-[500px] bg-card-color absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-3xl flex flex-col items-center justify-center">
      <div className="py-20 px-10">
        <div className="max-w-[326px] mx-auto border-white border-opacity-50 border-solid border rounded-3xl flex flex-col gap-5">
          <div className="bg-card-color w-full h-6 rounded-t-3xl"></div>
          <div className="relative w-full h-[217px]">
            <Cropper
              image={
                user?.profile_image ? APP_URL_IMAGE + user?.profile_image : ""
              }
              crop={crop}
              zoom={zoom}
              rotation={rotation}
              aspect={4 / 3}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
          </div>
          <div id="resizer-controller">
            <div className="flex items-center text-white justify-center px-7 w-full">
              <span className="text-lg cursor-pointer">-</span>
              <input
                className="bg-white mx-1 rounded-full w-full h-[2px] appearance-none outline-none"
                type="range"
                min="1"
                max="3"
                step="0.1"
                value={zoom}
                onChange={handleZoomChange}
              />
              <span className="text-lg cursor-pointer">+</span>
            </div>

            <div className="mt-3 max-w-[285px] font-light text-center text-xs text-white leading-none mx-auto">
              <span className="inline-block mb-1 w-full max-w-fit">
                We recommend pictures dimensions:
                <span className="inline-block w-full max-w-fit font-bold">
                  &nbsp;512x512&nbsp;
                </span>
              </span>
              <span className="inline-block w-full max-w-fit">
                and File sizes kept under 0.3 Mo
              </span>
            </div>

            <div className="flex items-center justify-around gap-4 mt-6 mb-8 px-7 w-full">
              <button
                className="inline-flex items-center justify-center gap-2.5 py-2.5 rounded-[30px] w-[113px] h-[38px] font-medium text-center text-white text-xs bg-cancel-color hover:bg-slate-950"
                onClick={() => dispatch(closeResizer())}
              >
                Cancel
              </button>

              <div
                className="flex items-center justify-center bg-gray-border rounded-full w-6 h-6 cursor-pointer"
                onClick={handleRotation}
              >
                <MdRotate90DegreesCcw
                  color="#ffffff"
                  size={"1.2rem"}
                  className="bg-main-back rounded-full"
                />
              </div>
              <button
                className="inline-flex items-center justify-center gap-2.5 py-2.5 rounded-[30px] w-[113px] h-[38px] font-medium text-center text-white text-xs btn-primary audio-displayer"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default ResizeImage;
