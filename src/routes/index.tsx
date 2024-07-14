import { useRoutes } from "react-router-dom";
import ComponentRoutes from "./component-routes";

export default function ThemeRoutes() {
  return <>{useRoutes([ComponentRoutes])}</>;
}
