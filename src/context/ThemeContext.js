import { createContext, useState } from "react";

export const ThemeContext = createContext({
  theme: "",
  setTheme: (theme) => {},
});

//detecting the default theme
const getDefaultTheme = () => {
  const localStorageTheme = localStorage.getItem("default-theme");
  return localStorageTheme || "light";
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getDefaultTheme());

  const handleThemeChange = () => {
    const isCurrentDark = theme === "dark";
    setTheme(isCurrentDark ? "light" : "dark");
    localStorage.setItem("default-theme", isCurrentDark ? "light" : "dark");
  };

  const value = { theme, handleThemeChange };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
