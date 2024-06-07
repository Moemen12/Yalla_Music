import { BiSolidDashboard } from "react-icons/bi";
import { FaSatelliteDish } from "react-icons/fa6";
import { MdOutlineAlbum } from "react-icons/md";
import Breadcrumb from "../../../components/dashboard/breadcrumbs/Breadcrumb";
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
      </div>
    </main>
  );
};
export default NewAlbumModule;
