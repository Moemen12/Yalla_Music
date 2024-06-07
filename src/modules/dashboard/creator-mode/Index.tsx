import { BiSolidDashboard } from "react-icons/bi";
import Breadcrumb from "../../../components/dashboard/breadcrumbs/Breadcrumb";
import { HiOutlineFolderAdd } from "react-icons/hi";
import { FaSatelliteDish } from "react-icons/fa6";
import Stepper from "./stepper";

const Index: React.FC = () => {
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
      icon: HiOutlineFolderAdd,
      text: "new Song",
      href: "/dashboard/creator-mode",
    },
  ];

  return (
    <main className="text-white sm:p-12 p-3 !pb-0 !pt-2">
      <Breadcrumb items={items} />
      <div className="overflow-y-scroll hidden-scroll main-height-mobile">
        <h2 className="text-2xl font-medium">
          Be Singer and Publish your Song
        </h2>
        <Stepper />
      </div>
    </main>
  );
};

export default Index;
