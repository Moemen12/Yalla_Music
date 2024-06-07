import Breadcrumb from "../../../components/dashboard/breadcrumbs/Breadcrumb";
import Twofa from "../../../components/dashboard/settings/TwoFa";

import { BiSolidDashboard } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";
import { MdOutlineVpnKey } from "react-icons/md";
const TwoFaModule: React.FC = () => {
  const items = [
    { icon: BiSolidDashboard, text: "dashboard", href: "/dashboard" },
    { icon: IoSettingsSharp, text: "settings", href: "/dashboard/settings" },
    {
      icon: MdOutlineVpnKey,
      text: "TwoFa",
      href: "/dashboard/settings/two-fa",
    },
  ];
  return (
    <main className="text-white sm:p-12 p-6 !pt-2">
      <Breadcrumb items={items} />

      <Twofa />
    </main>
  );
};

export default TwoFaModule;
