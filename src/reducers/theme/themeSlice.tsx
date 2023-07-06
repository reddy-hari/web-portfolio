import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  dark: boolean;
}

const initialState: ThemeState = {
  dark: localStorage.getItem("theme") === "dark",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setDarkTheme: (state) => {
      state.dark = true;
      localStorage.setItem("theme", "dark");
    },
    setLightTheme: (state) => {
      state.dark = false;
      localStorage.setItem("theme", "light");
    },

    toggleDarkTheme: (state) => {
      state.dark = !state.dark;
      localStorage.setItem("theme", state.dark ? "dark" : "light");
    },
  },
});

export const { setDarkTheme, setLightTheme, toggleDarkTheme } =
  themeSlice.actions;

export default themeSlice.reducer;
