import DashboardPage from "../Pages/Dashboard/DashboardPage";
import OurWorks from "../Pages/OurWorks/OurWorks";

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
];
