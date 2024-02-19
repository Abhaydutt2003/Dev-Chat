import { Outlet } from "react-router-dom";
import { SideBar } from "../Components";



//TODO put the sideBar here
const DashBoard = ()=>{
    return(
        <div className=" flex flex-row">
        <SideBar></SideBar>
        <Outlet></Outlet>
        </div>
    )
}

export default DashBoard;