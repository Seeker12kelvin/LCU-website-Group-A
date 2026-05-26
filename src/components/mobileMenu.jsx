import gsap from "gsap";
import { UserContext } from "./user";
import { useGSAP } from "@gsap/react";
import { useContext, useRef } from "react";
import { IoMdClose } from "react-icons/io";

const MobileMenu = () => {
  const navBar = [
    { id: 1, text: "Home" },
    { id: 2, text: "About US" },
    { id: 3, text: "Admissions" },
    { id: 4, text: "Undergraduate", fontSize: 14 },
    { id: 5, text: "Sandwich Programme", fontSize: 14 },
    { id: 6, text: "Postgraduate", fontSize: 14 },
    { id: 7, text: "Our Short Courses", fontSize: 14 },
    { id: 8, text: "Scholarly Journals" },
    { id: 9, text: "Academic Discourse" },
    { id: 10, text: "16th Inaugural Lecture", fontSize: 14 },
    { id: 11, text: "Conference Proceedings", fontSize: 14 },
    { id: 12, text: "Faculties" },
    {
      id: 13,
      text: "Natural and Applied Sciences Overview",
      color: "#999",
      fontSize: 14,
    },
    {
      id: 14,
      text: "Communication and Information Science Overview",
      color: "#999",
      fontSize: 14,
    },
    { id: 15, text: "Law Overview", color: "#999", fontSize: 14 },
    {
      id: 16,
      text: "Engineering and Technology Overview",
      color: "#999",
      fontSize: 14,
    },
    {
      id: 17,
      text: "Social Management & Sciences Overview",
      color: "#999",
      fontSize: 14,
    },
    {
      id: 18,
      text: "Environmental Design and Management Overview",
      color: "#999",
      fontSize: 14,
    },
    { id: 19, text: "Arts & Education Overview", color: "#999", fontSize: 14 },
    {
      id: 20,
      text: "College of Medicine & Health Sciences Overview",
      color: "#999",
      fontSize: 14,
    },
    {
      id: 21,
      text: "Faculty of Pharmacy Overview",
      color: "#999",
      fontSize: 14,
    },
    { id: 22, text: "Courseware" },
    { id: 23, text: "Readings for Research", color: "#999", fontSize: 14 },
    { id: 24, text: "Careers" },
    { id: 25, text: "Photo Gallery" },
    { id: 26, text: "Lead City FM" },
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
          {navBar.map((data) => (
            <li
              key={data.id}
              // to={data.text.toLowerCase()}
              // end={data.id > 0 ? false : true}
              onClick={exitAnimation}
              className={`flex animNav items-center h-full hover:text-[#fa7252] transition-all duration-300 w-full rounded-sm hoverText-${data.id} ${data.fontSize ? "font-semibold text-sm text-[#999]" : "font-bold uppercase"}`}
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
