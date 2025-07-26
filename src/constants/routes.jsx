import AboutUs from "../Pages/AboutUs/AboutUs";
import Contact from "../Pages/Contact/Contact";
import DashboardPage from "../Pages/Dashboard/DashboardPage";
import OurTeam from "../Pages/OurTeam/OurTeam";
import OurWorks from "../Pages/OurWorks/OurWorks";
import ProjectItem from "../Pages/ProjectItem/ProjectItem";
import ServiceType from "../Pages/ServiceType/ServiceType";
import VacancyOrder from "../Pages/VacancyOrOrder/VacancyOrder";

export const routes = [
  {
    id: 1,
    path: "/",
    element: <DashboardPage />,
  },
  {
    id: 2,
    path: "/our-work",
    element: <OurWorks />,
  },
  {
    id: 3,
    path: "/:id",
    element: <ProjectItem />,
  },
  {
    id: 4,
    path: "/our-team",
    element: <OurTeam />,
  },
  {
    id: 5,
    path: "/contact",
    element: <Contact />,
  },
  {
    id: 6,
    path: "/vacancy-order",
    element: <VacancyOrder />,
  },
  {
    id: 7,
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    id: 8,
    path: "/service-type",
    element: <ServiceType />,
  },
];
