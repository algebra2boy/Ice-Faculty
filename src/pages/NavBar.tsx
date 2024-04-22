import { Outlet } from "react-router-dom";
import DarkModeIcon from "../components/LightDarkMode";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar bg-base-100">
        <div className="flex-1">
          {/* TODO: add logo here */}
          <a className="btn btn-ghost text-xl">iceFaculty</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {/* TODO: Only show upload button when user logins */}
            <li><a href="/upload">Upload</a></li>
          </ul>
          <DarkModeIcon></DarkModeIcon>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default NavBar;
