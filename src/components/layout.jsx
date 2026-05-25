import { useContext } from "react";
import { UserContext } from "./user";
import MobileMenu from "./mobileMenu";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const { menuBtn } = useContext(UserContext);

  return (
    <>
      {menuBtn ? <MobileMenu /> : null}
      <Outlet />
    </>
  );
};

export default Layout;
