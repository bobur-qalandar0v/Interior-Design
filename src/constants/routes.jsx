import Contact from "../Pages/Contact/Contact";
import DashboardPage from "../Pages/Dashboard/DashboardPage";
import OurTeam from "../Pages/OurTeam/OurTeam";
import OurWorks from "../Pages/OurWorks/OurWorks";
import ProjectItem from "../Pages/ProjectItem/ProjectItem";

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
];
