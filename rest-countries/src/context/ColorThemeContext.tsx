import { createContext, useContext, useState } from "react";
import { initialThemeContext, ThemeContextType } from "../models/contextTypes";

const DARK_MODE_KEY: string = "darkMode";

export const ThemeContext = createContext(initialThemeContext);

export const ThemeProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  
const storedDarkMode: string | null = localStorage.getItem(DARK_MODE_KEY);
const isDarkOnStorage: boolean = (storedDarkMode === "true")

  if (isDarkOnStorage) document.body.classList.add("dark", "shadow-dark");
  else document.body.classList.remove("dark", "shadow-dark");

  /**
   * Dark mode source-of-truth
   */
  const [isDarkMode, setIsDarkMode] = useState<boolean>(isDarkOnStorage);

  /**
   * Toggles between dark & light mode & saves choice in local-storage
   */
  const toggleTheme = () => {
    const newDarkMode: boolean = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem(DARK_MODE_KEY, String(newDarkMode));
  };

  const themeContextValue: ThemeContextType = {
    isDarkMode,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => useContext(ThemeContext);
