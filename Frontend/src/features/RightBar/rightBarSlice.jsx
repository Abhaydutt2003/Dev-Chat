import { createSlice } from "@reduxjs/toolkit";

const displays = {
  CONTACT_INFO: "contactinfo",
  MEDIA_LINKS: "medialinks",
};

//intially the user should see the contact_info page
const initialState = {
  currentDisplay: displays.CONTACT_INFO,
};

const rightBarSlice = createSlice({
  name: "rightBar",
  initialState: initialState,
  reducers: {
    shiftMedia: (state) => {
      //reducer to shift to the media links
      state.currentDisplay = displays.MEDIA_LINKS;
    },
  },
});

export const { shiftMedia } = rightBarSlice.actions;
export default rightBarSlice.reducer;
