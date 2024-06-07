import { Outlet } from "react-router";
import Footer from "../components/general/Footer";
import TopLoadingBar from "../components/general/TopLoadingBar";

const Layout: React.FC = () => {
  return (
    <div className="lg:m-auto lg:max-w-[90rem]">
      <TopLoadingBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
