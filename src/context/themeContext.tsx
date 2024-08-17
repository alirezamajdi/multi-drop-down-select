import React, { useEffect, ReactNode } from "react";
import { useLocalStorage } from "usehooks-ts";

type themeType = {
  theme: string;
  toggleTheme: () => void;
};

const ThemeContext = React.createContext<themeType>({
  theme: "",
  toggleTheme: () => {},
});

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prev: string) => {
      return prev === "light" ? "dark" : "light";
    });
  }

  const themeValue: themeType = {
    theme,
    toggleTheme,
  };
  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
