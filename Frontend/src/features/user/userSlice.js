import { createSlice } from "@reduxjs/toolkit";

import { themes } from "../../data";

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("current-theme") || themes.light;
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};




const initialState = {
  user: "some random user",
  sideBarIndex: localStorage.getItem("sideBarIndex") || 1,
  theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    toggleTheme: (state) => {
      const { light, dark } = themes;
      const newTheme = state.theme === light ? dark : light;
      state.theme = newTheme;
      document.documentElement.setAttribute("data-theme", state.theme);
      localStorage.setItem("current-theme", state.theme);
    },
    handleSideBar: (state, action) => {
      state.sideBarIndex = action.payload;
      localStorage.setItem("sideBarIndex", action.payload);
    },
  },
});

export const { toggleTheme, handleSideBar } = userSlice.actions;
export default userSlice.reducer;
