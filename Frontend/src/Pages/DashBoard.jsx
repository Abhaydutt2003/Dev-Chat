import { Outlet } from "react-router-dom";
import { SideBar } from "../Components";
import BarContent from "../Components/RightBar/BarContent";


const DashBoard = () => {
  return (
    <BarContent>
      <div className=" flex flex-row w-screen ">
        <SideBar></SideBar>
        <Outlet></Outlet>
      </div>
    </BarContent>
  );
};

export default DashBoard;
