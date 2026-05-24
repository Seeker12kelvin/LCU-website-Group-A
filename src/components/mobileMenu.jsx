import gsap from "gsap";
import { UserContext } from "./user";
import { useGSAP } from "@gsap/react";
import { useContext, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";

const MobileMenu = () => {
  const navBar = [
    { text: "Home" },
    { text: "About US" },
    { text: "Admissions" },
    { text: "Undergraduate", fontSize: 14 },
    { text: "Sandwich Programme", fontSize: 14 },
    { text: "Postgraduate", fontSize: 14 },
    { text: "Our Short Courses", fontSize: 14 },
    { text: "Scholarly Journals" },
    { text: "Academic Discourse" },
    { text: "16th Inaugural Lecture", fontSize: 14 },
    { text: "Conference Proceedings", fontSize: 14 },
    { text: "Faculties" },
    {
      text: "Natural and Applied Sciences Overview",
      color: "#999",
      fontSize: 14,
    },
    {
      text: "Communication and Information Science Overview",
      color: "#999",
      fontSize: 14,
    },
    { text: "Law Overview", color: "#999", fontSize: 14 },
    {
      text: "Engineering and Technology Overview",
      color: "#999",
      fontSize: 14,
    },
    {
      text: "Social Management & Sciences Overview",
      color: "#999",
      fontSize: 14,
    },
    {
      text: "Environmental Design and Management Overview",
      color: "#999",
      fontSize: 14,
    },
    { text: "Arts & Education Overview", color: "#999", fontSize: 14 },
    {
      text: "College of Medicine & Health Sciences Overview",
      color: "#999",
      fontSize: 14,
    },
    { text: "Faculty of Pharmacy Overview", color: "#999", fontSize: 14 },
    { text: "Courseware" },
    { text: "Readings for Research", color: "#999", fontSize: 14 },
    { text: "Careers" },
    { text: "Photo Gallery" },
    { text: "Lead City FM" },
  ];

  const { setMenuBtn } = useContext(UserContext);

  const asideRef = useRef();

  useGSAP(
    () => {
      const menu = asideRef.current;
      const tl = gsap.timeline();

      tl.fromTo(menu, { xPercent: 100 }, { xPercent: 0, duration: 0.1 }).fromTo(
        ".animNav",
        { xPercent: 150 },
        { xPercent: 0, duration: 0.1, stagger: 0.05 },
      );
    },
    { scope: asideRef },
  );

  const exitAnimation = () => {
    const menu = asideRef.current;
    const tl = gsap.timeline();

    tl.fromTo(menu, { xPercent: 0 }, { xPercent: 100, duration: 0.1 }).call(
      () => setMenuBtn(false),
    );
  };

  const handleEnter = (i) => {
    gsap.to(`.hoverText-${i}`, { color: "#fa7252", duration: 0.1 });
  };

  const handleLeave = (i, color) => {
    gsap.to(`.hoverText-${i}`, { color: color, duration: 0.1 });
  };

  return (
    <aside
      ref={asideRef}
      className="h-screen fixed max-w-70 w-full bg-[#152136] flex flex-col z-100 gap-2 p-8 inset-y-0 min-[1041px]:hidden right-0 overflow-scroll"
    >
      <div className="h-full w-full flex items-center justify-between text-[#fa7252]">
        <h1 className="text-[15px] font-bold uppercase">All Courses</h1>

        <button onClick={() => exitAnimation()} className="p-2 self-center">
          <IoMdClose size={24} />
        </button>
      </div>

      <nav className="w-full h-full">
        <ul className="w-full h-full flex flex-col gap-4 text-white items-start justify-start">
          {navBar.map((data, index) => (
            <li
              key={index}
              // to={data.text.toLowerCase()}
              // end={index > 0 ? false : true}
              onClick={exitAnimation}
              onMouseEnter={() => handleEnter(index)}
              onMouseLeave={() =>
                handleLeave(index, data.fontSize ? "#999" : "white")
              }
              className={`flex animNav items-center h-full w-full rounded-sm hoverText-${index} ${data.fontSize ? "font-semibold text-sm text-[#999]" : "font-bold uppercase"}`}
            >
              {data.text}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default MobileMenu;
