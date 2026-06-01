import bg_image from "../images/bg.jpg";
import Header from "../components/header";
import { Link, NavLink } from "react-router-dom";

const History = () => {
  const acitveStyle = {
    color: "#fa7252",
    background: "#6666662a",
    paddingInline: 16,
  };

  return (
    <section className="w-full h-full relative">
      <img
        src={bg_image}
        alt="A picture of the school ground"
        className="absolute -z-1 top-0 left-0 h-100 w-full object-cover"
      />
      <div className="w-full h-full flex flex-col justify-center items-start gap-8 max-xl:pt-10 max-xl:gap-15 xl:p-20">
        <Header />

        <div className="xl:text-4xl font-bold bg-[#0f1725] text-white max-xl:text-2xl p-2 max-xl:ml-2">
          <h1>History</h1>
        </div>

        <div className="h-full w-full bg-white max-sm:p-5 max-md:p-10 md:p-10 flex flex-col gap-10">
          <div className="flex gap-1.5 items-center text-[#666] text-xs border-b-[#6666664b] border-b pb-3">
            <Link
              to={"/"}
              className="hover:text-[#fa7252] transition-all duration-300"
            >
              Home
            </Link>
            <p>/</p>
            <p>History</p>
          </div>

          <div className="w-full flex max-lg:flex-wrap gap-10 items-start">
            <div className="w-[268.59px] h-fit font-semibold text-xs flex flex-col gap-3">
              <h3 className="font-bold text-sm">Quick links</h3>

              <ul className="w-full flex flex-col">
                <NavLink
                  to={"/about-us"}
                  className={"border-b border-[#6666662a] py-4 w-full"}
                  style={({ isActive }) => (isActive ? acitveStyle : null)}
                >
                  About Us
                </NavLink>
                <NavLink
                  to={"."}
                  className={"border-b border-[#6666662a] py-4 w-full"}
                  style={({ isActive }) => (isActive ? acitveStyle : null)}
                >
                  History
                </NavLink>
                <NavLink
                  to={"/faqs"}
                  className={"py-4 w-full"}
                  style={({ isActive }) => (isActive ? acitveStyle : null)}
                >
                  FAQs
                </NavLink>
              </ul>
            </div>

            <div className="w-fit flex flex-col gap-15 items-start">
              <h2 className="xl:text-4xl max-xl:text-3xl">History</h2>

              <p className="text-[#666] text-sm leading-6.5">
                The Proprietor of Lead City University, Ibadan is the Eduserve
                Consult, which has recorded remarkable achievements in promoting
                educational development at both the Tertiary and non-tertiary
                levels especially in the City of Ibadan.
              </p>

              <p className="text-[#666] text-sm leading-6.5">
                The University submitted its application to the National
                Universities Commission the year 2002. The Standing Committee on
                Private Universities (SCOPU) conducted the verification and the
                final assessment visits in August and September, 2003,
                respectively. At the end of the assessment visits, SCOPU
                reported that the profile of the Proprietor of Lead City
                University confirmed that it has the capacity and resources to
                establish a private university. Thereafter, the University was
                “approved for immediate take off” by the Board of NUC in
                December 2003 as a prelude to the ratification by the Federal
                Executive Council, which was effected on the 16th of February,
                2005.
              </p>

              <p className="text-[#666] text-sm leading-6.5">
                Though the charter of the University has City University, Ibadan
                as its name but due to several cases of mistaken identity and in
                order to avert corporate identity problem, the Board of Trustees
                and Council of the University had an extra-ordinary meeting on
                the 7th of March, 2005, and resolved to modify the name to read
                Lead City University, Ibadan. The change in name was
                subsequently communicated to the Federal Ministry of Education,
                the National Universities Commission, Joint Admissions and
                Matriculation Board (JAMB) and other stakeholders while all
                previous documents relating to City University, Ibadan remain
                valid.
              </p>

              <p className="text-[#666] text-sm leading-6.5">
                Academic Programmes at the Lead City University took off from
                the Jericho Campus of the University located within Ibadan City,
                with adequate human physical and material resources. The
                University utilises information technology via its own V-SAT and
                Local Area Network to enhance holistic education for social,
                economic, cultural development and self-reliance. Each student
                will be knowledgeable in management and information sciences.
                They will also compulsorily offer any of the professional
                programmes (ATS, ACII, ICAN, NIPR, NIMN, Microsoft Certificate
                etc.) or vocational training in Computer Repairs and Assembling,
                Printing, Media Technology, Fashion Design, Electronic Repairs,
                etc., on the campus. It is the belief of the University that
                graduates would prove themselves worthy men and women who are
                able to use their intellect as adeptly as they can apply their
                physique.
              </p>

              <p className="text-[#666] text-sm leading-6.5">
                Lead City University caters for both the young adolescents and
                the adult working class. It indeed, recognises the need to
                accommodate the time constraints of individuals and therefore
                provides flexibility by allowing for a choice between part-time
                and full-time study schemes. Programmes are offered by
                specialised faculties, comprising leading academics,
                practitioners and experts. To ensure that the University remains
                at the forefront of the latest developments in the field of
                information technology and applied science, social sciences and
                entrepreneurship, education and law, appropriate practical and
                relevant programmes are continually developed and delivered in a
                stimulating and vibrant learning environment where thoughts,
                concept and visions are exchanged and vigorously debated. As an
                institution offering courses in Social Sciences and
                Entrepreneurial Studies, Information Technology and Applied
                Sciences, and Law, our students have optimal access to data,
                information and knowledge through state-of-the-art computer
                facilities, internet linkage, audiovisual aids, and
                student-friendly course materials.
              </p>

              <p className="text-[#666] text-sm leading-6.5">
                This is further enhanced by what has been described as our
                congenial study facilities and amiable staff.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
