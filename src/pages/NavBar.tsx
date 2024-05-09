import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "/favicon.svg";
import DarkModeIcon from "../components/LightDarkMode";
import { UserContext } from "../components/UserProvider";

const NavBar = () => {
  const { userEmail, setUserEmail } = useContext(UserContext);

  const logoutHandler = () => {
    setUserEmail("");
  }

  return (
    <div>
      <nav className="navbar bg-base-100">
        <div className="flex-1">
          <img src={logo} width={20} height={20}></img>
          <Link to="/home" className="btn btn-ghost text-xl">
            iceFaculty
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {userEmail !== "" && (
              <>
                <li>
                  <Link to="/upload">Upload</Link>
                </li>
                <li>
                  <Link to="/">
                    <button onClick={logoutHandler}>Log Out</button>
                  </Link>
                </li>
              </>
            )}
          </ul>
          <DarkModeIcon></DarkModeIcon>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default NavBar;
