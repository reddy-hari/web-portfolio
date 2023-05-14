import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  dark: boolean;
  light: boolean;
}

const initialState: ThemeState = {
  dark: false,
  light: true,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setDarkTheme: (state) => {
      state.dark = true;
    },
    setLightTheme: (state) => {
      state.light = true;
    },
  },
});

export const { setDarkTheme, setLightTheme } = themeSlice.actions;

export default themeSlice.reducer;
