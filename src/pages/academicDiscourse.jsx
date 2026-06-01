import bg_image from "../images/bg.jpg";
import Header from "../components/header";
import TwitterLink from "../components/twitterLink";
import { Link } from "react-router-dom";

const AcademicDiscourse = () => {
  return (
    <section className="w-full h-full relative px-5">
      <div
        style={{ backgroundImage: `url(${bg_image})` }}
        className="h-120 w-full bg-cover bg-no-repeat"
      >
        <div className="w-full h-full flex flex-col justify-start items-start gap-8 max-xl:pt-10 max-xl:gap-15 xl:pt-10 xl:px-20">
          <Header />

          <div className="xl:text-4xl bg-[#0f1725] text-white max-xl:text-2xl p-2 max-xl:ml-2">
            <h1>Conference Proceedings</h1>
          </div>

          <div className="h-full w-full bg-white max-sm:px-5 max-md:px-10 md:p-15 pt-25 flex flex-col gap-10">
            <div className="w-full flex flex-col gap-2">
              <h2 className="xl:text-4xl max-xl:text-3xl">Fascon 2022</h2>
            </div>

            <div className="flex flex-col gap-5">
              <Link
                to={
                  "https://lcu.edu.ng/images/COPD/FASCON_2022_Conference_Proceedings_Complete.pdf"
                }
                className="text-xs text-white font-semibold uppercase bg-[#fa7252] w-fit px-6 py-2.5"
              >
                Download Conference Proceedings
              </Link>

              <strong className="text-[#111] text-sm font-bold text-center">
                3rd International Conference, Faculty of Natural and Applied
                Sciences (FASCON) 2022 <br /> 2 - 4 November 2022 International
                Conference Centre, Lead City University, Ibadan, Oyo State,
                Nigeria
              </strong>
            </div>

            <p className="leading-6 text-sm text-[#666]">
              Translational Research in Science and Technology for Sustainable
              Development Circa COVID-19 Era <br />
              Venue: International Conference Centre, Lead City University,
              Ibadan, Oyo State, Nigeria <br />
              Date: 2 - 4 November 2022
            </p>

            <div className="flex flex-col w-full text-center">
              <h3 className="text-[#111] text-sm font-bold text-center">
                Publication Information
              </h3>
              <p className="leading-6 text-sm text-[#666]">
                Title: 3rd International Conference, Faculty of Natural and
                Applied Sciences (FASCON) 2022 <br />
                Proceedings Format: Printed / eProceedings
              </p>
            </div>

            <p className="leading-6 text-sm text-[#666] text-center">
              eISBN: 978-978-799-394-1 <br />
              Date of print: July 2023 <br />
              Version: First Edition Editor-in-Chief: Wilson Sakpere, PhD
            </p>

            <TwitterLink />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicDiscourse;
