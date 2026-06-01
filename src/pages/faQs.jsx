import bg_image from "../images/bg.jpg";
import Header from "../components/header";
import { Link, NavLink } from "react-router-dom";

const FaQs = () => {
  const acitveStyle = {
    color: "#fa7252",
    background: "#6666662a",
    paddingInline: 16,
  };

  const topics = [
    {
      subTopic: "Getting to the University",
      quest_one: "Where is the University?",
      quest_two: "How do I get to the University?",
      quest_three:
        "How do I contact the University? What are the University's telephone numbers?",
    },
    {
      subTopic: "Conferences and seminars",
      quest_one: "Can I attend a public lecture or seminar?",
      quest_two:
        "Can my organisation hold a conference/meeting/dinner at the University? How can I book the Aula or other conference facilities at University?",
      quest_three: "Where can I stay in Lead City University?",
    },
    {
      subTopic: "Study at University",
      quest_one:
        "I would like to study in the University. What courses are available? How do I apply? Can you send me an application form?",
      quest_two: "What does it cost to Study at University?",
      quest_three: "Are there grants or bursaries available to students?",
    },
    {
      subTopic: "Facts",
      quest_one: "When was University founded?",
      quest_two: "How many departments are there at University?",
      quest_three:
        "When does a new session start? What is the dates for the next academic year?",
    },
  ];

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
          <h1>FAQs</h1>
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
            <p>FAQs</p>
          </div>

          <div className="w-full flex max-md:flex-wrap gap-15 items-start">
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
                  to={"/history"}
                  className={"border-b border-[#6666662a] py-4 w-full"}
                  style={({ isActive }) => (isActive ? acitveStyle : null)}
                >
                  History
                </NavLink>
                <NavLink
                  to={"."}
                  className={"py-4 w-full"}
                  style={({ isActive }) => (isActive ? acitveStyle : null)}
                >
                  FAQs
                </NavLink>
              </ul>
            </div>

            <div className="w-fit flex flex-col gap-10">
              <h2 className="xl:text-4xl max-xl:text-3xl">
                Frequently Asked Questions
              </h2>
              {topics.map((data, index) => (
                <div key={index} className="flex flex-col gap-5 w-full">
                  <h3 className="text-[#fa7252] text-lg">{data.subTopic}</h3>
                  <ol className="flex flex-col gap-2 ml-4">
                    {[data.quest_one, data.quest_two, data.quest_three].map(
                      (data, index) => (
                        <li
                          key={index}
                          type="1"
                          className="font-sm text-[#010101]"
                        >
                          {data}
                        </li>
                      ),
                    )}
                  </ol>
                </div>
              ))}

              <div className="flex flex-col gap-5">
                <h3 className="text-sm text-[#010101] font-semibold">
                  Where is University?
                </h3>
                <p className="text-[#666666] text-sm">
                  Off Oba Otudeko Avenue, Toll-Gate Area, Ibadan, Nigeria. Click
                  <Link
                    className="text-[#fa7252]"
                    to={
                      "https://www.google.com/maps/dir//google+maps+lead+city+university/@7.3265752,3.8065488,12z/data=!3m1!4b1!4m9!4m8!1m1!4e2!1m5!1m1!1s0x10398e7af2bddd35:0xc51cd35a1d00c3c2!2m2!1d3.8765894!2d7.3265806"
                    }
                  >
                    here
                  </Link>{" "}
                  for directions
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <h3 className="text-sm text-[#010101] font-semibold">
                  How do I get to University?
                </h3>
                <p className="text-[#666666] text-sm">
                  You can connect to the University through Challenge,
                  Lagos-Ibadan Expressway, New Garage or Iwo-Road Expressway.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <h3 className="text-sm text-[#010101] font-semibold">
                  How do I contact the University? What are the University's
                  telephone numbers?
                </h3>
                <p className="text-[#666666] text-sm">
                  Admissions Office:{" "}
                  <Link className="text-[#fa7252]" to={"tel: 0815 331 8702"}>
                    0815 331 8702
                  </Link>
                  ,{" "}
                  <Link className="text-[#fa7252]" to={"tel: 0815 331 8708"}>
                    0815 331 8708
                  </Link>{" "}
                  | Registrar: 09062068913 | Vice-Chancellor: 08185921818.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <h3 className="text-sm text-[#010101] font-semibold">
                  Can I attend a public lecture or seminar?
                </h3>
                <p className="text-[#666666] text-sm">
                  Yes. You are welcome all the time to participate in Public
                  Lectures and Seminars organised by the Faculties and
                  Departments in the Uiversity.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <h3 className="text-sm text-[#010101] font-semibold">
                  Can my organisation hold a conference/meeting/dinner at the
                  University? How can I book the University International
                  Conferene Centre?
                </h3>
                <p className="text-[#666666] text-sm">
                  You or your organization can make use of the International
                  Conference Centre for your conferences and meetings. The
                  Adeline Hall is also available for use.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <h3 className="text-sm text-[#010101] font-semibold">
                  Where can I stay in Lead City University?
                </h3>
                <p className="text-[#666666] text-sm">
                  The University is proud of the Victory Hall, Achievers Hall
                  and Enterprise Hall for students. The University Guest House
                  is also available for booking.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <h3 className="text-sm text-[#010101] font-semibold">
                  I would like to study in the University. What courses are
                  available? How do I apply? Can you send me an application
                  form?
                </h3>
                <p className="text-[#666666] text-sm">
                  Get a list of available courses{" "}
                  <Link
                    className="text-[#fa7252]"
                    to={"http://lcu.edu.ng/index.php/all-courses"}
                  >
                    here.
                  </Link>
                  <br />
                  Click{" "}
                  <Link
                    className="text-[#fa7252]"
                    to={
                      "https://www.lcu.edu.ng/images/Online_Application_Form.pdf"
                    }
                  >
                    here
                  </Link>{" "}
                  to download application Form
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <h3 className="text-sm text-[#010101] font-semibold">
                  What does it cost to Study at University?
                </h3>
                <p className="text-[#666666] text-sm">
                  Please click{" "}
                  <Link
                    className="text-[#fa7252]"
                    to={"http://lcu.edu.ng/index.php/all-courses"}
                  >
                    here
                  </Link>{" "}
                  for a list of courses and associated costs.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <h3 className="text-sm text-[#010101] font-semibold">
                  Are there grants or bursaries available to students?
                </h3>
                <p className="text-[#666666] text-sm">
                  Yes. The University offers full and part scholarships to
                  deserving and indigent students based on merit.{" "}
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <h3 className="text-sm text-[#010101] font-semibold">
                  When was University founded?
                </h3>
                <p className="text-[#666666] text-sm">
                  It was founded in 2005.
                </p>
                <h3 className="text-sm text-[#010101] font-semibold">
                  How many departments are there at University?
                </h3>

                <p className="text-[#666666] text-sm">
                  There are over Seventy departments. Many programmes are still
                  being approved by the National Universities Commission.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <h3 className="text-sm text-[#010101] font-semibold">
                  When does a new session start? What is the dates for the next
                  academic year?
                </h3>
                <p className="text-[#666666] text-sm">
                  New academic session usually starts every September, however
                  applications are welcomed from prospective candidates any time
                  so as to have enough time to process applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaQs;
