import { Outlet } from "react-router-dom";



//TODO put the sideBar here
const DashBoard = ()=>{
    return(
        <>
        <h1>DashBord</h1>
        <Outlet></Outlet>
        </>
    )
}

export default DashBoard;