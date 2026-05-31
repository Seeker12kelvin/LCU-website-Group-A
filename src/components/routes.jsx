import Layout from "./layout";
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
    ],
  },
]);

export default routes;
