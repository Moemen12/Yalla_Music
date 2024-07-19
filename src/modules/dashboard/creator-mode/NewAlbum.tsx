import { BiSolidDashboard } from "react-icons/bi";
import { FaSatelliteDish } from "react-icons/fa6";
import { MdOutlineAlbum } from "react-icons/md";
import Breadcrumb from "../../../components/dashboard/breadcrumbs/Breadcrumb";
import GeneralInput from "../../../components/inputs/GeneralInput";
import SubmitBtn from "../../../components/buttons/SubmitBtn";
const NewAlbumModule: React.FC = () => {
  const items = [
    {
      icon: BiSolidDashboard,
      text: "dashboard",
      href: "/dashboard",
    },
    {
      icon: FaSatelliteDish,
      text: "creator mode",
      href: "/dashboard/creator-mode",
    },
    {
      icon: MdOutlineAlbum,
      text: "New Album",
      href: "/dashboard/creator-mode/new-album",
    },
  ];

  return (
    <main className="text-white sm:p-12 p-3 !pb-0 !pt-2">
      <Breadcrumb items={items} />
      <div className="overflow-y-scroll hidden-scroll main-height-mobile">
        <h2 className="text-2xl font-medium">Add New Album For your Songs</h2>

        <div className="flex flex-col gap-4 p-4">
          <div className="flex-auto bg-card-color p-4 rounded-lg">
            <h2 className="text-lg font-bold mb-4">Basic Information</h2>

            <form className="space-y-4">
              <div className="mb-4">
                <label className="block">Title:</label>
                <GeneralInput
                  type="text"
                  labelClass={"!bg-white"}
                  className="text-black !bg-white"
                />
              </div>
              <div className="mb-4">
                <label className="block">Description:</label>
                <GeneralInput
                  type="text"
                  labelClass={"!bg-white"}
                  className="text-black !bg-white"
                />
              </div>
              <div className="mb-4">
                <label className="block">Label:</label>
                <GeneralInput
                  type="text"
                  labelClass={"!bg-white"}
                  className="text-black !bg-white"
                />
              </div>
              <div className="mb-4">
                <label className="block">Release Date:</label>
                <input
                  type="date"
                  className="w-full p-2 border rounded-lg text-black"
                />
              </div>
              <div className="mb-4 text-white">
                <label className="block">Cover Art:</label>
                <input type="file" className="w-full p-2 border rounded" />
              </div>
              {/* <button
                className="px-4 py-2 bg-indigo-600 text-white rounded"
                type="button"
              >
                Next
              </button> */}
              <SubmitBtn
                text="Add"
                textLoading=".."
                loading={false}
                className="!px-14"
              />
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};
export default NewAlbumModule;
