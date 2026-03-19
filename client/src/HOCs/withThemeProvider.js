import React, { Children, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";

import { darkTheme } from "../styles/darkTheme";
import { lightTheme } from "../styles/lightTheme";

import { SWITCH_THEMES } from "../constants/specificWords";
import { LIGHT_THEME_NAME, DARK_THEME_NAME } from "../constants/theme";
import {
    getLocalStorageItem,
    setLocalStorageItem,
} from "../utils/localStorage";
import { ternaryOperation } from "../utils/ternaryOperation";

const WithThemeProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState(
        getLocalStorageItem(SWITCH_THEMES) ?? false
    );

    const currentThemeHandler = bool => {
        setLocalStorageItem(SWITCH_THEMES, bool);
        setCurrentTheme(bool);
    };

    const theme = ternaryOperation(!currentTheme, lightTheme, darkTheme);
    const themeName = ternaryOperation(!currentTheme, LIGHT_THEME_NAME, DARK_THEME_NAME);

    return (
        <ThemeProvider
            theme={theme}
        >
            {Children.map(children, child => {
                return React.cloneElement(child, { currentThemeName: themeName, currentThemeHandler });
            })}
        </ThemeProvider>
    );
};

export default WithThemeProvider;
