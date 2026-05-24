import bg_image from "../images/bg.jpg";
import Header from "../components/header";
import { coursesData } from "../Data/data";

const AllCourses = () => {
  return (
    <section className="w-full h-full relative">
      <img
        src={bg_image}
        alt="A picture of the school ground"
        className="absolute -z-1 top-0 h-100 w-full object-cover"
      />
      <div className="w-full h-full flex flex-col justify-center items-start gap-8 max-xl:pt-10 max-xl:gap-15 xl:p-20">
        <Header />

        <div className="xl:text-4xl font-bold bg-[#0f1725] text-white max-xl:text-2xl p-2 max-xl:ml-2">
          <h1>All Courses</h1>
        </div>

        <div className="h-full w-full bg-white max-sm:px-5 max-md:px-10 md:p-15 pt-25 flex flex-col gap-10">
          <div className="w-full flex flex-col gap-2">
            <h2 className="uppercase xl:text-3xl max-xl:text-xl">
              Degree Programmes
            </h2>
            <p className="text-sm text-[#666]">
              Note: Stipulated fees for Newly-admitted students only.
            </p>
          </div>

          <div className="w-full h-full flex flex-wrap justify-center gap-5">
            {coursesData.map((course, index) => (
              <div key={index} className="w-65 h-fit text-center shadow-xl">
                <div
                  className="text-white xl:text-2xl max-xl:text-lg h-25 w-full flex justify-center items-center p-4"
                  style={{ backgroundColor: course.color }}
                >
                  <span>{course.name}</span>
                </div>

                <div className="w-full p-2 flex justify-center items-center">
                  <h1
                    className="xl:text-3xl max-xl:text-2xl"
                    style={{ color: course.color }}
                  >
                    {course.price}
                  </h1>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full p-2 bg-[#e2e8f3] text-[#666] text-2xl text-center flex flex-col gap-2">
            <p>Post UTME Form: ₦2,000</p>
            <p>Acceptance Fee: ₦50,000</p>
            <p>Departmental Fee: ₦5,000</p>
            <p>Development Levy: ₦20,000</p>
            <p>Matriculation Fee: ₦2,000</p>
            <p>Feeding (₦100,000 per month for 9 Months)</p>
            <p>Accomodation (₦500,000)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllCourses;
