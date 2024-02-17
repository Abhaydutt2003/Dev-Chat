//this file will export the router, it will have all the logic
import { Dashboard, Page404 } from "../Pages";
import { ErrorElement, GeneralApp } from "../Components";
import { PATH_DASHBOARD, allPaths} from "./paths";
import { Navigate, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: PATH_DASHBOARD.root,
    element: <Dashboard></Dashboard>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        index: true,
        element: <Navigate to={PATH_DASHBOARD.general.app} replace />,
      },
      {
        path: allPaths.APP,
        element: <GeneralApp></GeneralApp>,
        errorElement: <ErrorElement></ErrorElement>,
      },
    ],
  },
  {
    path: "*",
    element: <Page404></Page404>,
  },
]);

export default router;
