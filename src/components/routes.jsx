import Layout from "./layout";
import FaQs from "../pages/faQs";
import AboutUs from "../pages/aboutUs";
import History from "../pages/history";
import AllCourses from "../pages/allCourses";
import LandingPage from "../pages/landingPage";
import AdmissionsPage from "../pages/admissionsPage";
import { createBrowserRouter } from "react-router-dom";
import AcademicDiscourse from "../pages/academicDiscourse";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <div className="w-full h-screen flex justify-center items-center text-6xl">
        404: Not Found
      </div>
    ),
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "all-courses",
        element: <AllCourses />,
      },
      {
        path: "admissions",
        element: <AdmissionsPage />,
      },
      {
        path: "conference-proceedings/facon-2022",
        element: <AcademicDiscourse />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/history",
        element: <History />,
      },
      {
        path: "/faqs",
        element: <FaQs />,
      },
    ],
  },
]);

export default routes;
