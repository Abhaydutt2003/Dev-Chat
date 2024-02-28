import SidebarButton from "./SidebarButton";
import ThemeToggle from "./ThemeToggle";
import React from "react";
import { SidebarButtonInfo } from "../../data";
import { toggleTheme, handleSideBar } from "../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

const SideBar = () => {
  const selected = useSelector((state) => {
    return state.userState.sideBarIndex;
  });
  const dispatch = useDispatch();

  return (
    <>
      <div className=" flex items-center  justify-between flex-col shadow-lg h-screen w-32 bg-base-300">
        <div className="flex items-center flex-col">
          {SidebarButtonInfo.map((info, index) => {
            return (
              <React.Fragment key={index}>
                <SidebarButton
                  bg={
                    index == 0
                      ? "bg-secondary"
                      : selected == index
                      ? "bg-primary"
                      : ""
                  }
                  h={info.height}
                  w={info.width}
                  logoHeight={info.logoHeight}
                  mt={info.mt}
                  logo={info.logo}
                  setSelected={() => dispatch(handleSideBar(index))}
                  index={index}
                ></SidebarButton>
                {index == 3 && <div className="divider mb-0 w-16 mt-4"></div>}
              </React.Fragment>
            );
          })}
        </div>
        <div className="flex items-center flex-col">
          <ThemeToggle
            handleToggle={() => dispatch(toggleTheme())}
          ></ThemeToggle>
          <div className="avatar mb-12 mt-12">
            <div className=" w-11 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;

//primary,secondary,accent,neutral,base-100
//<Bar width={"w-16"} margin={"mt-4"}></Bar>
//<div className="divider mb-0"></div>
