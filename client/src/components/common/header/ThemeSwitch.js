import React from "react";
import Switch from "@mui/material/Switch";

import { useThemeContext } from "providers/themeProvider";
import { DARK_THEME_NAME } from "constants/theme";

export const ThemeSwitch = () => {
    const { theme, switchTheme } = useThemeContext();

    const label = { inputProps: { "aria-label": "Switch demo" } };

    return (
        <Switch
            color="secondary"
            checked={theme === DARK_THEME_NAME}
            onClick={switchTheme}
            {...label}
        />
    );
};