import MenuBtn from "./menu";
import { Link } from "react-router-dom";
import logo_image from "../images/logo0.png";

const Header = () => {
  const navList = [
    { text: "All Courses", to: "/all-courses" },
    { text: "Home", to: "/" },
    { text: "About US", to: "/about-us" },
    { text: "Admissions", to: "/admissions" },
    { text: "Scholarly Journals", to: "/scholarly-journals" },
    { text: "Academic Discourse", to: "/academic-discourse" },
    { text: "Faculties", to: "/faculties" },
    { text: "Courseware", to: "/courseware" },
    { text: "Careers", to: "/careers" },
    { text: "Photo Gallery", to: "/photo-gallery" },
    { text: "Lead City FM", to: "/lead-city-fm" },
  ];

  return (
    <header className="w-full text-white flex min-[1041px]:flex-col max-[1041px]:justify-between gap-8 px-4">
      <img src={logo_image} alt="The logo of the school" className="w-fit" />
      <nav className="w-full h-full max-[1041px]:hidden">
        <ul className="w-full h-full flex flex-wrap justify-between text-xs font-bold uppercase">
          {navList.map((data, index) => (
            <Link to={data.to} key={index}>
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
