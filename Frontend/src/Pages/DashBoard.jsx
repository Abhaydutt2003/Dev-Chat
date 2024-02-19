import { Outlet } from "react-router-dom";
import { SideBar } from "../Components";



//TODO put the sideBar here
const DashBoard = ()=>{
    return(
        <>
        <SideBar></SideBar>
        <h1 className=" underline">DashBord</h1>
        <Outlet></Outlet>
        </>
    )
}

export default DashBoard;