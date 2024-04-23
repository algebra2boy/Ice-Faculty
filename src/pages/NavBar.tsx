import { Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <body className="text-mainColor">This is the nav bar</body>
      <Outlet />
    </div>
  );
};

export default NavBar;
