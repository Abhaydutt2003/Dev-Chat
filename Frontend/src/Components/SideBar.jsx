import SidebarButton from "./SidebarButton";
import ThemeToggle from "./ThemeToggle";
import { useEffect, useState } from "react";
import React from "react";
import { SidebarButtonInfo, themes } from "../data";

const SideBar = () => {
  const [selected, setSelected] = useState(1);
  //logic to handle theme change, will shift to redux later
  const getThemeFromLocalStorage = () => {
    return localStorage.getItem("current-theme") || themes.light;
  };
  const [theme, setTheme] = useState(getThemeFromLocalStorage());
  const handleToggle = () => {
    const { light, dark } = themes;
    const newTheme = theme === light ? dark : light;
    setTheme(newTheme);
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("current-theme", theme);
  }, [theme]);
  return (
    <>
      <div className=" flex items-center  justify-between flex-col shadow-lg h-screen w-32 ">
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
                  setSelected={setSelected}
                  index={index}
                ></SidebarButton>
                {index == 3 && (
                  <div
                    className=" w-16 bg-neutral mt-4 border-solid"
                    style={{ height: "1px" }}
                  ></div>
                )}
              </React.Fragment>
            );
          })}
        </div>
        <div className="flex items-center flex-col">
          <ThemeToggle handleToggle = {handleToggle}></ThemeToggle>
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