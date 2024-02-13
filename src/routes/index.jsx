import { Suspense,lazy } from "react";
import {Loading} from "../Components";
import { Navigate, useRoutes } from "react-router-dom";



import DashboardLayout from "../Layouts/dashboard";


//config
import { DEFAULT_PATH } from "../config";



//function to wrap a component in suspense

// eslint-disable-next-line react/display-name
const Loadable = (Component)=>(props)=>{
    return(
            <Suspense fallback = {<Loading></Loading>}>
                <Component {...props}></Component>
            </Suspense>
    )
};

const Router = ()=>{
    return useRoutes([
        {
            path:"/",
            element:<DashboardLayout></DashboardLayout>,
            children:[
                {element:<Navigate to = {DEFAULT_PATH} replace/>,index:true},
                {path:'app',element:<GeneralApp></GeneralApp>},
                {path:'404',element:<Page404></Page404>},
                { path: "*", element: <Navigate to="/404" replace /> },
            ]
        },
        { path: "*", element: <Navigate to="/404" replace /> },
    ])
}

export default Router;




//if this optimization is not done, we will be shipping a single large 
//bundle of javascript code, which can further affect the perfromance of the app
//now by splliting , we will not be doing so , which will improve the performance
//by a huge margin in weaker devices.
const GeneralApp = Loadable(
   lazy(()=>import('../Pages/dashboard/GeneralApp')),
);

//the same concept of code splitting as above
const Page404 = Loadable(
    lazy(()=>import('../Pages/Page404')),
);






