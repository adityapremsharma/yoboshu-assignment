import React, { useState } from "react";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../dark-mode/GlobalStyle";
import { lightTheme, darkTheme } from "../dark-mode/Theme";

import "../scss/main.scss";

import TrainersList from "./TrainersList";

export default function App() {
  const [theme, setTheme] = useState("dark");
  const themeToggler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <label
        className={`switch-label ${
          theme === "dark" ? "color-white" : "color-black"
        }`}
      >
        {theme === "dark" ? "Dark Mode" : "Light Mode"}
        <label className="switch">
          <input type="checkbox" onClick={themeToggler} value="Switch Theme" />
          <span className="slider round"></span>
        </label>
      </label>
      <div className="App">
        <TrainersList theme={theme} />
      </div>
      <footer>Copyright {new Date().getFullYear()} @Yoboshu</footer>
    </ThemeProvider>
  );
}
