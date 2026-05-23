import MenuBtn from "./menu";
import { Link } from "react-router-dom";
import logo_image from "../images/logo0.png";

const Header = () => {
  const navList = [
    { text: "All Courses" },
    { text: "About US" },
    { text: "Admissions" },
    { text: "Scholarly Journals" },
    { text: "Academic Discourse" },
    { text: "Faculties" },
    { text: "Courseware" },
    { text: "Readings for Research" },
    { text: "Careers" },
    { text: "Photo Gallery" },
    { text: "Lead City FM" },
  ];

  return (
    <header className="w-full text-white flex min-[1041px]:flex-col max-[1041px]:justify-between gap-8 px-4">
      <img src={logo_image} alt="The logo of the school" className="w-fit" />
      <nav className="w-full h-full max-[1041px]:hidden">
        <ul className="w-full h-full flex flex-wrap justify-between text-sm font-bold">
          {navList.map((data, index) => (
            <Link to={data.text.toLowerCase()} key={index}>
              {data.text}
            </Link>
          ))}
        </ul>
      </nav>
      <MenuBtn />
    </header>
  );
};

export default Header;
