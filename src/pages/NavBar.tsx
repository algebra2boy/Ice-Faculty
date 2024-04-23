import { Outlet, Link } from "react-router-dom";
import logo from "/favicon.svg";
import DarkModeIcon from "../components/LightDarkMode";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar bg-base-100">
        <div className="flex-1">
          <img src={logo} width={20} height={20}></img>
          <p className="btn btn-ghost text-xl">iceFaculty</p>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {/* TODO: Only show upload button when user logins */}
            <li><Link to="/upload">Upload</Link></li>
          </ul>
          <DarkModeIcon></DarkModeIcon>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default NavBar;
