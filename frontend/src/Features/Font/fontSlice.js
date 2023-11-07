import { createSlice } from "@reduxjs/toolkit";
import { getFromLocalStorage } from "../../utils/getLocalStorage";

const initialState = {
  fonts: [
    {
      name: "Default",
      family: `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
    },
    {
      name: "Georgia",
      family: "Georgia, serif",
    },
    {
      name: "Gill Sans",
      family: `"Gill Sans", sans-serif`,
    },
    {
      name: "Cursive",
      family: "cursive",
    },
    {
      name: "Mono",
      family: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
    },
  ],
  fontFamily: getFromLocalStorage("fontFamily", "Default"),
  fontSize: getFromLocalStorage("fontSize", 16),
};

export const fontSlice = createSlice({
  name: "font",
  initialState,
  reducers: {
    changeFont: (state, action) => {
      console.log(action.payload);
      localStorage.setItem("fontFamily", JSON.stringify(action.payload));
      state.fontFamily = action.payload;
    },
    increaseFontSize: (state) => {
      state.fontSize += 1;
      localStorage.setItem("fontSize", JSON.stringify(state.fontSize));
    },
    decreaseFontSize: (state) => {
      state.fontSize -= 1;
      localStorage.setItem("fontSize", JSON.stringify(state.fontSize));
    },
  },
});

export const { changeFont, increaseFontSize, decreaseFontSize } =
  fontSlice.actions;

export default fontSlice.reducer;
