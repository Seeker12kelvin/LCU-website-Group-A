import bg_image from "../images/bg.jpg";
import { Link, NavLink } from "react-router-dom";
import Header from "../components/header";
import Senate1_image from "../images/AboutUsPageSenate1.jpeg";

const AboutUs = () => {
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
          <h1>About Us</h1>
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
            <p>About Us</p>
          </div>

          <div className="w-full flex max-lg:flex-wrap gap-15 items-start">
            <div className="w-[268.59px] h-fit font-semibold text-xs flex flex-col gap-3">
              <h3 className="font-bold text-sm">Quick links</h3>

              <ul className="w-full flex flex-col">
                <NavLink
                  to={"."}
                  className={"border-b border-[#6666662a] py-4 w-full"}
                  style={({ isActive }) => (isActive ? acitveStyle : null)}
                >
                  About Us
                </NavLink>
                <NavLink
                  to={"/history"}
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

            <div className="w-fit flex flex-col gap-10">
              <h2 className="xl:text-4xl max-xl:text-3xl">
                About the University
              </h2>

              <img
                src={Senate1_image}
                alt="A picture of lead city unversitys' senate building"
                className="h-201.5 w-full object-cover"
              />

              <h3 className="text-[#111]">Motto</h3>

              <p className="text-[#666] text-sm leading-6.5">
                The motto of the University is “Knowledge for Self-reliance”.
                This is in recognition of the power of education to challenge
                inequality in the quest to have access to resources for
                entrepreneurship and self-reliance.
              </p>

              <h3 className="text-[#111] font-semibold">Logo</h3>

              <p className="text-[#666] text-sm leading-6.5">
                The cap on the logo represents knowledge, research and academic
                excellence while the shield embodies the concept of “Knowledge
                as an amour for self-reliance”. The Orbiting Satellite indicates
                that the University will be “Technology driven”. The Book
                represents access to knowledge while the Flame represents
                burning desire for knowledge.
              </p>

              <h3 className="text-[#111] font-semibold">
                Colours of Lead City University
              </h3>

              <p className="text-[#666] text-sm leading-6.5">
                Blue represents imagination and creativity Pink represents
                passion for human development White represents peace and
                serenity of the academic environment
              </p>

              <h3 className="text-[#111] font-semibold">Mission</h3>

              <p className="text-[#666] text-sm leading-6.5">
                The mission of the University is to contribute to the
                development of tertiary education in Nigeria by providing
                qualitative access to knowledge and training, with innovative
                and challenging teaching techniques that guarantee a balanced
                education.
              </p>

              <h3 className="text-[#111] font-semibold">Vision</h3>

              <p className="text-[#666] text-sm leading-6.5">
                The vision of the University is to be a centre of excellence, a
                unique, urban-based University, specialising in Social Sciences,
                Law, Arts, Applied Sciences, Information and Communication
                Technology.
              </p>

              <p className="text-[#666] text-sm leading-6.5">
                Currently in its sixteenth academic session. Lead City
                University, Ibadan (LCU) is a private University approved by the
                Federal Government of Nigeria. It has graduated nine sets of
                students.
              </p>

              <p className="text-[#666] text-sm leading-6.5">
                The school offers various programmes suitable for both the young
                adolescents and adult working class. It indeed recognises the
                need to accomodate the time constraints to individuals and
                therefore provides flexibility by allowing for a choice between
                part-time & full-time study schemes. Programmes are offered by
                specialized faculties in Social Sciences & Entrepreneurial
                Studies, Information Technology & Applied Sciences and Law.
              </p>

              <p className="text-[#666] text-sm leading-6.5">
                To Ensure that the University remains at the forefront of the
                latest developement in the field of Information Technology and
                Management education, our have optimal access to data,
                Information and Knowledge through state-of-the-art Computer
                Facilities, Inter Linkage, Electronic Library, Audiovisual Aids
                and Student-friendly course materials.
              </p>

              <h3 className="text-[#111] font-semibold">
                Character, Conduct and Service
              </h3>

              <p className="text-[#666] text-sm leading-6.5">
                At Lead City University, Students at all levels are expected to
                comply with the university dress code, exhibit satisfactory
                moral conduct and exemplary behaviour, provide service to the
                community and engage in sporting/extra-curricular activities.
              </p>

              <h3 className="text-[#111] font-semibold">
                Opportunity for Additional Qualifications
              </h3>

              <p className="text-[#666] text-sm leading-6.5">
                It is mandatory for all undergraduate students of Lead City
                University to register with and pass the examinations of at
                least one recognised Professional / Vocational trade body during
                the course of their studentship in the University. It is
                believed that the additional Professional / vocational
                qualifications shall enhance students' chances for job
                competition or self employment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
