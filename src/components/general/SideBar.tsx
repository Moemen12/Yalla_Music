import { Link } from "react-router-dom";

interface AsideBarProps {
  className?: string;
}

const SideBar: React.FC<AsideBarProps> = ({ className = "" }) => {
  return (
    <aside
      className={`${className} fixed left-0 top-16 bg-main-back sm:hidden w-full h-screen z-50`}
    >
      <ul className="text-white pl-12 pt-12">
        <li className="text-lg py-3">
          <Link to={"/"}>Home</Link>
        </li>

        <li className="text-lg py-3">
          <Link to={"/auth/signup"}>Signup</Link>
        </li>
        <li className="text-lg py-3">
          <Link to={"/auth/login"}>Login</Link>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
