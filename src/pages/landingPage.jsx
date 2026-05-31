import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import Header from "../components/header";
import prof_image from "../images/prof-Adeymo-Kabiru.png";
import { chooseLcu, news, programmes } from "../Data/data";
import leadCityCampus from "../images/landingPagevideo_lcu.mp4";
import agricPic from "../images/landingPageAgri-business-logo.png";
import ComeStudy_bg from "../images/landingPageHeroSectionconvocationstudy.png";
import TakeTour_bg from "../images/landingPageHeroSection20thcollegeofmedicine.jpg";
import Celebrating_bg from "../images/landingPageHeroSection20thcollegeofmedicine.jpg";
import Squarebanner_image from "../images/landingPageHeroSectionsquarebanner.jpg";

const LandingPage = () => {
  const bgRef = useRef(null);
  const blockTextRef = useRef(null);
  const progressBarRef = useRef(null);
  const header = [
    {
      id: 1,
      heading: "Come and study with us",
      bg: TakeTour_bg,
      para: "September 2024/2025 Admission is open. Apply Online Now!",
    },
    {
      id: 2,
      heading: "Take a tour",
      bg: ComeStudy_bg,
      para: "Visit the university environment.",
    },
    {
      id: 3,
      heading: "Celebrating 20 Years of Excellence",
      bg: Celebrating_bg,
      para: "Join us as we mark two decades of academic achievements and innovation.",
    },
  ];

  const [increment, setIncrement] = useState(0);
  const currentText = header[increment];

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.set(blockTextRef.current, {
      yPercent: 100,
      opacity: 0,
    })
      .to(blockTextRef.current, {
        yPercent: 0,
        opacity: 1,
        duration: 0.5,
      })

      .from(progressBarRef.current, { width: "0%", duration: 7 })
      .to(blockTextRef.current, { yPercent: -100, opacity: 0, duration: 0.5 })
      .to(bgRef.current, { opacity: 1, duration: 0.5 }, "<")
      .call(() => {
        if (increment >= header.length - 1) {
          return setIncrement(0);
        } else {
          return setIncrement((prev) => prev + 1);
        }
      });
  }, [increment]);

  return (
    <main className="w-full h-full overflow-x-hidden font-poppins">
      <section id="Hero-Section" className="h-224 relative">
        <div
          ref={bgRef}
          style={{ backgroundImage: `url(${currentText.bg})` }}
          className="h-full w-full absolute top-0 -z-1 bg-cover bg-no-repeat bg-center"
        />
        <div className="max-sm:px-5 max-md:px-10 md:px-20 py-10 z-10 flex flex-col justify-between h-full w-full">
          <Header />

          <div className="h-fit overflow-hidden flex flex-col gap-4 max-sm:text-center">
            <div ref={blockTextRef} className="text-white flex flex-col gap-4">
              <h1 className="max-md:text-5xl md:text-6xl uppercase">
                {currentText.heading}
              </h1>
              <p className="max-md:text-lg md:text-[20px]">
                {currentText.para}
              </p>
            </div>
            <div className="border-[#fa7252] border h-1.5 max-sm:max-w-full sm:max-w-33 w-full">
              <div
                ref={progressBarRef}
                className="bg-[#fa7252] h-full w-full"
              />
            </div>
          </div>

          <div className="h-fit w-full flex flex-wrap items-end gap-5">
            <div className="w-[954.8px] max-lg:h-fit lg:h-[273.77px] bg-white flex">
              <div className="uppercase bg-[#0F1725] flex items-center gap-2 justify-center w-15 max-lg:hidden">
                <div className="-rotate-90 text-white text-sm font-semibold w-full flex justify-center gap-2">
                  <h3>Latest</h3>
                  <h3>events</h3>
                </div>
              </div>
              <div className="bg-white py-5 w-full h-full">
                <div className="shadow-xl rounded-xl rounded-tl-none rounded-bl-none bg-white h-full w-[98%] p-4">
                  <div className="bg-linear-[135deg] from-[#1453a0] to-[#EC268F] rounded-xl h-full flex flex-col items-center justify-between max-lg:gap-4 p-3.5 text-white">
                    <h2 className="font-semibold text-[22px]">
                      Our 18th CONVOCATION
                    </h2>
                    <p className="text-center max-sm:text-sm max-[]">
                      The University Management invites the public to join in
                      celebrating this milestone as Lead City University
                      continues to strengthen its commitment to producing
                      innovative, globally competitive graduates.
                    </p>
                    <div className="flex flex-col items-center gap-1">
                      <div className="bg-[#0077BD] py-1.25 px-3 rounded-sm">
                        <p>December 1st - 3rd, 2025</p>
                      </div>
                      <p>📍 Lead City University, Ibadan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-[285.2px] w-full max-h-82.5 h-full p-4 rounded-xl bg-white max-[1401px]:hidden">
              <img
                src={Squarebanner_image}
                alt="A picture meant to be a guid of the school grounds"
                className="h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="About-Us-Section"
        className="bg-white w-full h-fit max-md:px-10 md:px-20 py-10"
      >
        <div className="w-full h-fit bg-white shadow-xl max-sm:p-5 max-md:p-10 md:p-20 flex max-xl:flex-wrap xl:justify-between max-xl:justify-center xl:gap-10 max-xl:gap-5">
          <article className="h-full flex flex-col max-xl:items-center max-xl:text-center gap-8 xl:max-w-122.5 w-full leading-7">
            <div className="flex flex-col gap-2 max-xl:items-center max-xl:text-center">
              <h2 className="border-b-[#EC268F] border-b-3 pb-3 text-[#1453A0] w-fit text-5xl font-bold">
                About Us
              </h2>

              <p className="text-lg w-full max-[568px]:text-sm">
                At <span className="text-[#1453A0]">Lead City University</span>,
                we are committed to providing a transformative educational
                experience that empowers students to achieve their full
                potential. Our institution is built on a foundation of
                excellence, innovation, and inclusivity.
              </p>
            </div>

            <p className="text-lg w-full max-[568px]:text-sm">
              Under the leadership of our esteemed{" "}
              <span className="text-[#1453A0]">Vice Chancellor</span>, we strive
              to create an environment that fosters intellectual growth,
              creativity, and global citizenship. Our faculty, staff, and
              students work together to push the boundaries of knowledge and
              make a positive impact on society.
            </p>

            <p className="text-lg w-full max-[568px]:text-sm">
              Join us in our mission to shape the future through education,
              research, and community engagement.
            </p>

            <h2 className="text-[#1453A0]">Prof. Kabiru Adeyemo</h2>
          </article>

          <div className="max-xl:w-fit xl:w-full pl-10 shadow-xl rounded-3xl flex justify-end items-end max-h-full h-full">
            <img
              src={prof_image}
              alt="A picture of Prof. Kabiru Adeyemo"
              className="object-contain w-full max-xl:max-h-100 h-full rounded-br-3xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-white w-full h-full max-sm:px-0 sm:px-10 md:px-20 py-10 flex flex-col gap-20">
        <div className="bg-[#f8f9fa] w-full h-full flex flex-wrap max-xl:justify-center max-xl:gap-10 xl:justify-between p-10">
          {programmes.map((data, index) => (
            <div
              key={index}
              className="bg-white flex flex-col justify-between rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-700 max-w-70 w-full items-center min-h-100 pb-4 gap-3 shadow-2xl"
            >
              <img
                src={data.img}
                alt={data.header}
                className="rounded-t-2xl h-50 w-full object-cover"
              />

              <div className="flex flex-col items-center justify-start gap-3 text-center h-full">
                <h2 className="text-[#1453A0] font-bold text-2xl max-w-[92%]">
                  {data.header}
                </h2>

                <p className="font-sm text-[#555]">{data.desc}</p>
              </div>

              <button className="w-[90%] bg-[#EC268F] py-2.5 px-5 text-white text-sm rounded-full">
                {data.btn}
              </button>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-10 max-sm:px-5 sm:px-10 py-20 shadow-xl rounded-xl">
          <div className="flex flex-col gap-6 items-center shadow-xl rounded-2xl px-5 py-10 text-center">
            <div className="flex flex-col gap-2 items-center">
              <h2 className="text-[#1453A0] font-extrabold text-[2rem] border-b-[#EC268F] border-b-3 pb-3 w-fit">
                What People Say About Us
              </h2>
              <p className="text-[#555]">
                Hear from our stakeholders and partners about their experiences
                with Lead City University.
              </p>
            </div>

            <div className="bg-[#f8f9fa] border-l-6 border-l-[#1453A0] w-full p-5 flex flex-col justify-between gap-3">
              <i className="text-[#555] sm:text-[1.25rem] italic max-sm:text-[1rem]">
                "I am impressed by the physical and academic development of this
                University. The Lead City University is indeed on the right
                track."
              </i>

              <p className="text-[#333]">
                <strong>Professor Abubakar Rasheed</strong> (Former Executive
                Secretary of the National Universities Commission)
              </p>
            </div>
          </div>

          <div className="flex max-xl:flex-wrap gap-5 items-start max-xl:justify-center max-xl:gap-10 h-full w-full">
            <div className="max-w-100 w-full h-full flex flex-col items-center gap-20 pb-10">
              <div className="h-full flex flex-col gap-3 text-center">
                <h2 className="text-[#1453A0] font-extrabold text-[2rem] border-b-[#EC268F] border-b-3 pb-3 w-fit">
                  Explore Our Short Courses
                </h2>
                <p className="text-[#555] font-bold leading-5">
                  Enhance your skills and knowledge with our specialized short
                  courses designed for professionals and students.
                </p>
              </div>
              <div className="bg-[#1453A0] px-4 py-5 w-fit rounded-2xl text-center flex flex-col gap-3">
                <p className="text-white max-w-80">
                  We offer a variety of short courses to help you advance your
                  career.
                </p>
                <Link to={"."} className="text-[#FFD700] font-bold">
                  Lear More
                </Link>
              </div>
            </div>

            <div className="max-w-100 w-full h-full flex flex-col gap-10 shadow-xl rounded-xl pb-10">
              <video controls className="w-full h-50 rounded-t-xl">
                <source src={leadCityCampus} />
              </video>

              <div className="flex flex-col gap-3 p-4 text-center">
                <h3 className="text-[#1453A0] text-[1.3rem]">Discover LCU</h3>
                <p className="text-[#666] text-[0.95rem]">
                  Watch our video to learn more about what makes LCU unique.
                </p>
              </div>
            </div>

            <div className="max-w-100 w-full h-full flex flex-col gap-10 shadow-xl rounded-xl pb-10">
              <img
                src={agricPic}
                alt="A picture showcasing agriculture"
                className="w-full h-50 rounded-t-xl object-center"
              />

              <div className="flex flex-col gap-3 p-4 text-center">
                <h3 className="text-[#1453A0] text-[1.3rem]">
                  Agribusiness Management
                </h3>
                <p className="text-[#666] text-[0.95rem]">
                  Join our agribusiness programme and gain expertise in
                  sustainable agriculture and business management.
                </p>
                <Link to={"."} className="text-[#EC268F] font-bold">
                  Explore Programme
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex max-xl:flex-wrap max-xl:justify-center xl:justify-between items-center gap-10 w-full h-fit shadow-xl rounded-xl py-10 px-20">
          <video controls className="w-[50%]">
            <source src={leadCityCampus} />
          </video>

          <div className="flex flex-col items-center gap-5 w-full">
            <div className="flex flex-col gap-2 items-center text-center">
              <h2 className="border-b-[#EC268F] border-b-3 pb-3 text-[#1453A0] w-fit text-5xl font-bold">
                Study With Us
              </h2>
              <p className="text-[17.6px] text-[#333333] max-w-136.25 w-full leading-8">
                Join Lead City University and become part of a vibrant academic
                community dedicated to excellence, innovation, and global
                impact. Here’s why you should choose us:
              </p>
            </div>

            <ul className="flex flex-col gap-2 w-full max-xl:text-center">
              <li className="py-1.25 text-[#555555] border-b-[#55555540] border-b">
                World-class faculty and research facilities
              </li>
              <li className="py-1.25 text-[#555555] border-b-[#55555540] border-b">
                Diverse and inclusive learning environment
              </li>
              <li className="py-1.25 text-[#555555] border-b-[#55555540] border-b">
                Opportunities for international exposure
              </li>
              <li className="py-1.25 text-[#555555] border-b-[#55555540] border-b">
                State-of-the-art campus infrastructure
              </li>
            </ul>

            <Link
              to={"."}
              className="bg-[#EC268F] py-3 px-7.5 text-white w-fit rounded-4xl"
            >
              Apply Now
            </Link>
          </div>
        </div>

        <div className="h-fit bg-[#F8F9FA] flex flex-col gap-10 items-center text-center py-25 px-5 rounded-2xl">
          <div className="flex flex-col gap-3 items-center text-center">
            <h2 className="border-b-[#EC268F] border-b-3 pb-3 text-[#1453A0] w-fit text-5xl font-bold">
              Why Choose LCU?
            </h2>
            <p className="text-[17.6px] text-[#333333] max-w-200 w-full leading-8">
              Lead City University (LCU) is a globally recognized institution
              dedicated to academic excellence, innovation, and student success.
              Here’s why students from around the world choose LCU:
            </p>
          </div>
          <div className="flex max-xl:flex-wrap max-xl:justify-center xl:justify-between gap-10">
            {chooseLcu.map((data, index) => (
              <div
                key={index}
                className="hover:shadow-2xl hover:scale-105 transition-all duration-700 flex flex-col text-left gap-3 h-109 w-87.5 shadow-xl rounded-2xl bg-white"
              >
                <img
                  src={data.img}
                  alt={`An example of ${data.heading} in the form of an image `}
                  className="h-45.5 w-full border-b-[#1453A0] border-b-4 rounded-t-2xl object-cover"
                />
                <div className="pl-5 flex flex-col gap-2">
                  <h3 className="text-[#1453A0] text-xl font-bold">
                    {data.heading}
                  </h3>

                  <p className="text-[#555555]">{data.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#F8F9FA] flex flex-col gap-10 items-center text-center py-25 px-5 rounded-2xl shadow-2xs">
          <h2 className="border-b-[#EC268F] border-b-3 pb-3 text-[#1453A0] w-fit text-5xl font-bold">
            News & Updates
          </h2>
          <div className="flex flex-wrap gap-10 justify-center w-full">
            {news.map((data, index) => (
              <div
                key={index}
                className="hover:shadow-2xl hover:scale-105 transition-all duration-700 flex flex-col justify-between text-left gap-3 min-h-109 w-87.5 shadow-xl rounded-2xl bg-white"
              >
                <div className="w-full">
                  <img
                    src={data.img}
                    alt={`An example of ${data.heading} in the form of an image `}
                    className="h-45.5 w-full border-b-[#1453A0] border-b-4 rounded-t-2xl object-cover"
                  />
                  <div className="p-5 flex flex-col gap-2">
                    <h3 className="text-[#1453A0] text-xl font-bold">
                      {data.heading}
                    </h3>

                    <p className="text-[#555555]">{data.desc}</p>
                  </div>
                </div>

                <button className="bg-[#EC268F] ml-5 mb-5 py-3 px-5 text-white w-fit rounded-4xl">
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(20, 83, 160, 0.9) 50%, rgba(20, 83, 160, 0.7) 50%) center / cover no-repeat",
          }}
          className="hover:-translate-y-3 transition-all duration-700 py-20 px-10 h-fit w-full bg-linear-to-r from-[#1453a0e6] from-50% to-[#1453a0b3] to-50% flex flex-col justify-around items-center text-center gap-5 rounded-2xl"
        >
          <div className="flex flex-col gap-2">
            <h2 className="text-[#FFD700] text-[2.5rem] font-extrabold">
              Campus Life
            </h2>

            <p className="leading-7 text-[1.1rem] text-white max-sm:text-sm">
              Experience the vibrant and dynamic campus life at Lead City
              University. From state-of-the-art facilities to a thriving student
              community, there’s always something exciting happening on campus.
            </p>
          </div>

          <div className="w-full flex flex-wrap justify-center gap-10">
            <div className="flex flex-col gap-2">
              <h3 className="text-[#FFD700] text-[1.2rem] font-semibold">
                Academic Excellence
              </h3>
              <p className="text-white sm:text-[0.95rem] max-sm:text-sm">
                World-class programs and research opportunities.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-[#FFD700] text-[1.2rem] font-semibold">
                Vibrant Community
              </h3>
              <p className="text-white sm:text-[0.95rem] max-sm:text-sm">
                A diverse and inclusive student body.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-[#FFD700] text-[1.2rem] font-semibold">
                Modern Facilities
              </h3>
              <p className="text-white sm:text-[0.95rem] max-sm:text-sm">
                State-of-the-art labs, libraries, and sports complexes.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-[#FFD700] text-[1.2rem] font-semibold">
                Events & Activities
              </h3>
              <p className="text-white sm:text-[0.95rem] max-sm:text-sm">
                Regular workshops, seminars, and cultural events.
              </p>
            </div>
          </div>

          <button className="bg-[#EC268F] py-3 px-7 text-white font-bold w-fit rounded-4xl">
            Take a Tour
          </button>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
