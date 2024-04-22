import { Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div>This is the nav bar</div>
      <Outlet />
    </div>
  );
};

export default NavBar;
