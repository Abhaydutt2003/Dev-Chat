import { createSlice } from "@reduxjs/toolkit";
import { rightBarDisplays } from "../../data";


//intially the user should see the contact_info page
//Look into weather the user should persist on which page he/she was after using the rightbar



const initialState = {
  currentDisplay: rightBarDisplays.CONTACT_INFO,
};

const rightBarSlice = createSlice({
  name: "rightBar",
  initialState: initialState,
  reducers: {
    shiftDisplay: (state,action) => {
      //reducer to shift to the media links
      state.currentDisplay = action.payload;
    },
  },
});

export const { shiftDisplay } = rightBarSlice.actions;
export default rightBarSlice.reducer;
