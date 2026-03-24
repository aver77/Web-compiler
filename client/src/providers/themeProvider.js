import React, { createContext, useContext, useState } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

import { darkTheme } from "styles/darkTheme";
import { lightTheme } from "styles/lightTheme";

import { THEME } from "constants/localStorageKeys";
import { LIGHT_THEME_NAME, DARK_THEME_NAME } from "constants/theme";
import {
    getLocalStorageItem,
    setLocalStorageItem,
} from "utils/localStorage";

const ThemeContext = createContext(null);

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }) => {
    const [theme, setCurrentTheme] = useState(
        getLocalStorageItem(THEME) || LIGHT_THEME_NAME
    );

    const switchTheme = () => {
        const newTheme = theme === LIGHT_THEME_NAME ? DARK_THEME_NAME : LIGHT_THEME_NAME;
        setLocalStorageItem(THEME, newTheme);
        setCurrentTheme(newTheme);
    };

    const muiTheme = theme === LIGHT_THEME_NAME ? lightTheme : darkTheme;

    return (
        <ThemeContext.Provider value={{ theme, switchTheme }}>
            <MuiThemeProvider theme={muiTheme}>
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};