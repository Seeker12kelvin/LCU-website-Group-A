import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import AllCourses from "../pages/allCourses";
import LandingPage from "../pages/landingPage";
import AdmissionsPage from "../pages/admissionsPage";

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
    ],
  },
]);

export default routes;
