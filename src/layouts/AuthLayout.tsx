import { Outlet } from "react-router";
import NavigateBtn from "../components/buttons/NavigateBtn";
import { Link } from "react-router-dom";
import urlConfig from "../config/urlConfig.json";
const Authlayout: React.FC = () => {
  return (
    // <div classNameName="h-dvh bg-slate-600 flex items-center justify-center">
    //   <div classNameName="flex h-[70%] mx-auto">
    //     <div>
    //       <Outlet />
    //     </div>
    //     <div classNameName="sm:flex flex-col items-center justify-center audio-displayer p-8 hidden">
    //       <h2 classNameName="text-white text-3xl font-bold text-center">
    //         Find Your Rhythm
    //       </h2>
    //       <p classNameName="text-white w-4/5 text-center pt-4">
    //         Enter your personal details and Dive Into the Soundscapes
    //       </p>
    //       <Link to={urlConfig.signup}>
    //         <NavigateBtn
    //           text="sign up"
    //           classNameName="uppercase bg-white border-white border"
    //         />
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    <div className="min-h-dvh px-4 audio-displayer my-auto fixed w-full">
      <div
        className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-[27rem] lg:max-w-[80%] my-[5vh]"
        style={{ height: "90dvh" }}
      >
        <div className="hidden lg:block lg:w-1/2 bg-cover bg-auth-image"></div>
        <Outlet />
      </div>
    </div>
  );
};

export default Authlayout;
