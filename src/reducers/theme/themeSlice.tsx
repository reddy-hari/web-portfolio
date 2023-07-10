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
    toggleDarkTheme: (state) => {
      state.dark = !state.dark;
    },
  },
});

export const { setDarkTheme, setLightTheme, toggleDarkTheme } =
  themeSlice.actions;

export default themeSlice.reducer;
