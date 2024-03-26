//this file will export the router, it will have all the logic
import { Dashboard, Page404,Auth } from "../Pages";
import { ErrorElement, GeneralApp } from "../Components";
import { PATHS, allPaths} from "./paths";
import { Navigate, createBrowserRouter } from "react-router-dom";

//todo implement lazy loading

const router = createBrowserRouter([
  {
    path:allPaths.AUTH,
    element:<Auth></Auth>,
    
  },
  {
    path: PATHS.root,
    element: <Dashboard></Dashboard>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        index: true,
        element: <Navigate to={PATHS.general.app} replace />,
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
