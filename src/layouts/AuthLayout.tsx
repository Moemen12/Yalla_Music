import { Outlet } from "react-router";
import TopLoadingBar from "../components/general/TopLoadingBar";

const Authlayout: React.FC = () => {
  return (
    <div className="min-h-dvh px-4 my-auto fixed w-full bg-main-back">
      <TopLoadingBar />
      <div
        className="flex bg-card-color text-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-[27rem] lg:max-w-[80%] my-[5vh]"
        style={{ height: "90dvh" }}
      >
        <div className="hidden lg:block lg:w-1/2 bg-cover bg-auth-image"></div>
        <Outlet />
      </div>
    </div>
  );
};

export default Authlayout;
