import { Link } from "react-router-dom";
import programme_one from "../images/programme1.jpg";
import programme_two from "../images/programme2.jpg";
import programme_four from "../images/programme4.jpg";
import programme_three from "../images/programme3.jpg";
import prof_image from "../images/prof-Adeymo-Kabiru.png";
import leadCityCampus from "../images/landingPagevideo_lcu.mp4";
import agricPic from "../images/landingPageAgri-business-logo.png";

const LandingPage = () => {
  const programmes = [
    {
      header: "Pre-Degree Programmes",
      img: programme_one,
      desc: "Kickstart your academic journey with our foundational programmes designed to prepare you for degree studies.",
      btn: "Learn More",
    },
    {
      header: "Undergraduate Programmes",
      img: programme_two,
      desc: "Explore our diverse range of undergraduate courses tailored to equip you with real-world skills and knowledge.",
      btn: "Apply Now",
    },
    {
      header: "Postgraduate Programmes",
      img: programme_three,
      desc: "Advance your career with our postgraduate programmes, offering specialized knowledge and research opportunities.",
      btn: "Download Form",
    },
    {
      header: "Sandwich Programmes",
      img: programme_four,
      desc: "Our flexible sandwich programmes are designed for working professionals seeking to further their education.",
      btn: "Read More",
    },
  ];

  return (
    <main>
      <section id="about us" className="bg-white w-full h-screen px-20 py-10">
        <div className="w-full h-full bg-white shadow-xl p-20 flex justify-between">
          <article className="h-full flex flex-col justify-between w-[50%] leading-7">
            <div className="flex flex-col gap-2">
              <h2 className="border-b-[red] border-b-3 pb-2 text-[#1453A0] w-fit text-5xl font-bold">
                About Us
              </h2>

              <p className="text-lg max-w-122.5 w-full">
                At <span className="text-[#1453A0]">Lead City University</span>,
                we are committed to providing a transformative educational
                experience that empowers students to achieve their full
                potential. Our institution is built on a foundation of
                excellence, innovation, and inclusivity.
              </p>
            </div>

            <p className="text-lg max-w-122.5 w-full">
              Under the leadership of our esteemed{" "}
              <span className="text-[#1453A0]">Vice Chancellor</span>, we strive
              to create an environment that fosters intellectual growth,
              creativity, and global citizenship. Our faculty, staff, and
              students work together to push the boundaries of knowledge and
              make a positive impact on society.
            </p>

            <p className="text-lg max-w-122.5 w-full">
              Join us in our mission to shape the future through education,
              research, and community engagement.
            </p>

            <h2 className="text-[#1453A0]">Prof. Kabiru Adeyemo</h2>
          </article>

          <div className="p-10 shadow-xl rounded-3xl">
            <img src={prof_image} alt="A picture of Prof. Kabiru Adeyemo" />
          </div>
        </div>
      </section>

      <section className="bg-white w-full h-full px-20 py-10">
        <div className="bg-[#f8f9fa] w-full h-full flex justify-between p-10">
          {programmes.map((data, index) => (
            <div
              key={index}
              className="bg-white flex flex-col justify-between rounded-2xl hover:scale-105 duration-300 transition-all max-w-70 w-full items-center min-h-100 pb-4 gap-3 shadow-2xl"
            >
              <img
                src={data.img}
                alt={data.header}
                className="rounded-t-2xl h-50 w-full"
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

        <div className="px-5 py-20 shadow-xl">
          <div className="flex flex-col gap-6 items-center shadow-xl rounded-2xl px-5 py-10 text-center">
            <div className="flex flex-col gap-2 items-center">
              <h2 className="text-[#1453A0] font-extrabold text-[2rem] border-b-[red] border-b-3 pb-2 w-fit">
                What People Say About Us
              </h2>
              <p className="text-[#555]">
                Hear from our stakeholders and partners about their experiences
                with Lead City University.
              </p>
            </div>

            <div className="bg-[#f8f9fa] border-l-6 border-l-[#1453A0] w-full p-5 flex flex-col justify-between gap-3">
              <i className="text-[#555] text-[1.25rem] italic">
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

          <div>
            <div className="flex items-start gap-10 p-20 h-full">
              <div className="w-full h-full flex flex-col gap-20 pb-10">
                <div className="h-full flex flex-col gap-3 text-center">
                  <h2 className="text-[#1453A0] font-extrabold text-[2rem] border-b-[red] border-b-3 pb-2 w-fit">
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

              <div className="w-full h-full flex flex-col gap-20 shadow-xl rounded-xl pb-10">
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

              <div className="w-full h-full flex flex-col gap-20 shadow-xl rounded-xl pb-10">
                <img
                  src={agricPic}
                  alt="A picture showcasing agriculture"
                  className="w-full h-50 rounded-t-xl"
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
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
