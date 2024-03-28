//this file will export the router, it will have all the logic
import { Dashboard, Page404, Auth } from "../Pages";
import { ErrorElement, GeneralApp } from "../Components";
import { allPaths } from "./paths";
import { Navigate, createBrowserRouter } from "react-router-dom";
import { Login, Register, Verify } from "../Components/Auth";

//todo implement lazy loading

const router = createBrowserRouter([
  {
    path: allPaths.AUTH,
    element: <Auth></Auth>,
    children: [
      {
        path: allPaths.LOGIN,
        element: <Login></Login>,
        errorElement: <ErrorElement></ErrorElement>,
      },
      {
        path: allPaths.REGISTER,
        element: <Register></Register>,
        errorElement: <ErrorElement></ErrorElement>,
      },
      {
        path: allPaths.VERIFY,
        element: <Verify></Verify>,
        errorElement: <ErrorElement></ErrorElement>,
      },
    ],
  },
  {
    path: allPaths.ROOT,
    element: <Dashboard></Dashboard>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        index: true,
        element: <Navigate to={allPaths.APP} replace />,
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
