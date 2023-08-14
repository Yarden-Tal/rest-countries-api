import { createContext, useContext, useState } from "react";

interface ThemeContextType {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

const initialThemeContext: ThemeContextType = {
    isDarkMode: false,
    toggleTheme: () => {},
};

export const ThemeContext = createContext(initialThemeContext);

export const ThemeProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark');
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
