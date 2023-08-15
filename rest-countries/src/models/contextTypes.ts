export interface ThemeContextType {
    isDarkMode: boolean;
    toggleTheme: () => void;
  }
  
  export const initialThemeContext: ThemeContextType = {
    isDarkMode: false,
    toggleTheme: () => {},
  };