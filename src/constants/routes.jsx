import DashboardPage from "../Pages/Dashboard/DashboardPage";
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
];
