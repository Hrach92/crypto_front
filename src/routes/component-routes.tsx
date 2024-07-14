import { lazy } from "react";
import Loadable from "../components/loadable";

const HomePage = Loadable(lazy(() => import("../components/home-page")));

const ComponentRoutes = {
  path: "/",
  children: [
    {
      path: "/",
      element: <HomePage />,
    },
  ],
};
export default ComponentRoutes;
