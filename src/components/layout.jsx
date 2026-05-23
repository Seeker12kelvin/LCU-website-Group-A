import Footer from "./footer";
import { useContext } from "react";
import { UserContext } from "./user";
import MobileMenu from "./mobileMenu";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const { menuBtn } = useContext(UserContext);

  return (
    <>
      {menuBtn ? <MobileMenu /> : null}
      <main className="min-[1200px]:px-5 w-full h-full overflow-x-hidden">
        <Outlet />
        <Footer />
      </main>
    </>
  );
};

export default Layout;
