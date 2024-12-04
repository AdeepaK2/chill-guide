// components/ThemeProvider.js
import React, { createContext, useState, useContext } from 'react';
import { lightTheme, darkTheme, createStyles } from '../styles/theme';

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);  // Default theme is light

    const toggleTheme = () => setIsDark(!isDark);
    const theme = isDark ? darkTheme : lightTheme;
    const styles = createStyles(theme);

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme, theme, styles }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
