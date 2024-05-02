import { Outlet } from "react-router";
import Footer from "../components/general/Footer";

const Layout: React.FC = () => {
  return (
    <div className="lg:m-auto lg:max-w-[90rem]">
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
