import { useContext } from "react";
import { UserContext } from "./user";
import { CiMenuBurger } from "react-icons/ci";

const MenuBtn = () => {
  const { setMenuBtn } = useContext(UserContext);

  return (
    <button className="xl:hidden" onClick={() => setMenuBtn(true)}>
      <CiMenuBurger size={24} />
    </button>
  );
};

export default MenuBtn;
